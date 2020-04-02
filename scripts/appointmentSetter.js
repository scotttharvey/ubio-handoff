import flatpickr from "flatpickr";

const dummyTimes = {
  '20-04-03': [
    '11am - 12pm',
    '12pm - 1pm',
    '2pm - 3pm'
  ],
  '20-04-04': [
    '11am - 12pm',
    '12pm - 1pm',
  ],
  '20-04-06': [
    '11am - 12pm',
    '5pm - 6pm',
  ],
  '20-04-07': [
    '11am - 12pm',
    '1pm - 2pm',
    '4pm - 5pm',
    '5pm - 6pm',
  ],
  '20-04-08': [
    '11am - 12pm',
    '1:30am - 2pm',
    '5pm - 6pm',
  ]
}

// CALENDAR CONFIG
document.querySelector('#calendar').flatpickr({
  minDate: 'today',
  maxDate: new Date().fp_incr(7),
  defaultDate: 'today',
  altInput: true,
  altFormat: 'F j, Y',
  dateFormat: 'y-m-d',
  locale: {
    firstDayOfWeek: 1, // start week on q
  },
  inline: true,
  onChange: (dates, dayPicked) => {
    const availableTimesContainer = document.querySelector('#available-times')
    if (dummyTimes[dayPicked]) {
      const buttonMarkup = dummyTimes[dayPicked].map(time =>
        `<button class="w-75 p-y-8 p-x-45 bg-blue-dark white text-18 m-b-10 border-radius-4 box-shadow">${time}</button>`
      )
      availableTimesContainer.innerHTML = buttonMarkup.join('')
    }

  },
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
