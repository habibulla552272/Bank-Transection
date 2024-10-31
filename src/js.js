let dataTable = document.getElementById("dataTable");

// add balance
let diposits = document.getElementById("deposit");
let showvalue = document.getElementById("showBalance");

let confirmDeposit = document.getElementById("confirmDeposit");

confirmDeposit.addEventListener("click", () => {
  let input = diposits.value;
  let inputValue = parseFloat(input);
  let showBalance = showvalue.innerText;
  let previusValue = parseFloat(showBalance);

  //  main calculation
  let curerntValue = previusValue + inputValue;
  showvalue.innerHTML = `${curerntValue} $`;

  //   transection
  let D = new Date();
  let time = D.toLocaleString();

  let newTableRow = document.createElement("tr");

  newTableRow.innerHTML = `<td class="w-1/3 text-left">${time}</td> <td class="text-left">Add</td> <td class="text-left">${inputValue}$</td>  <td class=" text-left">${curerntValue}$</td>  `;

  dataTable.appendChild(newTableRow);

  diposits.value = " ";
});

// widrow

let widrowinput = document.getElementById("withdraw");

let widrowbtn = document.getElementById("widrowbtn");

widrowbtn.addEventListener("click", () => {
  let widrowinputs = widrowinput.value;
  let widrowValue = parseFloat(widrowinputs);

  let previusValue = parseFloat(showvalue.innerText);

  let curerntValue = previusValue - widrowValue;

  showvalue.innerHTML = `${curerntValue} $`;

  //Alll Transection

  let date = new Date();
  let currentTime = date.toLocaleString();

  let tableDataRow = document.createElement("tr");
  tableDataRow.innerHTML = `<td class="w-1/3 text-left">${currentTime}</td> <td class=" text-left">Widrow</td> <td class=" text-left">${widrowValue}$</td> <td class=" text-left">${curerntValue}$</td>`;

  dataTable.appendChild(tableDataRow);

  widrowinput.value = " ";
});

let showTransection = document.getElementById("showTransection");

let dataTables = document.getElementById("dataTables");

showTransection.addEventListener("click", () => {
  dataTables.classList.toggle("hidden");
});

//  -----other emplementaion

// let newTableData = document.createElement("td");

// newTableData.textContent = `${time}`;

// dataTable.appendChild(newTableRow);
// newTableRow.appendChild(newTableData);

// let newTableDataADD = document.createElement("td");
// newTableDataADD.textContent = `ADD`;
// newTableRow.appendChild(newTableDataADD);
