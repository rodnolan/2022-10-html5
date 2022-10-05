const people = [
  {
    fn: "Rod",
    ln: "Nolan"
  },
  {
    fn: "Tim",
    ln: "Berners-Lee"
  },
  {
    fn: "Brendan",
    ln: "Eich"
  },
  {
    fn: "John",
    ln: "Deere"
  }
];

document.addEventListener("DOMContentLoaded", setup);

function setup() {
  makeTable2();
}

// absolutely no concern for reusability; just get the job done
function makeTable1() {

  // make the table
  const tbl = document.createElement('table');
  tbl.setAttribute('border', 2);
  tbl.setAttribute('cellPadding', 5);
  tbl.setAttribute('cellSpacing', 3);

  // attach it to the DOM
  const container = document.getElementById('container');
  container.appendChild(tbl);


  // make the head
  const thead = document.createElement('thead');
  // and attach it to the table
  tbl.appendChild(thead);

  // make a row for the column headings
  const headerRow = document.createElement('tr');
  // and attach it to the thead
  thead.appendChild(headerRow);


  // make the first column heading and attach it to its row
  const headerCell1 = document.createElement('th');
  headerCell1.innerText = 'first name';
  headerRow.appendChild(headerCell1);

  // make the second column heading and attach it to its row
  const headerCell2 = document.createElement('th');
  headerCell2.innerText = 'last name';
  headerRow.appendChild(headerCell2);

  // make a row for the first person, complete with its class and event listeners
  const r1 = document.createElement('tr');
  r1.className = 'odd';
  r1.addEventListener('mouseover', toggleHighlight);
  r1.addEventListener('mouseout', toggleHighlight);
  // and attach it to the table
  tbl.appendChild(r1);

  // make a row for the second person, complete with its class and event listeners
  const r2 = document.createElement('tr');
  r2.className = 'even';
  r2.addEventListener('mouseover', toggleHighlight);
  r2.addEventListener('mouseout', toggleHighlight);
  // and attach it to the table
  tbl.appendChild(r2);

  // make a row for the third person, complete with its class and event listeners
  const r3 = document.createElement('tr');
  r3.className = 'odd';
  r3.addEventListener('mouseover', toggleHighlight);
  r3.addEventListener('mouseout', toggleHighlight);
  // and attach it to the table
  tbl.appendChild(r3);


  let cell1, cell2;

  // make/attach row 1 col 1
  cell1 = document.createElement('td');
  cell1.innerText = people[0].fn
  r1.appendChild(cell1);

  // make/attach row 1 col 2
  cell2 = document.createElement('td');
  cell2.innerText = people[0].ln;
  r1.appendChild(cell2);

  // make/attach row 2 col 1
  cell1 = document.createElement('td');
  cell1.innerText = people[1].fn
  r2.appendChild(cell1);

  // make/attach row 2 col 2
  cell2 = document.createElement('td');
  cell2.innerText = people[1].ln;
  r2.appendChild(cell2);

  // make/attach row 3 col 1
  cell1 = document.createElement('td');
  cell1.innerText = people[2].fn
  r3.appendChild(cell1);

  // make/attach row 3 col 2
  cell2 = document.createElement('td');
  cell2.innerText = people[2].ln;
  r3.appendChild(cell2);
}

// in further iterations, you can optimize this code by looking
// for repetitive chunks to turn into reusable functions
function makeTable2() {

  // make the table
  const tbl = generateTable();

  function generateTable() {
    const tbl = document.createElement('table');
    tbl.setAttribute('border', 2);
    tbl.setAttribute('cellPadding', 5);
    tbl.setAttribute('cellSpacing', 3);
    return tbl;
  }

  // attach it to the DOM
  const container = document.getElementById('container');
  container.appendChild(tbl);


  // make the thead
  const thead = generateTHead();

  function generateTHead() {
    const thead = document.createElement('thead');
    // make a row for the column headings
    const headerRow = document.createElement('tr');

    // and attach the column headings row to the thead
    thead.appendChild(headerRow);


    // make the first column heading and fill it with the label
    const headerCell1 = document.createElement('th');
    headerCell1.innerText = 'first name';

    // make the first column heading and fill it with the label
    const headerCell2 = document.createElement('th');
    headerCell2.innerText = 'last name';

    // attach the first column heading to the header row
    headerRow.appendChild(headerCell1);
    // attach the second column heading to the header row
    headerRow.appendChild(headerCell2);

    return thead;
  }

  // and attach the thead to the table
  tbl.appendChild(thead);



  // make a row for the first person, complete with its class and event listeners
  const r1 = generateOddRow();
  function generateOddRow() {
    const r1 = document.createElement('tr');
    r1.className = 'odd';
    r1.addEventListener('mouseover', toggleHighlight);
    r1.addEventListener('mouseout', toggleHighlight);
    return r1;
  }
  // and attach the first row to the table
  tbl.appendChild(r1);


  // make a row for the second person, complete with its class and event listeners
  const r2 = generateEvenRow();
  function generateEvenRow() {
    const r2 = document.createElement('tr');
    r2.className = 'even';
    r2.addEventListener('mouseover', toggleHighlight);
    r2.addEventListener('mouseout', toggleHighlight);
    return r2;
  }
  // and attach the second row to the table
  tbl.appendChild(r2);

  // make a row for the third person, complete with its class and event listeners
  const r3 = generateOddRow();
  // const r3 = document.createElement('tr');
  // r3.className = 'odd';
  // r3.addEventListener('mouseover', toggleHighlight);
  // r3.addEventListener('mouseout', toggleHighlight);
  // and attach the third row to the table
  tbl.appendChild(r3);


  const r4 = generateEvenRow();
  tbl.appendChild(r4);

  // the remaining code in the is function is full of repetition
  // and is pleading to be refactored

  let cell1, cell2;

  // make/attach row 1 col 1
  cell1 = document.createElement('td');
  cell1.innerText = people[0].fn
  r1.appendChild(cell1);

  // make/attach row 1 col 2
  cell2 = document.createElement('td');
  cell2.innerText = people[0].ln;
  r1.appendChild(cell2);

  // make/attach row 2 col 1
  cell1 = document.createElement('td');
  cell1.innerText = people[1].fn
  r2.appendChild(cell1);

  // make/attach row 2 col 2
  cell2 = document.createElement('td');
  cell2.innerText = people[1].ln;
  r2.appendChild(cell2);

  // make/attach row 3 col 1
  cell1 = document.createElement('td');
  cell1.innerText = people[2].fn
  r3.appendChild(cell1);

  // make/attach row 3 col 2
  cell2 = document.createElement('td');
  cell2.innerText = people[2].ln;
  r3.appendChild(cell2);

  // make/attach row 4 col 1
  cell1 = document.createElement('td');
  cell1.innerText = people[3].fn
  r4.appendChild(cell1);

  // make/attach row 4 col 2
  cell2 = document.createElement('td');
  cell2.innerText = people[3].ln;
  r4.appendChild(cell2);
}



// populateRow(r1, people[0]);
// populateRow(r2, people[1]);
// populateRow(r3, people[2]);
function populateRow(row, person) {

  const cell1 = document.createElement('td');
  cell1.innerText = person.fn
  row.appendChild(cell1);

  const cell2 = document.createElement('td');
  cell2.innerText = person.ln;
  row.appendChild(cell2);
}

function toggleHighlight(event) {
  event.currentTarget.classList.toggle('highlight');
}
