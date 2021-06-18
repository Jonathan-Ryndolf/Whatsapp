function checker() {
  if (document.getElementById("checker").classList.contains("deactive")) {
    document.getElementById("checker").classList.remove("deactive");
  } else {
    document.getElementById("checker").classList.add("deactive");
  }

  if (document.getElementById("clickbox").classList.contains("clickcolor")) {
    document.getElementById("clickbox").classList.remove("clickcolor");
  } else {
    document.getElementById("clickbox").classList.add("clickcolor");
  }
}
