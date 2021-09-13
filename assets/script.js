const dateToday = moment().format('LLLL');
const currentHour = moment().hours();
// current date displays 
$('#currentDay').html(dateToday);

// set items to local storage when save button clicked
$(document).ready(function() {
  $('.saveBtn').on('click', function () {
    var taskText = $(this).siblings('.description').val();
    var taskTime = $(this).parent().attr('id');
    
    console.log(taskText, taskTime);

    // set to localstorage
    localStorage.setItem(taskTime, taskText)
  })

  // get items from localStorage, if any
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
});

$(document).ready(function() {
  $('textarea').each(function() {
    console.log(currentHour);
    console.log(parseInt($(this).attr('time')));
  })
});