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
})
