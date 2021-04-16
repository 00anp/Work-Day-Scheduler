//Set variables getting elements from HTML
var currentDay = $("#currentDay");
var timeBlocks = $(".time-block");
var scheduleContainer = $(".schedule");
//Create empty array to be filled with objects each object has a hour property and a text property
var taskItems = [];

// Moment.JS elements
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");

//Function to fill empty array to be set on local storage 
function initializeSchedule(){
  timeBlocks.each(function(){
    var thisBlock = $(this);
    var thisBlockHr = parseInt(thisBlock.attr("data-hour"));

    var taskObj = {
      hour: thisBlockHr,
      text: "",
    }
    taskItems.push(taskObj);
  });

  localStorage.setItem("tasks", JSON.stringify(taskItems));
  console.log(taskItems);
}

// Function to change class thru the day depending on the current Hour
function setUpTimeBlocks(){
    timeBlocks.each(function(){
      var thisBlock = $(this);
      var thisBlockHr = parseInt(thisBlock.attr("data-hour"));

      if (thisBlockHr == currentHour) {
        thisBlock.addClass("present").removeClass("past future");
      }
      if (thisBlockHr < currentHour) {
        thisBlock.addClass("past").removeClass("present future");
      }
      if (thisBlockHr > currentHour) {
        thisBlock.addClass("future").removeClass("past present");
      }
    });
}
//Function to work with created array from local storage 
function renderSchedule(){
  
  taskItems = localStorage.getItem("tasks");
  taskItems = JSON.parse(taskItems);

  for (var i = 0; i < taskItems.length; i++){
    var itemHour = taskItems[i].hour;
    var itemText = taskItems[i].text; 
   
    $("[data-hour=" + itemHour + "]").children("textarea").val(itemText);
  }
}

//Function to save the user input
function saveHandler(){
  var thisBlock = $(this).parent();
  var hourToUpdate = $(this).parent().attr("data-hour");
  var itemToAdd = (($(this).parent()).children("textarea")).val();

  for (var i = 0; i < taskItems.length; i++){
    if (taskItems[i].hour == hourToUpdate){
        taskItems[i].text = itemToAdd;
    }
  }
  localStorage.setItem("tasks", JSON.stringify(taskItems));
  renderSchedule();
}


$(document).ready(function(){
  setUpTimeBlocks();
  if(!localStorage.getItem("tasks")){
    initializeSchedule();
  } 
  currentDay.text(currentDate); 
  renderSchedule();
  scheduleContainer.on("click", "button", saveHandler);
});