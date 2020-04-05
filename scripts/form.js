import $ from "jquery";
import parsley from 'parsleyjs'
const options = $('.install-option');
const scrollOnSmall = $('.fixed-submit button');

$('form').parsley()

window.Parsley.on('field:error', (e) => {
  // Scroll to hidden errors if error isnt in view
  e.element.scrollIntoView();
});

$('form').on('submit', e => {
  e.preventDefault()
  console.log('form submission: ', $(e.target).serialize())
})

options.on('change', (e) => {
  const input = options.find('[name="installMethod"]:checked');

  $('.install-option').removeClass('border-blue-light');

  input.closest('.install-option').toggleClass('border-blue-light')

});
