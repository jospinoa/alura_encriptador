(()=>{

    document.getElementById("btnEncriptar").addEventListener("click", ()=>{
        document.getElementById("imgProcesar").style.display = "none";
        document.getElementById("resultadoProcesar").style.display = "";
        let textoEncriptar = document.getElementById("textoEncriptar").value;
        EncriptarTexto(textoEncriptar);
    });

    document.getElementById("btnDesencriptar").addEventListener("click", ()=>{
        document.getElementById("imgProcesar").style.display = "none";
        document.getElementById("resultadoProcesar").style.display = "";
        let textoDesencriptar = document.getElementById("textoEncriptar").value;
        DesencriptarTexto(textoDesencriptar);
    });

    document.getElementById("btnCopiar").addEventListener("click", ()=>{
     let textoCopiado = document.getElementById("textoEncriptado").value;
     document.getElementById("textoEncriptar").value = textoCopiado;
     document.getElementById("textoEncriptado").value = "";

    });

    document.getElementById("btnNuevo").addEventListener("click", ()=>{
        Nuevo();
    });

})(); 

function Nuevo() {
    document.getElementById("imgProcesar").style.display = "";
    document.getElementById("resultadoProcesar").style.display = "none";
    document.getElementById("textoEncriptar").value = "";
    document.getElementById("textoEncriptado").value = "";
}
/*
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/
function EncriptarTexto(textoRecibido) {
    
    let nuevoTexto = '';

    for (let index = 0; index < textoRecibido.length; index++) {
        //Tomamos cada letra del mensaje y lo convertimos en minuscula
        let nuevaLetra = textoRecibido.charAt(index).toLowerCase();
        //verificamos y convertimos según sea el caso
        if (nuevaLetra === 'e') {
            nuevaLetra = 'enter';
        }else if (nuevaLetra === 'i') {
            nuevaLetra = 'imes';
        }else if (nuevaLetra === 'a') {
            nuevaLetra = 'ai';
        }else if (nuevaLetra === 'o') {
            nuevaLetra = 'ober';
        } else if (nuevaLetra === 'u') {
            nuevaLetra = 'ufat';
        }

        nuevoTexto = nuevoTexto.concat(nuevaLetra)
    }
    //mostramos todo el mensaje encriptado en pantalla
    document.getElementById("textoEncriptado").value = nuevoTexto;
}
/*
    La frase "enter" es convertida para "e"
    La frase "imes" es convertida para "i"
    La frase "ai" es convertida para "a"
    La frase "ober" es convertida para "o"
    La frase "ufat" es convertida para "u"
*/
function DesencriptarTexto(textoRecibido) {
    //tomamos cada una de las palabra del mensaje encriptado
    const arrayPalabras = textoRecibido.split(" ");
    
    let fraseDesencriptada = '';

    for (let index = 0; index < arrayPalabras.length; index++) {
        //Tomamos cada palabra del mensaje y la convertimos en minuscula
        let nuevaPalabra = arrayPalabras[index].toLowerCase();
        //utilizamos una expresión regular para reemplazar en toda la palabra
        nuevaPalabra = nuevaPalabra.replace(/enter/gi, "e");
        nuevaPalabra = nuevaPalabra.replace(/imes/gi, "i");
        nuevaPalabra = nuevaPalabra.replace(/ai/gi, "a");
        nuevaPalabra = nuevaPalabra.replace(/ober/gi, "o");
        nuevaPalabra = nuevaPalabra.replace(/ufat/gi, "u");
        //vamos guardando cada palabra desencriptada del mensaje
        fraseDesencriptada = fraseDesencriptada.concat(`${ nuevaPalabra } `);
    }
    //mostramos todo el mensaje desencriptado en pantalla
    document.getElementById("textoEncriptado").value = fraseDesencriptada;
}