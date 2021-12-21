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
        "a <strong>Software Developer</strong> currently employed as a Systems Developer at QSuper.<br><br>I work on Acurity and Java-based projects, with a strong focus on improvement of development processes through implementation of modern DevOps practices with CI/CD pipelines, and enhancement of testing suites.<br><br>I graduated from the University of Queensland as a <strong>Computer Science</strong>/Film Studies major in a dual degree Bachelor of Science/Arts.<br><br>I have a constant drive to expand my experience and knowledge of modern <strong>software development</strong> and tech in general.",
    },
  ],
  projects: [
    {
      screen: "assets/shiftroster_Browser.png",
      title: "Shift Rosterer",
      tech: "HTML, CSS, JS (jQuery), PHP, SQL",
      about: "Web app designed to view and manage rosters as a manager or employee. Features a sign-in system, interactive jQuery, and CRUD database operations.",
      link: "https://github.com/waltwengert/shift-rosterer",
      play: "na",
    },
    {
      screen: "assets/kindylog_Browser.png",
      title: "KindyLog Product Site",
      tech: "HTML, CSS, JS, PHP",
      about: "While working with 3CS Software on KindyLog, I developed a site for the product to gauge public interest. Site stores visit and expression of interest data in a MySQL DB and queries this data to generate Google Charts.",
      link: "https://github.com/waltwengert/kindylog-productsite",
      play: "na",
    },
    {
      screen: "assets/secretsanta_Browser.png",
      title: "Secret Santa",
      tech: "HTML, CSS, JS",
      about: "Front-end web app designed to generate Secret Santa assignments for a group of any size. Features an array shuffle algorithm.",
      link: "https://github.com/waltwengert/secret-santa",
      play: "https://waltwengert.github.io/secret-santa/",
    },
    {
      screen: "assets/portfolio_Browser.png",
      title: "This Site",
      tech: "HTML, CSS, JS",
      about: "Front-end website that uses JavaScript to populate the page (from JSON data) and manage page navigation. Responsively designed to look good on any device.",
      link: "https://github.com/waltwengert/waltwengert.github.io",
      play: "https://waltwengert.github.io",
    },
    {
      screen: "assets/endless.PNG",
      title: "Endless Runner",
      tech: "Python",
      about: "Object-oriented endless runner game. As the large green square, players must avoid red squares (to not lose lives) and collect yellow squares (to score points).",
      link: "https://github.com/waltwengert/endless_runner",
      play: "na",
    },
    {
      screen: "assets/calc.PNG",
      title: "py Calculator",
      tech: "Python",
      about: "Graphical calculator made in Python. Uses Python's stock GUI library Tk.",
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
      employer: "QSuper",
      position: "Systems Developer",
      period: "January 2021 &mdash; Present",
    },
    {
      employer: "Education Queensland",
      position: "IT Technician",
      period: "March 2020 &mdash; December 2020",
    },
    {
      employer: "Kmart",
      position: "Team Leader",
      period: "2012 &mdash; 2020",
    },
    {
      employer: "Australian Electoral Commission",
      position: "Polling Official",
      period: "2016, 2019",
    },
    {
      employer: "Lightmare Studios",
      position: "Software QA",
      period: "2012 &mdash; 2013",
    },
  ],
};
