const tabs = document.getElementsByClassName('tab');
const tabbtns = document.getElementsByClassName('tabbtn');

function openTab(e, tab) {
  for (const elem of tabbtns) {
    elem.className = elem.className.replace(" active", "");
  }
  for (const elem of tabs) {
    elem.style.display = "none";
  }
  document.getElementById(tab).style.display = "block";
  e.currentTarget.className += " active";
}
