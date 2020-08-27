//js file rather than json so it can be read from index.js without the need for hosting this file
//this data is a stand-in for an API response data to populate the HTML page
var data = {
  heading: {
    name: "Walt Wengert",
    imgSource: "ww.gif",
    mailLink: "mailto:walt.frederick.john@live.com",
    mailText: "walt.frederick.john@live.com",
    githubLink: "https://github.com/waltwengert",
    linkedinLink: "https://www.linkedin.com/in/walter-wengert-457864196/",
  },
  about: [
    {
      heading: "I am",
      body:
        "a recent Computer Science/Film and TV graduate from The University of Queensland.",
    },
    {
      heading: "I work",
      body:
        "as an IT Technician for Education Queensland, administering a school's network and devices (Windows workstations, iPads).",
    },
    {
      heading: "Software development",
      body:
        "was the focus of my degree and one of my main interests. Check out the projects tab on this site to see some of my work.",
    },
  ],
  projects: [
    {
      logo: "project.jpg",
      title: "Shift Rosterer",
      tech: "HTML, CSS, JS, PHP, SQL",
      link: " ",
      source: " ",
      description:
        "Tool for employers/employees to manage an organisation's shift roster.",
    },
    {
      logo: "project.jpg",
      title: "This Portfolio Site",
      tech: "HTML, CSS, JS",
      link: "https://github.com/waltwengert/portfolio_site",
      source: "https://github.com/waltwengert/portfolio_site",
      description:
        "Single page website to display resume information and easily link to portfolio projects' source/downloads.",
    },
    {
      logo: "project.jpg",
      title: "Endless Runner",
      tech: "Python (TkInter)",
      link: "https://github.com/waltwengert/endless_runner",
      source: "https://github.com/waltwengert/endless_runner",
      description: "Simple horizontal endless runner game.",
    },
    {
      logo: "project.jpg",
      title: "py Calculator",
      tech: "Python",
      link: "https://github.com/waltwengert/py_calculator",
      source: "https://github.com/waltwengert/py_calculator",
      description: "Python implementation of a standard GUI calculator",
    },
  ],
  education: [
    {
      level: "Bachelor of Science",
      focus: "Computer Science (extended major)",
      institution: "The University of Queensland",
      period: "2015-2019",
    },
    {
      level: "Bachelor of Arts",
      focus:
        "Film and Television Studies (major); Communication Studies (minor), Philosophy (minor)",
      institution: "The University of Queensland",
      period: "2015-2019",
    },
    {
      level: "Certificate III",
      focus: "Media",
      institution: "TAFE/Lightmare Studios",
      period: "2012-2013",
    },
    {
      level: "Certificate I",
      focus: "Information Technology",
      institution: "TAFE",
      period: "2012",
    },
  ],
  employment: [
    {
      employer: "Education Queensland",
      position: "IT Technician",
      period: "June 2020-Present",
    },
    {
      employer: "Kmart",
      position: "Retail Assistant",
      period: "April 2012-June 2020",
    },
    {
      employer: "Australian Electoral Commission",
      position: "Polling Official",
      period: "June 2016",
    },
  ],
};
