function msg(){  
 alert("Hello Javatpoint");  
}

function hideEle() {
    var element = document.getElementById("ele1")
    element.classList.add("hide")
}

function hideElement(ele) {
  var element = document.getElementById(ele);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}