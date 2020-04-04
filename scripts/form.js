import $ from "jquery";
import parsley from 'parsleyjs'

$('form').parsley()

$('form').on('submit', e => {
  e.preventDefault()
  console.log('form submission: ', $(e.target).serialize())
})
