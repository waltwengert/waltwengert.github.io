//js file rather than json so it can be read from index.js without the need for hosting this file
//this data is a stand-in for an API response data to populate the HTML page
var data = {
  heading: {
    name: "Walt Wengert",
    imgSource: "me.png",
    mailLink: "mailto:walt.frederick.john@live.com",
    mailText: "walt.frederick.john@live.com",
    githubLink: "https://github.com/waltwengert",
    linkedinLink: "https://www.linkedin.com/in/walter-wengert-457864196/",
  },
  about: [
    {
      heading: "I am a",
      body:
        "recent graduate from The University of Queensland where I majored in Computer Science and Film & Television Studies in a Bachelor of Science and Arts dual degree.",
    },
    {
      heading: "I currently",
      body:
        "work as an IT Technician for Education Queensland. In this role I manage a school's network and assist staff with hardware and software issues.",
    },
    {
      heading: "Software development",
      body:
        "was the focus of my degree and I am currently seeking employment in this field. Check out the projects tab on this website to see some of my work!",
    },
  ],
  projects: [
    {
      logo: "project.jpg",
      title: "Shift Rosterer",
      tech: "HTML, CSS, JS, PHP, SQL",
      link: "comingSoon.html",
      source: "comingSoon.html",
      description:
        "Tool for employers/employees to manage an organisation's shift roster.",
    },
    {
      logo: "project.jpg",
      title: "Secret Santa",
      tech: "HTML, CSS, JS",
      link: "comingSoon.html",
      source: "comingSoon.html",
      description:
        "Tool for assigning secret santa recipients for a given group.",
    },
    {
      logo: "project.jpg",
      title: "Endless Runner",
      tech: "Python (TkInter)",
      link: "comingSoon.html",
      source: "comingSoon.html",
      description: "Simple horizontal endless runner game.",
    },
    {
      logo: "project.jpg",
      title: "py Calculator",
      tech: "Python",
      link: "comingSoon.html",
      source: "comingSoon.html",
      description: "Python implementation of a standard graphical calculator",
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
    {
      employer: "Lightmare Studios",
      position: "Assistant",
      period: "May 2012-May 2013",
    },
  ],
};
