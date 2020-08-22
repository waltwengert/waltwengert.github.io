window.onload = function () {
  populatePage();
  toggleBtn(0);
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
    aboutDiv.id = "aboutDiv" + i;
    document.getElementById("aboutTiles").append(aboutDiv);

    var titleContainer = document.createElement("span");
    var title = document.createElement("h3");
    title.innerHTML = about[i].heading;
    titleContainer.append(title);
    aboutDiv.append(titleContainer);

    var head = document.createElement("h2");
    head.innerHTML = about[i].heading;
    aboutDiv.append(head);

    var body = document.createElement("p");
    body.innerHTML = about[i].body;
    aboutDiv.append(body);
  }

  /*
  var parDiv1 = document.createElement("div");
  parDiv1.classList.add("tile");
  document.getElementById("aboutTiles").append(parDiv1);
  parDiv1.innerHTML = "lorem ipsum";

  document.getElementById("aboutP1").innerHTML = about.para1;
  document.getElementById("aboutP2").innerHTML = about.para2;
  document.getElementById("aboutP3").innerHTML = about.para3;
  */

  //populate the projects section
  var projects = pageData.projects;

  //populate the education section
  var education = pageData.education;

  //populate the employment section
  var employment = pageData.employment;
}

function toggleBtn(btnID) {
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
