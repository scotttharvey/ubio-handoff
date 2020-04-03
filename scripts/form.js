const termsForm = document.querySelector('#terms-conditions');

if ( termsForm ) {

  const input = termsForm.querySelector('input');
  const error = termsForm.querySelector('.error');

  input.addEventListener('change', e => e.target.checked && error.classList.add('hidden'));

  termsForm.onsubmit = (e) => {
    e.preventDefault();
    !input.checked && error.classList.remove('hidden');
  }

}
