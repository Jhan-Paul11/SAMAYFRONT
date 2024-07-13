let subirBoton = document.getElementById('scrollBoton');

window.onscroll = function () {
  scrollFuncion();
};

function scrollFuncion() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    subirBoton.style.display = 'block';
  } else {
    subirBoton.style.display = 'none';
  }
}

subirBoton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

function verificarLlenadoFormulario(input) {
  if (input.value.trim() !== '') {
    input.classList.add('filled');
  } else {
    input.classList.remove('filled');
  }
}

document.querySelectorAll('.input-field').forEach((input) => {
  input.addEventListener('input', function () {
    verificarLlenadoFormulario(this);
  });
});
