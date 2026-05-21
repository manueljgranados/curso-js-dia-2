import { frases } from "./data/frases.js";
import { elegirAleatorio } from "./utils/random.js";

const parrafoFrase = document.getElementById("frase");
const botonFrase = document.getElementById("boton-frase");

function mostrarFrase() {
    const frase = elegirAleatorio(frases);

    parrafoFrase.textContent = frase;
}

botonFrase.addEventListener("click", mostrarFrase);

mostrarFrase();