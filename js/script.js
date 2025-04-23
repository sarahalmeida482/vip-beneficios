// Script para o carrossel de banners
let banners = document.querySelectorAll('.banner-carousel img');
let index = 0;

function mostrarBanner() {
    banners.forEach((img, i) => {
        img.classList.remove('ativo');
        if (i === index) {
            img.classList.add('ativo');
        }
    });
    index = (index + 1) % banners.length;
}

// Troca o banner a cada 4 segundos
setInterval(mostrarBanner, 4000);

// Script para rolar até o formulário de contato
const botaoFormulario = document.querySelector('.botao-formulario');

if (botaoFormulario) {
    botaoFormulario.addEventListener('click', function(e) {
        e.preventDefault();
        const formulario = document.getElementById('formulario');
        if (formulario) {
            formulario.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
