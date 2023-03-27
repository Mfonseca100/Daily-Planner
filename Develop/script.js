// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){

});
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  
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
  //HINT: What does `this` reference in the click listener
  // function? 
  //this refers to the save button that was clicked.
  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? 
  //By using DOM traversal to get the id of the containing time-block, we can ensure that the user input is saved in the correct time-block in local storage.
  //How might the id be useful when saving the description in local storage?
  //Using the id, you can easily retrieve the specific description from local storage that you need.
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

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
  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  // current date using Day.js
const currentDate = dayjs().format('dddd, MMMM D, YYYY');

// Select the HTML element where you want to display the current date
const currentDateElement = document.querySelector('#current-date');

// Set the inner text of the HTML element to the current date
currentDateElement.innerText = currentDate;
});

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
