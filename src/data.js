//js file rather than json so it can be read from index.js without the need for hosting this file
//this data is a stand-in for an API response data to populate the HTML page
var data = {
  heading: {
    name: "Walt Wengert",
    imgSource: "assets/ww.gif",
    mailLink: "mailto:walt.frederick.john@live.com",
    mailText: "walt.frederick.john@live.com",
    githubLink: "https://github.com/waltwengert",
    linkedinLink: "https://www.linkedin.com/in/walter-wengert-457864196/",
  },
  about: [
    {
      heading: "I am",
      body:
        "a recent <strong>Computer Science</strong>/Film Studies graduate from <strong>The University of Queensland</strong>.",
    },
    {
      heading: "I work",
      body:
        "as an <strong>IT Technician</strong> for Education Queensland, <strong>administering</strong> a school's <strong>network</strong> and devices.",
    },
    {
      heading: "Software development",
      body:
        "was the focus of my degree and is one of my main interests. Check out the <strong>projects below</strong> to see some of my work!",
    },
  ],
  projects: [
    {
      screen: "https://via.placeholder.com/200.png",
      title: "Shift Rosterer",
      tech: "HTML, CSS, JS, PHP, SQL",
      link: "https://github.com/waltwengert/shift-rosterer",
      play: "na",
    },
    {
      screen: "assets/portfolio.PNG",
      title: "This Site",
      tech: "HTML, CSS, JS",
      link: "https://github.com/waltwengert/waltwengert.github.io",
      play: "https://waltwengert.github.io",
    },
    {
      screen: "assets/kindylog.PNG",
      title: "KindyLog Product Site",
      tech: "HTML, CSS, JS, PHP",
      link: "https://github.com/waltwengert/kindylog-productsite",
      play: "https://waltwengert.github.io/kindylog-productsite",
    },
    {
      screen: "assets/secretsanta.PNG",
      title: "Secret Santa",
      tech: "HTML, CSS, JS",
      link: "https://github.com/waltwengert/secret-santa",
      play: "https://waltwengert.github.io/secret-santa/",
    },
    {
      screen: "assets/endless.PNG",
      title: "Endless Runner",
      tech: "Python",
      link: "https://github.com/waltwengert/endless_runner",
      play: "na",
    },
    {
      screen: "assets/calc.PNG",
      title: "py Calculator",
      tech: "Python",
      link: "https://github.com/waltwengert/py_calculator",
      play: "na",
    },
  ],
  education: [
    {
      level: "Bachelor of Science",
      focus: "Computer Science (extended major)",
      institution: "The University of Queensland",
      period: "2019",
    },
    {
      level: "Bachelor of Arts",
      focus:
        "Film and Television Studies (major); Communication Studies (minor), Philosophy (minor)",
      institution: "The University of Queensland",
      period: "2019",
    },
    {
      level: "Certificate III",
      focus: "Media",
      institution: "TAFE",
      period: "2013",
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
      period: "June 2020 - Present",
    },
    {
      employer: "Kmart",
      position: "Retail Assistant",
      period: "April 2012 - June 2020",
    },
    {
      employer: "Australian Electoral Commission",
      position: "Polling Official",
      period: "June 2016",
    },
    {
      employer: "Lightmare Studios",
      position: "Software QA",
      period: "May 2012 - May 2013",
    },
  ],
};
