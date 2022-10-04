document.addEventListener("DOMContentLoaded", setup);

function setup() {
  // document.getElementById('btnAgree').addEventListener('click', handleClick);
  // document.getElementById('btnDisagree').addEventListener('click', handleClick);
  document.getElementById('btnWrapper').addEventListener('click', handleClick);
}

function handleClick(event) {
  // console.log(event);
  console.log(event.type);
  // console.log(event.target);
  console.log(event.currentTarget.id);
  // event.stopPropagation();


  const paragraph = document.getElementById('message');
  // const wrapper = document.getElementById('btnWrapper');
  const wrapper = document.getElementById(event.currentTarget.id);
  console.log(event.target.id);
  if (event.target.id === 'btnAgree') {
    paragraph.innerText = 'here is the download link';
    paragraph.className = 'agreeP';
    wrapper.className = 'agree';
  }
  if (event.target.id === 'btnDisagree') {
    paragraph.innerText = 'you must agree or no link for you';
    paragraph.className = 'disagreeP';
    wrapper.className = 'disagree';
  }
  if (event.target.id === 'btnMaybe') {
    paragraph.innerHTML = '<strong>you must make up your mind</strong>';
    paragraph.className = 'maybeP';
    wrapper.className = 'maybe';
  }

}
