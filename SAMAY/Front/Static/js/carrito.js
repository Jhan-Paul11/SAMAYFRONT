// document.addEventListener('DOMContentLoaded', () => {
//     const cartButton = document.getElementById('cart-button');
//     const cartModal = document.getElementById('cart-modal');
//     const closeButton = document.querySelector('.close');
//     const addToCartButtons = document.querySelectorAll('.add-to-cart');
//     const cartItems = document.getElementById('cart-items');
//     let cartCount = 0;
//     const cart = [];
// console.log(cartButton);
//     cartButton.addEventListener('click', () => {
//         cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
//     });

//     closeButton.addEventListener('click', () => {
//         cartModal.style.display = 'none';
//     });

//     window.addEventListener('click', (event) => {
//         if (event.target === cartModal) {
//             cartModal.style.display = 'none';
//         }
//     });

//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', (event) => {
//             const product = event.target.parentElement;
//             const productName = product.querySelector('h3').textContent;
//             cart.push(productName);
//             updateCart();
//         });
//     });

//     function updateCart() {
//         cartItems.innerHTML = '';
//         cart.forEach(item => {
//             const li = document.createElement('li');
//             li.textContent = item;
//             cartItems.appendChild(li);
//         });
//         cartCount = cart.length;
//         cartButton.textContent = `Carrito (${cartCount})`;
//     }
// });
