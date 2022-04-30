{/* 
  <div class="container">
    <div class="row">
      <div class="col">
        Sample Content
      </div>
    </div>
  </div> 
*/}

// const colDiv = document.createElement('div');
// colDiv.setAttribute('class', 'col');
// colDiv.innerText = "Sample Content"

// const rowDiv = document.createElement('div');
// rowDiv.setAttribute('class', 'row');

// rowDiv.append(colDiv);

// const containerDiv = document.createElement('div');
// containerDiv.classList.add('container');

// containerDiv.append(rowDiv);

// document.body.append(containerDiv);


// <button type="button" class="btn btn-primary">Primary</button>

// const btnElement = document.createElement('button');
// btnElement.setAttribute('type', 'button');
// btnElement.classList.add('btn', 'btn-primary');
// btnElement.setAttribute('class', 'btn btn-primary');
// btnElement.innerText = 'Primary';
// document.body.append(btnElement);



{/* 
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
  </table> 
*/}



{/* <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead> */}

// const customCreateElement = (tagName, value) => {
//   const element = document.createElement(tagName);
//   element.innerText = value;
//   return element;
// }

// const headers = ['#', 'First', 'Last', 'Handle'];

// Header tr
// const trHead = document.createElement('tr');

// th codes
// headers.forEach((val) => {
//   const thElement = customCreateElement('th', val);
//   thElement.setAttribute('scope', 'col');
//   trHead.append(thElement);
// });

// thead codes
// const tHead = document.createElement('thead');
// tHead.append(trHead);

{/* <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody> */}
// const rows = [
//   { id: 1, firstName: 'Mark', lastName: 'Otto', handle: '@mdo' },
//   { id: 2, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat' }
// ];
// tbody
// const tbodyElement = document.createElement('tbody');

// body tr, th
// rows.forEach((personObj) => {
//   const idTh = customCreateElement('th', personObj.id);
//   idTh.setAttribute('scope', 'row');

//   const firstNameTd = customCreateElement('td', personObj.firstName);

//   const lastNameTd = customCreateElement('td', personObj.lastName);

//   const handleTd = customCreateElement('td', personObj.handle);

//   const trElement = document.createElement('tr');
//   trElement.append(idTh, firstNameTd, lastNameTd, handleTd);

//   tbodyElement.append(trElement);
// });

// const tableElement = document.createElement('table');
// tableElement.setAttribute('class', 'table')
// tableElement.append(tHead, tbodyElement);
// document.body.append(tableElement);


// Alert
// alert("Hello There I am Alert");

// Prompt 
// const promptVal = prompt('enter password');
// console.log(promptVal);

// const confirmVal = window.confirm("Are You an adult?");
// console.log(confirmVal);


// Event
{/* <button type="button" class="btn btn-primary" onclick="console.log('sanjay')">Primary</button> */}

const btnElement = document.createElement('button');
btnElement.setAttribute('type', 'button');
btnElement.classList.add('btn', 'btn-primary');
btnElement.innerText = 'Click Me';

const clickFunc = () => {
  const h1Element = document.createElement('h1');
  h1Element.innerText = "This is a H1 element";
  document.body.append(h1Element);
};

// Event listeners
btnElement.addEventListener('click', clickFunc);

document.body.append(btnElement);


const divElement = document.createElement('div');

divElement.innerHTML = "<h1>Sanjay</h1>";
divElement.style.margin = '16px';
divElement.style.border = '2px solid';

divElement.addEventListener('mouseover', () => {
  divElement.style.backgroundColor = 'blue';
})

divElement.addEventListener('mouseleave', () => {
  divElement.style.backgroundColor = 'black';
});

document.body.append(divElement);


const val = prompt("Enter Val");
const spanEle = document.createElement('span');
spanEle.innerText = val
document.body.append(spanEle);
