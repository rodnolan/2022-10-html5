document.addEventListener('DOMContentLoaded', setup);

function setup() {
  const container = document.getElementById('container');

  container.innerText = 'this is the container';

  // make a heading
  const firstHeading = document.createElement('H1');
  firstHeading.innerText = "this is my first-level heading";

  const secondHeading = document.createElement('H2');
  secondHeading.innerText = "this is my second-level heading";

  container.appendChild(firstHeading);
  container.appendChild(secondHeading);


  firstHeading.setAttribute("title", "this will appear when you mouse over the heading");

  firstHeading.setAttribute("id", "heading1");
  firstHeading.id = "head1"; // for standard attributes

  firstHeading.setAttribute("data-testId", "identifier-for-my-test-script"); // for non-standard attributes

  const frm = document.createElement('form');
  container.appendChild(frm);

  const fnField = document.createElement('input');
  fnField.type = 'text';
  fnField.placeholder = 'please enter you first name';
  frm.appendChild(fnField);

  const lnField = document.createElement('input');
  lnField.type = 'text';
  lnField.placeholder = 'please enter you last name';
  frm.appendChild(lnField);

  const submitBtn = document.createElement('input');
  submitBtn.type = 'submit';
  submitBtn.value = 'submit your entries';
  frm.appendChild(submitBtn);

  frm.addEventListener('submit', handleSubmit);

}

function handleSubmit(event) {
  event.preventDefault();

  console.log('the form was submitted');
}

const people = [
  {
    fn: 'Rod',
    ln: 'Nolan'
  },
  {
    fn: 'Mickey',
    ln: 'Mouse'
  },

];


console.table(people);


// Challenge - Day 2
// - make a table programmatically
// - fill the table with people (fn, ln)
// - heading row
// - alternating background color
// - background-color changes as mouse hovers
