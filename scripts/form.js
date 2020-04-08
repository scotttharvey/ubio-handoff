import $ from "jquery";
import parsley from 'parsleyjs'
const options = $('.install-option');
const scrollOnSmall = $('.fixed-submit button');


const $form = $('form')

window.Parsley.on('form:init', function() {
  // TODO: make form submit button disabled and gray when the page first loads.
  console.log(`form init'd`)
});

$('form').on('keyup change paste', 'input, select, textarea', function(){
  const parentForm = $(this).closest('form')
  const submit = parentForm.find('[type="submit"]')
  if (parentForm.parsley().isValid()) {
    submit.removeClass('disabled')
  } else {
    submit.addClass('disabled')
  }
});

$form.parsley()

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
