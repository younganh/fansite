let textIsPink = false;

function changeTextColor() {
  if (textIsPink) {
    document.getElementById("illit-text").style.color = "#333333";
    document.getElementById("illit-text-2").style.color = "#333333";
    textIsPink = false;
  }
  else {
    document.getElementById("illit-text").style.color = "#fa9fd7";
    document.getElementById("illit-text-2").style.color = "#fa9fd7";
    textIsPink = true;
  }

}

function changeYunah() {
  document.getElementById("yunah-name").innerHTML = "윤아";
}
function changeMinju() {
  document.getElementById("minju-name").innerHTML = "민주";
}
function changeMoka() {
  document.getElementById("moka-name").innerHTML = "모카";
}
function changeWonhee() {
  document.getElementById("wonhee-name").innerHTML = "원희";
}
function changeIroha() {
  document.getElementById("iroha-name").innerHTML = "이로하";
}