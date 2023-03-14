const time = dayjs('2018-04-13 15:18:17.040-08:00')
const timeDate = time.toDate()
//console.log(time)

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

$('.time-block').each(timeBlockLoad);
$('#currentDay').each(currentDisplay);
$('.saveBtn').each(saveLoadNotes)



function timeBlockLoad() {
  let block = parseInt($(this).attr('id').split('-')[1])
  //console.log(block,'block')
  //console.log(time.hour(), 'hour')
  //console.log(time.minute(), 'min')

  if (block < time.hour()) {
    $(this).addClass('past')

  } else if (block == time.hour()) {
    $(this).addClass('present')

  } else {
    $(this).addClass('future')
  }
}

function currentDisplay() {

  let month = timeDate.toLocaleString('en-US', {month: 'long'})
  let weekday = timeDate.toLocaleString('en-US', {weekday: 'long'})
  let day = weekday +', ' + month + ' ' + time.date()
  $(this).text(day)
}

function saveLoadNotes() {
  let block = $(this).parent().attr('id')
  let info = $(this).siblings('.description').value()
  localStorage.setItem(block,info)

  console.log(localStorage)
}