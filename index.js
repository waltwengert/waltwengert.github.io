function toggleBtn(btnID) {
    var btns = ["btnAbout", "btnProj", "btnEdu", "btnEmp"];

    for (var i = 0; i < btns.length; i++) {
      document.getElementById(btns[i]).classList.remove("btn-active");
    }

    document.getElementById(btnID).classList.add("btn-active");
  }