import flatpickr from "flatpickr";

// CALENDAR CONFIG
document.querySelector('#calendar').flatpickr({
  minDate: 'today',
  maxDate: new Date().fp_incr(30),
  defaultDate: 'today',
  altInput: true,
  altFormat: 'F j, Y',
  dateFormat: 'y-m-d',
  locale: {
    firstDayOfWeek: 1, // start week on q
  },
  inline: true,

});

//  onChange: function(dates, dayPicked) {
//   const selectOptionsContainer = document.querySelector('.time-select-container .form-number-1');
//   const [year, month, day] = dayPicked.split('-');
//   const formattedDate = `20${year}-${month}-${day}`;
//   $.get(`/includes/datetimeoption.php?selectedDate=${formattedDate}`, data => {
//     while (selectOptionsContainer.firstChild) {
//       selectOptionsContainer.removeChild(selectOptionsContainer.firstChild);
//     }
//     document.querySelector('.time-select-container .form-number-1').insertAdjacentHTML('beforeend', data);
//   });
// },
// disable: [
//   function(date) {

//     // return true to disable :: DISABLED SUNDAY & 2018 Holidays
//     return (date.getDay() === 0 || date.getDay() === 7 ||
//     date.toDateString() === 'Mon Sep 03 2018' ||
//     date.toDateString() === 'Thu Nov 22 2018' ||
//     date.toDateString() === 'Fri Nov 23 2018' ||
//     date.toDateString() === 'Mon Dec 24 2018' ||
//     date.toDateString() === 'Tue Dec 25 2018' ||
//     date.toDateString() === 'Mon Dec 31 2018' ||
//     date.toDateString() === 'Tue Jan 01 2019');
//   },
// ],