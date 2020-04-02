// Get the modal
const modal = document.querySelector('#myModal');

if (modal) {

  if (modal.classList.contains('is-active')) {
    modal.classList.remove('invisible');
  } else {
    modal.classList.add('invisible');
  }

  // If user clicks the button, open the modal
  showModal = () => {
    modal.classList.remove('invisible');
  };

  // Grab elements that act as triggers to open the modal
  const triggers = document.querySelectorAll('[data-trigger]');

  triggers.forEach( trigger => {
    trigger.addEventListener('click', () => showModal());
  })

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  displayNone = () => {
    modal.classList.add('invisible');
  };

  // If user clicks on <span> (x), close the modal
  span.onclick = displayNone;

  // If user clicks anywhere outside of the modal, close it
  window.onclick = event => {
    if (event.target == modal) {
      modal.classList.add('invisible');
    }
  }

}
