window.onload = function () {
  populatePage();
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
  document.getElementById("aboutP1").innerHTML = about.para1;
  document.getElementById("aboutP2").innerHTML = about.para2;

  //populate the projects section
  var projects = pageData.projects;

  //populate the education section
  var education = pageData.education;

  //populate the employment section
  var employment = pageData.employment;
}

function toggleBtn(btnID) {
  var btns = ["btnAbout", "btnProj", "btnEdu", "btnEmp"];

  for (var i = 0; i < btns.length; i++) {
    document.getElementById(btns[i]).classList.remove("btn-active");
  }

  document.getElementById(btnID).classList.add("btn-active");
}
