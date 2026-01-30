import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAMES = ["rohitpal-webkul", "iamrohitpal"];

if (!GITHUB_TOKEN) {
  console.error("Error: GITHUB_TOKEN is not defined in .env or environment variables.");
  process.exit(1);
}

const baseUrl = "https://api.github.com/graphql";
const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + GITHUB_TOKEN,
};

const languages_icons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  "C#": "logos-c-sharp",
  Java: "logos-java",
  Shell: "simple-icons:shell",
  Ruby: "logos:ruby",
  PHP: "logos-php",
  Dockerfile: "simple-icons:docker",
  Rust: "logos-rust",
  Vue: "logos-vue",
  TypeScript: "logos-typescript-icon",
  Laravel: "logos-laravel",
  Symfony: "logos-symfony",
};

const queries = {
  pr: (username) => `query {
    user(login: "${username}") {
      pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
        totalCount
        nodes {
          id
          title
          url
          state
          mergedBy {
            avatarUrl
            url
            login
          }
          createdAt
          number
          changedFiles
          additions
          deletions
          baseRepository {
            name
            url
            owner {
              avatarUrl
              login
              url
            }
          }
        }
      }
    }
  }`,
  issue: (username) => `query {
    user(login: "${username}") {
      issues(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
        totalCount
        nodes {
          id
          closed
          title
          createdAt
          url
          number
          assignees(first: 100) {
            nodes {
              avatarUrl
              name
              url
            }
          }
          repository {
            name
            url
            owner {
              login
              avatarUrl
              url
            }
          }
        }
      }
    }
  }`,
  org: (username) => `query {
    user(login: "${username}") {
      repositoriesContributedTo(last: 100) {
        totalCount
        nodes {
          owner {
            login
            avatarUrl
            __typename
          }
        }
      }
    }
  }`,
  pinned: (username) => `query { 
    user(login: "${username}") { 
      pinnedItems(first: 6, types: REPOSITORY) {
        totalCount
        nodes {
          ... on Repository {
            id
            name
            createdAt,
            url,
            description,
            isFork,
            languages(first: 10) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }`
};

async function queryGitHub(username, queryFn) {
  const body = JSON.stringify({
    query: queryFn(username),
  });

  const response = await fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: body,
  });

  const txt = await response.text();
  try {
    return JSON.parse(txt);
  } catch (e) {
    console.error(`Error parsing response for ${username}:`, txt);
    return null;
  }
}

async function main() {
  console.log(`Starting data fetch for users: ${GITHUB_USERNAMES.join(", ")}...`);

  let allPRs = { data: [], open: 0, closed: 0, merged: 0, totalCount: 0 };
  let allIssues = { data: [], open: 0, closed: 0, totalCount: 0 };
  let allOrgs = { data: [] };
  let allProjects = { data: [] };

  const orgLogins = new Set();
  const projectIds = new Set();

  for (const username of GITHUB_USERNAMES) {
    console.log(`Fetching data for ${username}...`);

    // Fetch PRs
    const prData = await queryGitHub(username, queries.pr);
    if (prData?.data?.user?.pullRequests) {
      const nodes = prData.data.user.pullRequests.nodes;
      allPRs.data.push(...nodes);
      nodes.forEach(node => {
        if (node.state === "OPEN") allPRs.open++;
        else if (node.state === "MERGED") allPRs.merged++;
        else allPRs.closed++;
      });
    }

    // Fetch Issues
    const issueData = await queryGitHub(username, queries.issue);
    if (issueData?.data?.user?.issues) {
      const nodes = issueData.data.user.issues.nodes;
      allIssues.data.push(...nodes);
      nodes.forEach(node => {
        if (!node.closed) allIssues.open++;
        else allIssues.closed++;
      });
    }

    // Fetch Orgs
    const orgData = await queryGitHub(username, queries.org);
    if (orgData?.data?.user?.repositoriesContributedTo) {
      const nodes = orgData.data.user.repositoriesContributedTo.nodes;
      nodes.forEach(node => {
        if (node.owner) {
          const owner = node.owner;
          if (owner.__typename === "Organization" && !orgLogins.has(owner.login)) {
            orgLogins.add(owner.login);
            allOrgs.data.push(owner);
          }
        }
      });
    }

    // Fetch Pinned Projects
    const projectData = await queryGitHub(username, queries.pinned);
    if (projectData?.data?.user?.pinnedItems) {
      const nodes = projectData.data.user.pinnedItems.nodes;
      nodes.forEach(node => {
        if (node && !projectIds.has(node.id)) {
          projectIds.add(node.id);

          // Process languages
          const newLangs = [];
          if (node.languages && node.languages.nodes) {
            node.languages.nodes.forEach(lang => {
              if (languages_icons[lang.name]) {
                newLangs.push({
                  name: lang.name,
                  iconifyClass: languages_icons[lang.name]
                });
              }
            });
          }
          node.languages = newLangs;
          allProjects.data.push(node);
        }
      });
    }
  }

  allPRs.totalCount = allPRs.data.length;
  allIssues.totalCount = allIssues.data.length;

  console.log("Writing files...");

  if (!fs.existsSync("./src/shared/opensource")) {
    fs.mkdirSync("./src/shared/opensource", { recursive: true });
  }

  fs.writeFileSync("./src/shared/opensource/pull_requests.json", JSON.stringify(allPRs, null, 2));
  fs.writeFileSync("./src/shared/opensource/issues.json", JSON.stringify(allIssues, null, 2));
  fs.writeFileSync("./src/shared/opensource/organizations.json", JSON.stringify(allOrgs, null, 2));

  // Update projects.json with aggregated projects
  fs.writeFileSync("./src/shared/opensource/projects.json", JSON.stringify(allProjects, null, 2));

  console.log("Success! Data aggregated from all profiles.");
}

main().catch(err => {
  console.error("Aggregation failed:", err);
});
