// Get the modal
const modal = document.querySelector('#myModal');

// If user clicks the button, open the modal
showModal = () => modal.style.display = "block";

// Grab elements that act as triggers to open the modal
const triggers = document.querySelectorAll('[data-trigger="internet"]');

triggers.forEach( trigger => {
  trigger.addEventListener('click', () => showModal());
})

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

displayNone = () => modal.style.display = "none";

// If user clicks on <span> (x), close the modal
span.onclick = displayNone;

// If user clicks anywhere outside of the modal, close it
window.onclick = event => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
