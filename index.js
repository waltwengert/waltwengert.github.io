window.onload = function () {
  populatePage();
  toggleBtn(0, true);
};

function populatePage() {
  var pageData = data; //the JSON data that is a stand-in for an API response

  //populate the heading
  var heading = pageData.heading;
  document.getElementById("name").innerHTML = heading.name;
  document.getElementById("myImg").src = heading.imgSource;
  document.getElementById("mail").href = heading.mailLink;
  document.getElementById("mail").innerHTML = heading.mailText;
  document.getElementById("github").href = heading.githubLink;
  document.getElementById("linkedin").href = heading.linkedinLink;

  //populate the about section
  var about = pageData.about;

  for (var i = 0; i < about.length; i++) {
    var aboutDiv = document.createElement("div");
    aboutDiv.classList.add("tile");
    document.getElementById("aboutTiles").append(aboutDiv);

    var head = document.createElement("h2");
    head.innerHTML = about[i].heading;
    aboutDiv.append(head);

    var body = document.createElement("p");
    body.innerHTML = about[i].body;
    aboutDiv.append(body);
  }

  //populate the projects section
  var projects = pageData.projects;

  for (var i = 0; i < projects.length; i++) {
    var projectDiv = document.createElement("div");
    projectDiv.classList.add("tile");
    document.getElementById("projectTiles").append(projectDiv);

    var pTitle = document.createElement("h2");
    pTitle.innerHTML = projects[i].title;
    projectDiv.append(pTitle);

    var pDescription = document.createElement("p");
    pDescription.innerHTML = projects[i].description;
    projectDiv.append(pDescription);
  }

  //populate the education section
  var education = pageData.education;

  for (var i = 0; i < education.length; i++) {
    var educationDiv = document.createElement("div");
    educationDiv.classList.add("tile");
    document.getElementById("educationTiles").append(educationDiv);

    var eTitle = document.createElement("h2");
    eTitle.innerHTML = education[i].level;
    educationDiv.append(eTitle);

    var eDescription = document.createElement("p");
    eDescription.innerHTML = education[i].focus;
    educationDiv.append(eDescription);
  }

  //populate the employment section
  var employment = pageData.employment;

  for (var i = 0; i < employment.length; i++) {
    var employmentDiv = document.createElement("div");
    employmentDiv.classList.add("tile");
    document.getElementById("employmentTiles").append(employmentDiv);

    var eTitle = document.createElement("h2");
    eTitle.innerHTML = employment[i].employer;
    employmentDiv.append(eTitle);

    var eDescription = document.createElement("p");
    eDescription.innerHTML = employment[i].position;
    employmentDiv.append(eDescription);
  }
}

function toggleBtn(btnID, firstLoad) {
  if (!firstLoad) {
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
