window.onload = function () {
  populatePage();
  toggleBtn(0, true);
};

//detect a scroll anywhere on the page including child divs
document.addEventListener("scroll", function(e) {
  //assign heading height based on device size
  var headingHeight;
  if (window.innerWidth >= 600) {
    //wider screen, heading constant 281px
    headingHeight = 281;
  } else {
    //smaller (mobile) screen, heading constant 251px
    headingHeight = 251;
  }

  //if the page scroll reaches the bottom
  if ((window.innerHeight - headingHeight + window.scrollY) >= document.body.offsetHeight) {
    //enable scrolling for section divs
    document.getElementById("about").style.overflow = "auto";
    document.getElementById("projects").style.overflow = "auto";
    document.getElementById("education").style.overflow = "auto";
    document.getElementById("employment").style.overflow = "auto";

    //if the page is scrolling through the heading (+20px buffer)
    if (window.scrollY >= headingHeight + 20) { 
      //disable scrolling for body
      document.body.style.overflow = "hidden";
    } else {
      //enable it
      document.body.style.overflow = "auto";
    }
  } else if ((document.getElementById("about").scrollTop <= 0) || (document.getElementById("projects").scrollTop <= 0)
            || (document.getElementById("education").scrollTop <= 0) || (document.getElementById("employment").scrollTop <= 0)) {
    //disable scrolling for section divs
    document.getElementById("about").style.overflow = "hidden";
    document.getElementById("projects").style.overflow = "hidden";
    document.getElementById("education").style.overflow = "hidden";
    document.getElementById("employment").style.overflow = "hidden";

    //enable scrolling for body
    document.body.style.overflow = "auto";
  }
}, true);

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

function populateAbout (jsonData) {
  //populate the about section
  var about = jsonData.about;

  for (var i = 0; i < about.length; i++) {
    var aboutDiv = document.createElement("div");
    aboutDiv.classList.add("tile");
    document.getElementById("about").append(aboutDiv);

    var head = document.createElement("h2");
    head.innerHTML = about[i].heading;
    aboutDiv.append(head);

    var body = document.createElement("p");
    body.innerHTML = about[i].body;
    aboutDiv.append(body);
  }
}

function populateProjects (jsonData) {
  //populate the projects section
  var projects = jsonData.projects;

  for (var i = 0; i < projects.length; i++) {
    var projectDiv = document.createElement("div");
    projectDiv.classList.add("tile");
    document.getElementById("projects").append(projectDiv);

    var pTitle = document.createElement("h2");
    pTitle.innerHTML = projects[i].title;
    projectDiv.append(pTitle);

    var pDescription = document.createElement("p");
    pDescription.innerHTML = projects[i].description;
    projectDiv.append(pDescription);
  }
}

function populateEducation (jsonData) {
  //populate the education section
  var education = jsonData.education;

  for (var i = 0; i < education.length; i++) {
    var educationDiv = document.createElement("div");
    educationDiv.classList.add("tile");
    document.getElementById("education").append(educationDiv);

    var eTitle = document.createElement("h2");
    eTitle.innerHTML = education[i].level;
    educationDiv.append(eTitle);

    var eDescription = document.createElement("p");
    eDescription.innerHTML = education[i].focus;
    educationDiv.append(eDescription);
  }
}

function populateEmployment (jsonData) {
  //populate the employment section
  var employment = jsonData.employment;

  for (var i = 0; i < employment.length; i++) {
    var employmentDiv = document.createElement("div");
    employmentDiv.classList.add("tile");
    document.getElementById("employment").append(employmentDiv);

    var eTitle = document.createElement("h2");
    eTitle.innerHTML = employment[i].employer;
    employmentDiv.append(eTitle);

    var eDescription = document.createElement("p");
    eDescription.innerHTML = employment[i].position;
    employmentDiv.append(eDescription);
  }
}

function toggleBtn(btnID, firstLoad) {
  //if it isn't the initial page load and not a small/mobile device
  if (!firstLoad && window.innerWidth >= 600) {
    //scroll down the page to the sections part (302px constant on regular screens)
    window.scroll({top: 302, behavior: 'smooth'});
  }

  //btnID 0-3 based on index of following arrays
  var btns = ["btnAbout", "btnProj", "btnEdu", "btnEmp"];
  var divs = ["about", "projects", "education", "employment"];

  for (var i = 0; i < btns.length; i++) {
    document.getElementById(btns[i]).classList.remove("btn-active");
    document.getElementById(divs[i]).style.display = "none";
  }

  document.getElementById(btns[btnID]).classList.add("btn-active");
  document.getElementById(divs[btnID]).style.display = "flex";
}
