const cart = document.querySelector('[data-target="cart"]');

cart.addEventListener("click", () => {
  const dropdown = cart.querySelector('.dropdown-container');
  dropdown.classList.toggle('hidden')
})
