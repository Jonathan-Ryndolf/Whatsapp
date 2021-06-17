function checker() {
  if (document.getElementById("checker").classList.contains("deactive")) {
    document.getElementById("checker").classList.remove("deactive");
  } else {
    document.getElementById("checker").classList.add("deactive");
  }

  // if (document.getElementById("clickbox").style.color == "#ffffff") {
  //   document.getElementById("clickbox").style.color = "#000000";
  // } else {
  //   document.getElementById("clickbox").style.color = "#ffffff";
  // }
}

function agree() {
  document.getElementById("terms").classList.add("d-none");
  document.getElementById("terms-bg").classList.add("d-none");
}
