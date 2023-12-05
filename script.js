const input = document.getElementById('input');
const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');
const parrafo = document.getElementById('txtEncriptado');
const plantilla = document.getElementById('plantilla');

const muñeco = document.getElementById('muñeco');
const btnRefresh = document.getElementById('btnRefresh');

btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);

btnRefresh.addEventListener('click', refresh => {
location.reload();
});


let textoIngresado = "";
let textoEncriptado;


function encriptar() {
  textoIngresado = input.value;

  reemplazar();
  clean();
  if(textoEncriptado == "") {
    createHtml('not text for encript')
  }

  if(textoEncriptado == " " ) {
    createHtml('not space white')
  }
};

function desencriptar() {
  textoEncriptado = input.value;
  reemplazarDos();
  if(textoIngresado == " " ) {
    createHtml('not space white')
  }
  clean();
}

function createHtml(textoEncriptado) {
  parrafo.textContent = textoEncriptado;
}


function reemplazar() {
  textoIngresado = input.value.toLowerCase();
  textoEncriptado = textoIngresado.replace(/e/igm, "enter");
  textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
  textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
  textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
  textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");

  createHtml(textoEncriptado);
  plantilla.style.display = 'none';
  muñeco.style.display = 'none';
  
}

function clean() {
  input.value = '';
}

function reemplazarDos() {
  if(textoIngresado.includes('ai') ||
   textoIngresado.includes('enter') || 
   textoIngresado.includes('imes') || 
   textoIngresado.includes('ober') || 
   textoIngresado.includes('ufat')) {
     let textoEncriptado = textoIngresado.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
     createHtml(textoEncriptado);
     plantilla.style.display = "none";
     muñeco.style.display = "none";
     
   } else {
     createHtml('not text desencript')
   }
}

