document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  const btn1 = document.getElementById("btnGetData");
  btn1.addEventListener('click', getData);
  const btn2 = document.getElementById("btnReset");
  btn2.addEventListener('click', reset);
}

function reset() {
  console.log('clearing');
  const container = document.getElementById("container");

  // remove all the child elements from the container div
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function getData() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  goGetExternalData(url);

  async function goGetExternalData(url) {
    const response = await fetch(url);
    const responseAsJSON = response.ok ? await response.json() : null;

    console.log(responseAsJSON);

    const container = document.getElementById("container");
    container.appendChild(generateTableFrom(responseAsJSON));
  }

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

  const props = Object.keys(item);
  props.forEach(prop => {
    row.appendChild(generateCell(item[prop]))
  })


  // const fnCell = generateCell(item.first);
  // row.appendChild(fnCell);

  // const lnCell = generateCell(item.last);
  // row.appendChild(lnCell);

  return row;
}

function generateCell(contents, isHeader = false) {
  const cell = document.createElement(isHeader ? 'th' : 'td');
  if (typeof contents === 'string') {
    cell.innerText = contents;
  } else if (typeof contents === 'object') {
    cell.appendChild(generateCellHtmlFrom(contents));
  }

  return cell;
}

function generateCellHtmlFrom(object) {
  const allProps = document.createElement('div');
  Object.keys(object).forEach(key => {
    const propertyValue = object[key]
    if (typeof propertyValue !== 'object') {
      const line = document.createElement('div');
      line.innerText = `${key}: ${propertyValue}`;
      allProps.appendChild(line);
    }
  });
  return allProps;
}


function toggleHighlight(event) {
  event.currentTarget.classList.toggle('highlight');
}
