
$(document).ready(function(){

});
$(function () {
  // a listener for click events on the save button.
  
  // Get all the save buttons
const saveButtons = document.querySelectorAll(".saveBtn");

// Add a click event listener to each save button
saveButtons.forEach(function (saveButton) {
  saveButton.addEventListener("click", function () {
    // Get the user input from the textarea
    const description = this.parentElement.querySelector("textarea").value;

    // Get the id of the containing time-block
    const timeBlockId = this.parentElement.id;

    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, description);
  });
});

  // Get the current hour using Day.js
const currentHour = dayjs().hour();

// Loop through each time block element
const timeBlocks = document.querySelectorAll('.time-block');
timeBlocks.forEach((timeBlock) => {
  // Extract the hour value from the id attribute of the time block
  const hour = parseInt(timeBlock.id.split('-')[1]);

  // Compare the extracted hour value to the current hour
  if (hour < currentHour) {
    timeBlock.classList.add('past');
  } else if (hour === currentHour) {
    timeBlock.classList.add('present');
  } else {
    timeBlock.classList.add('future');
  }
});


  
  // display the current date in the header of the page.
  // current date using Day.js
const currentDate = dayjs().format('dddd, MMMM D, YYYY');

// Select the HTML element where you want to display the current date
const currentDateElement = document.querySelector('#current-date');

// Set the inner text of the HTML element to the current date
currentDateElement.innerText = currentDate;
});
//jquery code to select the textarea elements with the class description inside the elements 
//with ID hour 9-18 and setting their values to the corresponding values stored in local storage. 
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
$('#hour-18 .description').val(localStorage.getItem('hour-18'));

