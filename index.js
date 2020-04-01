import './scripts/modal';

console.log('hello world');

const autoBillPayTrigger = document.querySelector('.auto-bill-pay-trigger')
const autoBillPayCardTrigger = document.querySelector('.auto-bill-pay-card-trigger')

if (autoBillPayTrigger) {
  autoBillPayTrigger.addEventListener('change', e => {
    const show = e.target.checked

    if (show) {
      document.querySelector('.auto-bill-pay-step').classList.remove('hidden')
    } else {
      document.querySelector('.auto-bill-pay-step').classList.add('hidden')
      autoBillPayCardTrigger.checked = false
      document.querySelector('.auto-bill-pay-card-step').classList.add('hidden')

    }
  })
}


if (autoBillPayCardTrigger) {
  autoBillPayCardTrigger.addEventListener('change', e => {
    const show = e.target.checked

    if (show) {
      document.querySelector('.auto-bill-pay-card-step').classList.remove('hidden')
    } else {
      document.querySelector('.auto-bill-pay-card-step').classList.add('hidden')

    }
  })
}
