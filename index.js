window.onload = function () {
  populatePage();
  toggleBtn(0, true);
};

//detect a scroll anywhere on the page including child divs
document.addEventListener(
  "scroll",
  function (e) {
    //assign heading height based on device size
    var headingHeight;
    if (window.innerWidth >= 600) {
      //wider screen, heading constant 281px
      headingHeight = 281;
    } else {
      //smaller (mobile) screen, heading constant 251px
      headingHeight = 251;
    }

    //if the user has scrolled past the heading, fix the buttons to the top of screen
    if (window.scrollY >= headingHeight) {
      document.getElementById("btns").style.position = "fixed";
      document.getElementById("btns").style.top = "0";
    } else {
      document.getElementById("btns").style.position = "absolute";
      document.getElementById("btns").style.top = headingHeight + "px";
    }
  },
  true
);

function populatePage() {
  var jsonData = data; //the JSON data that is a stand-in for an API response

  //populate the heading
  var heading = jsonData.heading;
  document.getElementById("name").innerHTML = heading.name;
  document.getElementById("myImg").src = heading.imgSource;
  document.getElementById("mail").href = heading.mailLink;
  document.getElementById("mail").innerHTML = heading.mailText;
  document.getElementById("github").href = heading.githubLink;
  document.getElementById("linkedin").href = heading.linkedinLink;

  //populate all the sections
  populateAbout(jsonData);
  populateProjects(jsonData);
  populateEducation(jsonData);
  populateEmployment(jsonData);
}

function populateAbout(jsonData) {
  //populate the about section
  var about = jsonData.about;

  for (var i = 0; i < about.length; i++) {
    //each about tile is a simple <h2> heading for the first word or two stored
    //and a <p> paragraph
    var aboutTile = document.createElement("div");
    aboutTile.classList.add("tile");
    document.getElementById("about").append(aboutTile);

    var aboutHeading = document.createElement("h2");
    aboutHeading.innerHTML = about[i].heading;
    aboutTile.append(aboutHeading);

    var aboutBody = document.createElement("p");
    aboutBody.innerHTML = about[i].body;
    aboutTile.append(aboutBody);
  }
}

function populateProjects(jsonData) {
  //populate the projects section
  var projects = jsonData.projects;

  for (var i = 0; i < projects.length; i++) {
    //each project tile has a <h2> title, and to the right of it a <h3> tech
    //beneath these a screen shot img, and to the far right a github link
    var projectTile = document.createElement("div");
    projectTile.classList.add("tile");
    document.getElementById("projects").append(projectTile);

    var projectTitle = document.createElement("h2");
    projectTitle.innerHTML = projects[i].title;
    projectTile.append(projectTitle);

    var projectTech = document.createElement("h3");
    projectTech.innerHTML = projects[i].tech;
    projectTile.append(projectTech);

    var projectScreen = document.createElement("img");
    projectScreen.src = projects[i].screen;
    projectTile.append(projectScreen);

    var linkIcon = document.createElement("i");
    linkIcon.classList.add("fab");
    linkIcon.classList.add("fa-github");
    linkIcon.classList.add("projLink");
    var projectLink = document.createElement("a");
    projectLink.href = projects[i].link;
    projectLink.innerHTML = linkIcon.outerHTML;
    projectTile.append(projectLink);
  }
}

function populateEducation(jsonData) {
  //populate the education section
  var education = jsonData.education;

  for (var i = 0; i < education.length; i++) {
    //each education tile has a <h2> level, and beneath it a <h3> focus
    //and two <h4> institution and period on the right hand side
    var eduTile = document.createElement("div");
    eduTile.classList.add("tile");
    document.getElementById("education").append(eduTile);

    var eduLevel = document.createElement("h2");
    eduLevel.innerHTML = education[i].level;
    eduTile.append(eduLevel);

    var eduFocus = document.createElement("h3");
    eduFocus.innerHTML = education[i].focus;
    eduTile.append(eduFocus);

    var eduInstitution = document.createElement("h4");
    eduInstitution.innerHTML = education[i].institution;
    eduTile.append(eduInstitution);

    var eduPeriod = document.createElement("h4");
    eduPeriod.innerHTML = education[i].period;
    eduTile.append(eduPeriod);
  }
}

function populateEmployment(jsonData) {
  //populate the employment section
  var employment = jsonData.employment;

  for (var i = 0; i < employment.length; i++) {
    //each employment tile has a <h2> employer, and beneath it has
    //two <h3>'s; position and period which are left and right alligned respectively
    var empTile = document.createElement("div");
    empTile.classList.add("tile");
    document.getElementById("employment").append(empTile);

    var empEmployer = document.createElement("h2");
    empEmployer.innerHTML = employment[i].employer;
    empTile.append(empEmployer);

    var empPosition = document.createElement("h3");
    empPosition.innerHTML = employment[i].position;
    empTile.append(empPosition);

    var empPeriod = document.createElement("h3");
    empPeriod.innerHTML = employment[i].period;
    empTile.append(empPeriod);
  }
}

function toggleBtn(btnID, firstLoad) {
  if (!firstLoad && window.innerWidth >= 600) {
    //if it isn't the initial page load and not a small/mobile device
    //scroll down the page to the sections part (281px constant on regular screens)
    window.scroll({ top: 281, behavior: "smooth" });
  } else if (!firstLoad) {
    //if it's still not the first load but is a mobile device
    //scroll down the page to the sections part (251px constant on regular screens)
    window.scroll({ top: 251, behavior: "smooth" });
  }

  //btnID 0-3 based on index of following arrays
  var btns = ["btnAbout", "btnProj", "btnEdu", "btnEmp"];
  var divs = ["about", "projects", "education", "employment"];

  for (var i = 0; i < btns.length; i++) {
    //disable/hide each section div
    document.getElementById(btns[i]).classList.remove("btn-active");
    document.getElementById(divs[i]).style.display = "none";
  }

  //reenable the selected button's section div
  document.getElementById(btns[btnID]).classList.add("btn-active");
  document.getElementById(divs[btnID]).style.display = "flex";
}
