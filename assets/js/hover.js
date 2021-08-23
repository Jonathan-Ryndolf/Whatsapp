function checker() {
  if (document.getElementById("checker").classList.contains("deactive")) {
    document.getElementById("checker").classList.remove("deactive");
  } else {
    var checker = document.getElementById("checker");
    checker.classList.add("deactive");
  }
  if (document.getElementById("clickbox").classList.contains("clickcolor")) {
    document.getElementById("clickbox").classList.remove("clickcolor");
    var checker = document.getElementById("checker");
    checker.removeAttribute("disabled");
  } else {
    document.getElementById("clickbox").classList.add("clickcolor");
    var checker = document.getElementById("checker");
    checker.setAttribute("disabled", true);
  }
}
