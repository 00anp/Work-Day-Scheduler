//Display current date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//Set Global Variables
let timeBlock = document.querySelector(".time-block");
let currentHour = moment().format("H");
console.log(currentHour);

//Query selectors to save to DOM and get from DOM
document.getElementById("taskBlock9").addEventListener("submit", saveTask9);
document.getElementById("taskBlock10").addEventListener("submit", saveTask10);
document.getElementById("taskBlock11").addEventListener("submit", saveTask11);
document.getElementById("taskBlock12").addEventListener("submit", saveTask12);
document.getElementById("taskBlock13").addEventListener("submit", saveTask13);
document.getElementById("taskBlock14").addEventListener("submit", saveTask14);
document.getElementById("taskBlock15").addEventListener("submit", saveTask15);
document.getElementById("taskBlock16").addEventListener("submit", saveTask16);
document.getElementById("taskBlock17").addEventListener("submit", saveTask17);

//Query Selectors to change classes according to currentHour
let hourBlock9 = document.getElementById("taskTitle9");
let hourBlock10 = document.getElementById("taskTitle10");
let hourBlock11 = document.getElementById("taskTitle11");
let hourBlock12 = document.getElementById("taskTitle12");
let hourBlock13 = document.getElementById("taskTitle13");
let hourBlock14 = document.getElementById("taskTitle14");
let hourBlock15 = document.getElementById("taskTitle15");
let hourBlock16 = document.getElementById("taskTitle16");
let hourBlock17 = document.getElementById("taskTitle17");

//Logic Statements to add or remove a Class depending on the currentHour value
if(currentHour == 9){
  hourBlock9.classList.add("present");
  hourBlock9.classList.remove("past");
  hourBlock9.classList.remove("future");
} else if (currentHour > 9){
  hourBlock9.classList.add("past");
  hourBlock9.classList.remove("present");
  hourBlock9.classList.remove("future");
} else if (currentHour < 9) {
  hourBlock9.classList.add("future");
  hourBlock9.classList.remove("past");
  hourBlock9.classList.remove("present");
}

if(currentHour == 10){
  hourBlock10.classList.add("present");
  hourBlock10.classList.remove("past");
  hourBlock10.classList.remove("future");
} else if (currentHour > 10){
  hourBlock10.classList.add("past");
  hourBlock10.classList.remove("present");
  hourBlock10.classList.remove("future");
} else if (currentHour < 10) {
  hourBlock10.classList.add("future");
  hourBlock10.classList.remove("past");
  hourBlock10.classList.remove("present");
}

if(currentHour == 11){
  hourBlock11.classList.add("present");
  hourBlock11.classList.remove("past");
  hourBlock11.classList.remove("future");
} else if (currentHour > 11){
  hourBlock11.classList.add("past");
  hourBlock11.classList.remove("present");
  hourBlock11.classList.remove("future");
} else if (currentHour < 11) {
  hourBlock11.classList.add("future");
  hourBlock11.classList.remove("past");
  hourBlock11.classList.remove("present");
}

if(currentHour == 12){
  hourBlock12.classList.add("present");
  hourBlock12.classList.remove("past");
  hourBlock12.classList.remove("future");
} else if (currentHour > 12){
  hourBlock12.classList.add("past");
  hourBlock12.classList.remove("present");
  hourBlock12.classList.remove("future");
} else if (currentHour < 12) {
  hourBlock12.classList.add("future");
  hourBlock12.classList.remove("past");
  hourBlock12.classList.remove("present");
}

if(currentHour == 13){
  hourBlock13.classList.add("present");
  hourBlock13.classList.remove("past");
  hourBlock13.classList.remove("future");
} else if (currentHour > 13){
  hourBlock13.classList.add("past");
  hourBlock13.classList.remove("present");
  hourBlock13.classList.remove("future");
} else if (currentHour < 13) {
  hourBlock13.classList.add("future");
  hourBlock13.classList.remove("past");
  hourBlock13.classList.remove("present");
}

if(currentHour == 14){
  hourBlock14.classList.add("present");
  hourBlock14.classList.remove("past");
  hourBlock14.classList.remove("future");
} else if (currentHour > 14){
  hourBlock14.classList.add("past");
  hourBlock14.classList.remove("present");
  hourBlock14.classList.remove("future");
} else if (currentHour < 14) {
  hourBlock14.classList.add("future");
  hourBlock14.classList.remove("past");
  hourBlock14.classList.remove("present");
}

if(currentHour == 15){
  hourBlock15.classList.add("present");
  hourBlock15.classList.remove("past");
  hourBlock15.classList.remove("future");
} else if (currentHour > 15){
  hourBlock15.classList.add("past");
  hourBlock15.classList.remove("present");
  hourBlock15.classList.remove("future");
} else if (currentHour < 15) {
  hourBlock15.classList.add("future");
  hourBlock15.classList.remove("past");
  hourBlock15.classList.remove("present");
}

if(currentHour == 16){
  hourBlock16.classList.add("present");
  hourBlock16.classList.remove("past");
  hourBlock16.classList.remove("future");
} else if (currentHour > 16){
  hourBlock16.classList.add("past");
  hourBlock16.classList.remove("present");
  hourBlock16.classList.remove("future");
} else if (currentHour < 16) {
  hourBlock16.classList.add("future");
  hourBlock16.classList.remove("past");
  hourBlock16.classList.remove("present");
}

if(currentHour == 17){
  hourBlock17.classList.add("present");
  hourBlock17.classList.remove("past");
  hourBlock17.classList.remove("future");
} else if (currentHour > 17){
  hourBlock17.classList.add("past");
  hourBlock17.classList.remove("present");
  hourBlock17.classList.remove("future");
} else if (currentHour < 17) {
  hourBlock17.classList.add("future");
  hourBlock17.classList.remove("past");
  hourBlock17.classList.remove("present");
}

//Functions saveTask[i] saves the user input into the DOM
function saveTask9(e){
  let taskHour = "9 am";
  let taskTitle9 = document.getElementById("taskTitle9").value;
  const task = {
    taskHour,   
    taskTitle9
  };

  if (localStorage.getItem("tasks9") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks9", JSON.stringify(tasks));

  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks9"));
    tasks.push(task);
    localStorage.setItem("tasks9", JSON.stringify(tasks));
  }

  getTasks9();
  e.preventDefault();
}
//Functions getTask[i] gets the user inpunt from the DOM and displays it were it was saved
function getTasks9(){
  let tasks =JSON.parse(localStorage.getItem("tasks9"));
  
  for (let i = 0; i < tasks.length; i++){
    if (tasks !== null){
      taskTitle9.innerHTML = tasks[i].taskTitle9;
    }
  }
}
getTasks9();

function saveTask10(e){
  let taskHour = "10 am";
  let taskTitle10 = document.getElementById("taskTitle10").value;
  const task = {
    taskHour,
    taskTitle10
  };

  if (localStorage.getItem("tasks10") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks10", JSON.stringify(tasks));

  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks10"));
    tasks.push(task);
    localStorage.setItem("tasks10", JSON.stringify(tasks));
  }

  getTasks10();
  e.preventDefault();
}

function getTasks10(){
  let tasks =JSON.parse(localStorage.getItem("tasks10"));
  
  for (let i = 0; i < tasks.length; i++){
    if (tasks !== null){
      taskTitle10.innerHTML = tasks[i].taskTitle10;
    }
  }
}
getTasks10();

function saveTask11(e){
  let taskHour = "11 am";
  let taskTitle11 = document.getElementById("taskTitle11").value;
  const task = {
    taskHour,
    taskTitle11
  };

  if (localStorage.getItem("tasks11") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks11", JSON.stringify(tasks));

  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks11"));
    tasks.push(task);
    localStorage.setItem("tasks11", JSON.stringify(tasks));
  }

  getTasks11();
  e.preventDefault();
}

function getTasks11(){
  let tasks =JSON.parse(localStorage.getItem("tasks11"));
  
  for (let i = 0; i < tasks.length; i++){
    if (tasks !== null){
      taskTitle11.innerHTML = tasks[i].taskTitle11;
    }
  }
}
getTasks11();

function saveTask12(e){
  let taskHour = "12 pm";
  let taskTitle12 = document.getElementById("taskTitle12").value;
  const task = {
    taskHour,
    taskTitle12
  };

  if (localStorage.getItem("tasks12") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks12", JSON.stringify(tasks));

  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks12"));
    tasks.push(task);
    localStorage.setItem("tasks12", JSON.stringify(tasks));
  }

  getTasks12();
  e.preventDefault();
}

function getTasks12(){
  let tasks =JSON.parse(localStorage.getItem("tasks12"));
  
  for (let i = 0; i < tasks.length; i++){
    if (tasks !== null){
      taskTitle12.innerHTML = tasks[i].taskTitle12;
    }
  }
}
getTasks12();

function saveTask13(e){
  let taskHour = "1 pm";
  let taskTitle13 = document.getElementById("taskTitle13").value;
  const task = {
    taskHour,
    taskTitle13
  };

  if (localStorage.getItem("tasks13") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks13", JSON.stringify(tasks));

  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks13"));
    tasks.push(task);
    localStorage.setItem("tasks13", JSON.stringify(tasks));
  }

  getTasks13();
  e.preventDefault();
}

function getTasks13(){
  let tasks =JSON.parse(localStorage.getItem("tasks13"));
  
  for (let i = 0; i < tasks.length; i++){
    if (tasks !== null){
      taskTitle13.innerHTML = tasks[i].taskTitle13;
    }
  }
}
getTasks13();

function saveTask14(e){
  let taskHour = "2 pm";
  let taskTitle14 = document.getElementById("taskTitle14").value;
  const task = {
    taskHour,
    taskTitle14
  };

  if (localStorage.getItem("tasks14") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks14", JSON.stringify(tasks));

  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks14"));
    tasks.push(task);
    localStorage.setItem("tasks14", JSON.stringify(tasks));
  }

  getTasks14();
  e.preventDefault();
}

function getTasks14(){
  let tasks =JSON.parse(localStorage.getItem("tasks14"));
  
  for (let i = 0; i < tasks.length; i++){
    if (tasks !== null){
      taskTitle14.innerHTML = tasks[i].taskTitle14;
    }
  }
}
getTasks14();

function saveTask15(e){
  let taskHour = "3 pm";
  let taskTitle15 = document.getElementById("taskTitle15").value;
  const task = {
    taskHour,
    taskTitle15
  };

  if (localStorage.getItem("tasks15") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks15", JSON.stringify(tasks));

  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks15"));
    tasks.push(task);
    localStorage.setItem("tasks15", JSON.stringify(tasks));
  }

  getTasks15();
  e.preventDefault();
}

function getTasks15(){
  let tasks =JSON.parse(localStorage.getItem("tasks15"));
  
  for (let i = 0; i < tasks.length; i++){
    if (tasks !== null){
      taskTitle15.innerHTML = tasks[i].taskTitle15;
    }
  }
}
getTasks15();

function saveTask16(e){
  let taskHour = "4 pm";
  let taskTitle16 = document.getElementById("taskTitle16").value;
  const task = {
    taskHour,
    taskTitle16
  };

  if (localStorage.getItem("tasks16") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks16", JSON.stringify(tasks));

  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks16"));
    tasks.push(task);
    localStorage.setItem("tasks16", JSON.stringify(tasks));
  }

  getTasks16();
  e.preventDefault();
}

function getTasks16(){
  let tasks =JSON.parse(localStorage.getItem("tasks16"));
  
  for (let i = 0; i < tasks.length; i++){
    if (tasks !== null){
      taskTitle16.innerHTML = tasks[i].taskTitle16;
    }
  }
}
getTasks16();

function saveTask17(e){
  let taskHour = "5 pm";
  let taskTitle17 = document.getElementById("taskTitle17").value;
  const task = {
    taskHour,
    taskTitle17
  };

  if (localStorage.getItem("tasks17") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks17", JSON.stringify(tasks));

  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks17"));
    tasks.push(task);
    localStorage.setItem("tasks17", JSON.stringify(tasks));
  }

  getTasks17();
  e.preventDefault();
}

function getTasks17(){
  let tasks =JSON.parse(localStorage.getItem("tasks17"));
  
  for (let i = 0; i < tasks.length; i++){
    if (tasks !== null){
      taskTitle17.innerHTML = tasks[i].taskTitle17;
    }
  }
}
getTasks17();


