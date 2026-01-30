/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rohit Pal Portfolio",
  description:
    "An experienced and passionate full-stack developer with over three years of expertise in creating cutting-edge web applications and robust backend systems.",
  og: {
    title: "Rohit Pal Portfolio",
    type: "website",
    url: "#",
  },
};

//Home Page
const greeting = {
  title: "Rohit Pal",
  logo_name: "Rohit Pal",
  subTitle:
    "An experienced and passionate full-stack developer with over three years of expertise in creating cutting-edge web applications and robust backend systems. Specializing in modern web technologies to transform complex problems into elegant and efficient solutions. Proven track record in providing innovative and reliable software solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1VyhU4RvO8jHtqu5j__Hm2NbgMY3Nq0uH/view",
  githubProfile: "https://github.com/iamrohitpal",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/rohitpal-webkul/rohitpal-webkul",
  // linkedin: "https://www.linkedin.com/in/iamrohitpal/",
  // gmail: "amitkumarofficial@outlook.in",
  // instagram: "https://www.instagram.com/iamrohitpalg/"

  {
    name: "Github",
    link: "https://github.com/iamrohitpal",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/iamrohitpal/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:iamrohitpalg@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/iamrohitpalg/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Laravel",
        "⚡ Vue.js",
        "⚡ React.js (Basic)",
        "⚡ jQuery",
        "⚡ PHP",
        "⚡ JavaScript",
        "⚡ GitHub",
        "⚡ OOPS Concept",
        "⚡ Tailwind CSS",
        "⚡ Linux",
        "⚡ Web Development",
        "⚡ DBMS",
        "⚡ CI/CD",
        "⚡ Feature Testing",
        "⚡ REST API",
        "⚡ Git",
        "⚡ Web Hosting",
        "⚡ Agile Methodology",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title:
        "Madhu Vachaspati Institute of Engineering and Technology Kaushambi, Prayagraj",
      subtitle: "Bachelor of Technology",
      logo_path: "mviet.png",
      alt_name: "MVIET Kaushambi",
      duration: "2022 – 2025",
      descriptions: [],
      website_link: "https://mvite.co.in/",
    },
    {
      title: "Government Polytechnic Aurai, Bhadohi",
      subtitle: "Diploma in Computer Science",
      logo_path: "diploma.png",
      alt_name: "Government Polytechnic Aurai",
      duration: "2019 – 2022",
      descriptions: [],
      website_link: "https://www.gpaurai.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "PHP Development",
      subtitle: "Techpile Technology Private Limited",
      logo_path: "techpile.png",
      certificate_link: "",
      alt_name: "Techpile",
      color_code: "#000000",
      duration: "May 2021 – July 2021",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "An experienced and passionate full-stack developer with over three years of expertise in creating cutting-edge web applications and robust backend systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Webkul Private Limited",
          company_url: "https://www.webkul.com/",
          logo_path: "webkul.webp",
          duration: "Aug 2023 – Present",
          location: "Uttar Pradesh, India",
          description:
            "Contributed to the development and maintenance of Akeneo-based Product Information Management (PIM) solutions, gaining 1.5 years of hands-on experience and attaining intermediate proficiency (6/10). Worked extensively on Akeneo modules including DAM (Digital Asset Management) and AWS integration, improving media management workflows and enabling efficient cloud-based storage solutions. Played a key role in developing Librepim, a modernized Akeneo-based PIM distribution, by upgrading PHP, Symfony, Elasticsearch, and core dependencies to enhance performance, security, and long-term maintainability. Developed and maintained an open-source eCommerce and PIM platform using PHP and Laravel, achieving a 30% improvement in API response times through query optimization and caching strategies.",
          color: "#000000",
        },
        {
          title: "Jr. Web Developer",
          company: "Tekniko Global Private Limited",
          company_url: "https://www.teknikoglobal.com/",
          logo_path: "teknikoglobal.png",
          duration: "Jun 2023 – Jul 2023",
          location: "Uttar Pradesh, India",
          description:
            "Expanded and preserved web applications using CorePHP and Laravel, reducing page load times by 35% through optimized backend logic. Built responsive, cross-browser-compatible websites, leading to a 15% increase in user retention and accessibility improvements. Managed and deployed feature releases with zero downtime, ensuring smooth transitions and minimal service interruptions. Enhanced a club management web application with membership and event scheduling, boosting user engagement by 50%.",
          color: "#0879bf",
        },
        {
          title: "PHP Developer",
          company: "Outright Systems Pvt. Ltd.",
          company_url: "https://www.outrightcrm.com/",
          logo_path: "outright.png",
          duration: "Sep 2022 – May 2023",
          location: "Uttar Pradesh, India",
          description:
            "Enhanced web applications by improving UI/UX design, increasing user engagement by 25% and reducing bounce rates by 18%. Optimized database queries, improving data retrieval speed by 40% and boosting application efficiency by 20%. Contributed to the development and maintenance of the company’s website, ensuring 100% uptime and updated content for better user experience.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of modern technologies, focusing on building efficient, scalable, and user-friendly web applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "rohitpal.png",
    description:
      "Get in touch! Whether you have a project idea, a collaboration opportunity, or just want to say hello, feel free to reach out. I’m always open to discussing new ideas and possibilities. Let’s connect!",
  },
  addressSection: {
    title: "Address",
    subtitle: "Noida, Uttar Pradesh, India",
    locality: "Noida",
    country: "IN",
    region: "Uttar Pradesh",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "#",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91-9889702929",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
