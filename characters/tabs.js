const tabs = document.getElementsByClassName('tab');
const tabbtns = document.getElementsByClassName('tabbtn');

const mview = document.getElementById('memeviewer');
const mimg = document.getElementById('viewimg')
const mlist = document.getElementById('memelist');

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

function openMeme(e) {
  mimg.src = e.currentTarget.src;
  mlist.style.display = "none";
  mview.style.display = "block";
}

function memelist() {
  mlist.style.display = "block";
  mview.style.display = "none";
}
