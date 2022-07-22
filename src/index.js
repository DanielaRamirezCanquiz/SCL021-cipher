import cipher from './cipher.js';

// console.log(cipher);

// text area
const textoingreso = document.getElementById("textoingreso");

//botón cifrar y decifrar
const btnCifrar = document.getElementById("cifrar");
const btnDecifrar = document.getElementById("decifrar")

//input offset
let desplazamiento = document.getElementById("desplazamiento");

//text area resultado del cifrado
let textoCifrado = document.getElementById("textocifrado");
//text area para mostrar decifrado del texto cifrado
let textoDecifrado = document.getElementById("textodecifrado")

     // textoingreso.addEventListener("keyup", () => {
     //      this.value = this.value.toUpperCase();
     // }, true),

     btnCifrar.addEventListener("click", () => {
               textoCifrado.innerText = cipher.encode(desplazamiento.value, textoingreso.value);
          }, true);

     btnDecifrar.addEventListener("click", function () {
          textoDecifrado.innerText = cipher.decode( desplazamiento.value, textoCifrado.value)
     }, true);
