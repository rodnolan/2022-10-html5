import { StarWarsCharacter } from './challenge-solution-day4-classes.js';

let characters;

function initialize() {
  enableGetDataButton(true);

  const btn2 = document.getElementById("btnReset");
  btn2.addEventListener('click', reset);
}

function enableGetDataButton (enable) {
  const btn1 = document.getElementById("btnGetData");
  btn1.disabled = !enable;
  enable ? btn1.addEventListener('click', getData) : btn1.removeEventListener('click', getData);
}

function reset() {
  console.log('clearing');
  const container = document.getElementById("container");

  // remove all the child elements from the container div
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  enableGetDataButton(true);
}

function getData() {

  async function goGetExternalData(url) {
    const response = await fetch(url);
    const responseAsJSON = response.ok ? await response.json() : null;

    if (!responseAsJSON) {
      alert('error fetching data');

    } else {

      // container.appendChild(generateTableFrom(responseAsJSON));
      if (prepareData(responseAsJSON)) {
        enableGetDataButton(false);
      }

    }
  }

  // const url = 'https://jsonplaceholder.typicode.com/users';
  // const url = 'https://rodnolan.github.io/fed-files/customers.json';
  const url = 'https://rodnolan.github.io/fed-files/starwars.json';
  goGetExternalData(url);
}

function prepareData(json) {
  try {

    const characterInstances = [];
    json.forEach(character => {
      const {id, name, height, mass, hairColor, skinColor, birthYear, email, gender, created, edited} = character;
      const characterInstance = new StarWarsCharacter(id, name, height, mass, hairColor, skinColor, birthYear, email, gender, created, edited);
      characterInstances.push(characterInstance);
    });

    // store the data in the "global" characters variable, which is visible to all the functions in this script
    characters = characterInstances;

    renderTable();
    return true;

  } catch (e) {

    console.log('error preparing data ', e);
    return false;

  }
}

function renderTable() {
  reset();
  const tbl = generateTableFrom(characters);
  const container = document.getElementById("container");
  container.appendChild(tbl);
}

function generateTableFrom(list) {
  console.log('generateTableFrom ', list);
  const props = Object.keys(list[0]);

  console.log(props);

  const tbl = generateTableTag();
  const thead = generateTableHead(props);
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

  headerRow.addEventListener('click', sortOnProperty);

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

  return row;
}

function generateCell(contents, isHeader = false) {
  const cell = document.createElement(isHeader ? 'th' : 'td');

  if (typeof contents === 'string' || typeof contents === 'number') {
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
    if (typeof propertyValue !== 'object') { // hide copmplex properties
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

function sortOnProperty(event) {
  const propertyToSortOn = event.target.innerText;
  console.log(propertyToSortOn);

  const sortFunction = (c1, c2) => {
    let c1Prop = c1[propertyToSortOn];
    let c2Prop = c2[propertyToSortOn];

    // they might look like numeric values but they're actually sorted as strings
    // console.log(parseInt(c1Prop));
    // you can check to see if it's a valid number using parseInt
    // it'll return NaN (not a number) for strings can can't be converted to numbers
    // NaN is a falsy value so...

    if (parseInt(c1Prop)) {
      c1Prop = parseInt(c1Prop);
      c2Prop = parseInt(c2Prop);
    }

    if (c1Prop > c2Prop) {
      return 1;
    } else if (c1Prop < c2Prop) {
      return -1;
    } else {
      return 0
    }
  };
  const sortedCharacters = characters.sort(sortFunction);
  characters = sortedCharacters;
  renderTable();

}

document.addEventListener("DOMContentLoaded", initialize);
