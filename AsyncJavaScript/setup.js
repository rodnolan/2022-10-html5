function setup() {
  document.getElementById('btn').addEventListener('click', handleClick);
  console.log('setup complete');
}

document.addEventListener("DOMContentLoaded", setup);
