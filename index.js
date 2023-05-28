const textArea = document.querySelector(".ingresoTexto");
const mensaje = document.querySelector(".salidaText");
const mensajePricipal = document.querySelector(".mensajePricipal");


function encriptado() {
   const textEncriptado = encriptar(textArea.value);
   mensaje.value  = textEncriptado;
   textArea.value = "";
   remplazo();  
}
function desincriptar() {
   const textDesencriptado = desencriptar(textArea.value)
   mensaje.value = textDesencriptado;
   textArea.value = "";  
   remplazo();
}
function encriptar(palabraInicial){   
      palabraInicial = palabraInicial.toLowerCase();
      let revisarPalabra = new RegExp(/[aeiou]/);
      if (revisarPalabra.test(palabraInicial)) {
         let cifrado = palabraInicial.replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");       
            return cifrado;
         }
      else {
         return alert("No hay vocales en el texto. ");
      }
      }
function desencriptar(palabraDesincriptada){
         palabraDesincriptada = palabraDesincriptada.toLowerCase();
         let revisarPalabraDes = new RegExp(/[aeiou]/);// revisa si hay vocales
      if (revisarPalabraDes.test(palabraDesincriptada)) {//verificare si hay vocales para seguir
         let decifrado = palabraDesincriptada.replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");       
            return decifrado;
         }
      else {//  ni hay vical en la frase u todo en minuscula
         return alert("No hay vocales en el texto. ");
      }
      }   
function botonCopia(){
   const textCopia = mensaje.value;
   navigator.clipboard.writeText(textCopia);
   document.getElementById("salidaText").style.display = 'none';    
}
function remplazo(){
   document.getElementById("salidaText").style.display = 'block';   
}







