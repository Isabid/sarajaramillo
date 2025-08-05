// JavaScript para desplazarse al inicio de la página cuando se hace clic en el enlace
document.getElementById('regresarAlInicio').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Obtén todas las imágenes ampliables
const imagenesAmpliables = document.querySelectorAll('.ampliable');

// Agrega un evento de clic a cada imagen ampliable
imagenesAmpliables.forEach((imagen) => {
    let escalado = 1; // Factor de escala inicial
    const factorDeIncremento = 0.2; // Cuánto incrementar el tamaño con cada clic

    imagen.addEventListener('click', (event) => {
        // Verifica si fue un clic normal o un doble clic
        if (event.detail === 1) {
            // Incrementa el factor de escala
            escalado += factorDeIncremento;
            // Limita el tamaño máximo al 200% del tamaño original (ajusta según tus necesidades)
            escalado = Math.min(escalado, 2);

            // Aplica el nuevo tamaño con una transición suave
            imagen.style.transition = 'transform 0.3s ease';
            imagen.style.transform = `scale(${escalado})`;
        } else {
            // Doble clic, restablece el tamaño original
            escalado = 1;
            imagen.style.transition = 'transform 0.3s ease';
            imagen.style.transform = `scale(${escalado})`;
        }
    });
});


document.querySelectorAll('nav a').forEach(function(enlace) {
    enlace.addEventListener('touchstart', function() {
        // Lógica para desplegar el menú aquí
    });
});


//para dar la opion scroll a android
  const btn = document.getElementById('menu-btn');
  const menu = document.querySelector('.dropdown-menu');
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn');
    const menu = document.querySelector('.dropdown-menu');
    
    let isScroll = false;
    menu.addEventListener('touchstart', () => isScroll = false);
    menu.addEventListener('touchmove', () => isScroll = true);
    menu.addEventListener('touchend', ev => {
        if (isScroll) {
            ev.preventDefault();
            isScroll = false;
        }
    }, { passive: false });

    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', ev => {
            if (isScroll) {
                ev.preventDefault();
                ev.stopPropagation();
                isScroll = false;
            }
        });
    });

    let abierto = false;
    btn.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'touch') e.preventDefault();
    });

    btn.addEventListener('click', () => {
        abierto = !abierto;
        document.body.classList.toggle('nav-open', abierto);
    });
  });
