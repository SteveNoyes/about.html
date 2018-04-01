function zipCode (z) {
  if (z < 20000) {
    return "true";
  } else {
    return "false";
  }
}

window.setTimeout(ShowBanners, 5000);

var zipcoder = document.getElementById("zipcheck");

zipcoder.addEventListener("click", function() {
  if (zipcheck === 0){
  alert("We've got your area covered.");
  } else {
    alert("Sorry, we haven't expanded to that area yet.");
  }
});