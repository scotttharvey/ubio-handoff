import $ from "jquery";
import "jquery-mask-plugin";

$(() => {
  console.log('working');

  $('.zip').mask('00000');
  $('#phone').mask('(000)000-0000');
  $('#SSN').mask('000-00-0000');
  $('#birthday').mask('TN/ON/YNNN', {
    translation: {
      'T': {
        pattern: /[0-3]/, optional: false
      },
      'N': {
        pattern: /[0-9]/, optional: false
      },
      'O': {
        pattern: /[0-1]/, optional: false
      },
      'Y': {
        pattern: /[1-2]/, optional: false
      }
    }
  });
  $('.credit-card-number').mask('0000 0000 0000 0000');
  $('.expire').mask('00/00');
  $('.cvv').mask('000');

});
