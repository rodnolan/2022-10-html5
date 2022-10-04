console.log('the script was loaded, setting up event handlers');
document.addEventListener("DOMContentLoaded", setupEventListeners);


function setupEventListeners() {
    const form = document.getElementById('myFirstForm');
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit() {
    console.log("form was submitted");

    const form = document.getElementById('myFirstForm');

    // document.getElementById('submitBtn').disabled = true;
    form.removeEventListener('submit', handleSubmit);

    // console.log(form);
    // console.log(form.elements);
    // console.log(form.elements.fname);

    // for this to work, the input tag needs to have a name attribute
    console.log(form.elements.fname.value);

    // but there are other ways to search for HTML elements...
    const fnameEntry = document.querySelector('[placeholder="please enter your first name"]');
    console.log(fnameEntry.value);

    console.log(form.elements.lname.value);
    console.log(form.elements.email.value);
    console.log(form.elements.phone.value);
    console.log(form.elements.age.value);
    console.log(form.elements.state.value);
    console.log(form.elements.country.value);

    console.log(form.elements.newsletter.checked);

    console.log(form.elements.favColor.value);
    console.log(form.elements.fcBlue.checked);
    console.log(form.elements.fcRed.checked);
    console.log(form.elements.fcGreen.checked);
    console.log(form.elements.fcOrange.checked);
    console.log(form.elements.fcYellow.checked);

    console.log(form.elements.favFruit.value);
    console.log(form.elements.comments.value);
  }