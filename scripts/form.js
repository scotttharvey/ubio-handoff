import $ from "jquery";
import parsley from 'parsleyjs'
const installOptions = $('.install-option');
const idOptions = $('.id-option');
const deviceCard = $('.device-card');
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

installOptions.on('change', (e) => {
  const input = installOptions.find('[type="radio"]:checked');

  $('.install-option').removeClass('border-blue-light');

  input.closest('.install-option').toggleClass('border-blue-light')

});

idOptions.on('change', (e) => {
  const input = idOptions.find('[type="radio"]:checked');

  $('.id-option').removeClass('border-blue-light');
  $('.id-form').addClass('hidden')

  input.closest('.id-option').find('.id-form').toggleClass('hidden')
  input.closest('.id-option').toggleClass('border-blue-light');

});

$('#SSN').val("");
$('#birthday').val("");

function ssnMask() {
  $('#SSN').addClass('hidden');
  var maskVal = '';

  for (var i = 0; i < $('#SSN').val().length; i++) {
    if (i === 3 || i === 6) {
      maskVal += '-';
    } else {
      maskVal += '*';
    }
  }

  $('#SSN-mask').val(maskVal);
  $('#SSN-mask').removeClass('hidden');
  $('#SSN-mask').css('letter-spacing', '0.7px');
}

function ssnUnmask() {
  $('#SSN-mask').addClass('hidden');
  $('#SSN').removeClass('hidden');
  $('#SSN').focus();
}

$('#SSN').focusout(function () {
  return ssnMask();
});
$('#SSN-mask').focus(function () {
  return ssnUnmask();
});
$('#SSN').on('input', function (e) {
  if (e.target.value.length >= 11) {
    ssnMask();
    $('#birthday').focus();
  }
});

function birthdayMask() {
  $('#birthday').addClass('hidden');
  var maskVal = '';

  for (var i = 0; i < $('#birthday').val().length; i++) {
    if (i === 2 || i === 5) {
      maskVal += '/';
    } else {
      maskVal += '*';
    }
  }

  $('#birthday-mask').val(maskVal);
  $('#birthday-mask').removeClass('hidden');
  $('#birthday-mask').css('letter-spacing', '0.7px');
}

function birthdayUnmask() {
  $('#birthday-mask').addClass('hidden');
  $('#birthday').removeClass('hidden');
  $('#birthday').focus();
}

$('#birthday').focusout(function () {
  return birthdayMask();
});
$('#birthday-mask').focus(function () {
  return birthdayUnmask();
});
$('#birthday').on('input', function (e) {
  if (e.target.value > 1 && e.target.value.length <= 1) {
    e.target.value = "0".concat(e.target.value);
  }

  if (e.target.value.length >= 10) {
    birthdayMask();
  }
});

// By default - Set Devices to 1 onload
$('[name="devices"]').filter('[value="1 device"]').prop('checked', true);

deviceCard.on('change', (e) => {
  const input = deviceCard.find('[name="devices"]:checked');
  $('.device-card').removeClass('bg-blue-dark');
  $(e.currentTarget).toggleClass('bg-blue-dark');

  if ($(e.currentTarget).data('activation-fee')) {
    const fee = $(e.currentTarget).data('activation-fee');
    $('.activation-fee').removeClass('hidden');
    $('.activation-fee .amount').html(fee);
  } else {
    $('.activation-fee').addClass('hidden');
  }

});
