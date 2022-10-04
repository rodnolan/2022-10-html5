document.addEventListener("DOMContentLoaded", setup);

function setup() {
  document.getElementById('btnAgree').addEventListener('click', handleClick);
  document.getElementById('btnDisagree').addEventListener('click', handleClick);
}

function handleClick(event) {
  console.log(event);
}
