
const decoracion = document.getElementById("decoracion");
const boton = document.getElementById("botonAmor");
const sorpresa = document.getElementById("sorpresa");

const simbolos = [
    "💗", "💕", "💖", "💘", "💞",
    "♡", "♥", "✨", "✧", "⋆",
    "🌸", "🌷", "💓", "⭐", "💝",
    "🦋", "💫", "🤍"
];

// Crear partículas flotantes por toda la pantalla
function crearParticulas(cantidad = 120) {
    for (let i = 0; i < cantidad; i++) {
        const particula = document.createElement("span");

        particula.classList.add("particula");

        particula.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        particula.style.setProperty(
            "--x",
            Math.random() * 100 + "%"
        );

        particula.style.setProperty(
            "--tamano",
            (12 + Math.random() * 23) + "px"
        );

        particula.style.setProperty(
            "--duracion",
            (8 + Math.random() * 15) + "s"
        );

        particula.style.setProperty(
            "--espera",
            (-Math.random() * 23) + "s"
        );

        particula.style.setProperty(
            "--opacidad",
            (0.5 + Math.random() * 0.5).toFixed(2)
        );

        decoracion.appendChild(particula);
    }
}

// Crear una explosión de corazones al pulsar el botón
function lanzarCorazones() {
    const cantidad = 22;

    for (let i = 0; i < cantidad; i++) {
        const corazon = document.createElement("span");

        corazon.classList.add("explosion-corazon");

        corazon.textContent = [
            "💗", "💖", "💕", "✨", "💘"
        ][Math.floor(Math.random() * 5)];

        corazon.style.left = (5 + Math.random() * 90) + "vw";
        corazon.style.top = (35 + Math.random() * 40) + "vh";

        corazon.style.setProperty(
            "--desplazamiento",
            (Math.random() * 180 - 90) + "px"
        );

        corazon.style.setProperty(
            "--giro",
            (Math.random() * 100 - 50) + "deg"
        );

        document.body.appendChild(corazon);

        // Eliminar cada corazón cuando termine su animación
        corazon.addEventListener("animationend", () => {
            corazon.remove();
        }, { once: true });
    }
}

// Abrir y cerrar la carta sorpresa
boton.addEventListener("click", function () {
    const abrir = sorpresa.hidden;

    sorpresa.hidden = !abrir;

    boton.querySelector("span").textContent = abrir
        ? "Cerrar mi sorpresita"
        : "Abre tu sorpresita";

    boton.querySelector(".sobre").textContent = abrir
        ? "💗"
        : "💌";

    if (abrir) {
        lanzarCorazones();
    }
});

// Iniciar la decoración
crearParticulas(120);
