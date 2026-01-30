import React from "react";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";

export default function Projects() {
  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Projects</h1>
      <div className="repo-cards-div-main">
        {ProjectsData.data.map((repo) => {
          return <GithubRepoCard repo={repo} key={repo.name} />;
        })}
      </div>
      <Button
        text={"More Projects"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
      />
    </div>
  );
}
