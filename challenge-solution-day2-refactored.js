document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  const people = [
    {
      first: "Rod",
      last: "Nolan"
    },
    {
      first: "Tim",
      last: "Berners-Lee"
    },
    {
      first: "Brendan",
      last: "Eich"
    },
    {
      first: "John",
      last: "Deere"
    }
  ];

  const container = document.getElementById("container");
  container.appendChild(generateTableFrom(people));
}

function generateTableFrom(list) {
  const tbl = generateTableTag();
  const thead = generateTableHead(Object.keys(list[0]));
  tbl.appendChild(thead);

  list.forEach((item, index) => {
    tbl.appendChild(
      generateItemRow(item, (index % 2 === 0) ? 'odd' : 'even')
    )
  });

  return tbl;
}

function generateTableTag() {
  const tbl = document.createElement('table');
  tbl.border = 2;
  tbl.cellPadding = 5;
  tbl.cellSpacing = 3;

  return tbl;
}

function generateTableHead(columnHeadings) {
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  thead.appendChild(headerRow);

  columnHeadings.forEach(heading => headerRow.appendChild(generateCell(heading, true)));

  return thead;
}

function generateItemRow(item, style) {
  const row = document.createElement('tr');
  row.className = style;
  row.addEventListener('mouseover', toggleHighlight);
  row.addEventListener('mouseout', toggleHighlight);

  const fnCell = generateCell(item.first);
  row.appendChild(fnCell);

  const lnCell = generateCell(item.last);
  row.appendChild(lnCell);

  return row;
}

function generateCell(text, isHeader = false) {
  const cell = document.createElement(isHeader ? 'th' : 'td');
  cell.innerText = text;

  return cell;
}


function toggleHighlight(event) {
  event.currentTarget.classList.toggle('highlight');
}
