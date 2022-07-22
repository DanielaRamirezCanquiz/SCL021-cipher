const cipher = {


encode: function (desplazamiento, texto){
  if (texto==="" || texto.length===0 || desplazamiento===0) {
    throw new TypeError("Error");
  }
  let resultado= "";
  let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  desplazamiento = (desplazamiento % 26 + 26) % 26;
   
  if (texto){
    for(let i = -0; i<texto.length; i++){
    // console.log(texto)
    if(letras.indexOf(texto[i])!==-1){
    // console.log(letras.indexOf(texto[i]))
    let posicion = ((letras.indexOf(texto[i]) + desplazamiento) % 26);
    // console.log(posicion)
    resultado += letras[posicion];
    // console.log(resultado)
    }
    }
  }
  // console.log(resultado)
  return resultado;
},

decode: function(desplazamiento, texto){
  if (texto==="" || texto.length===0 || desplazamiento===0) {throw new TypeError("Error");}
  let resultado = "";
  let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  desplazamiento = (desplazamiento % 26 - 26 ) % 26;
  // console.log(desplazamiento)
  if (texto){
    for(let i = -0; i<texto.length; i++){
    // console.log(texto)
    if(letras.indexOf(texto[i])!== -1){
    // console.log(texto[i])
    let posicion = ((letras.indexOf(texto[i]) - desplazamiento) % 26);
    // console.log(posicion)
    resultado +=letras[posicion];
    // console.log(resultado)
    }

    }
  }
  // console.log(resultado)
  return resultado;
}


};

export default cipher;


// ANCHOR sombrear todo y apretar control + k + c para comentar y para descomentar es control + k + u
