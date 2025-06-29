const textos = [
  "Bienvenida a bordo, mi vida 💕",
  "¿Lista para tener un día pro hoy?"
];
const velocidadEscritura = 60;
const velocidadBorrado = 40;
const titulo = "💕 Aloooo, Mi Vida 💕";
const textoLargo = `Buenos diaaaas, mi niña linda, mi vida entera, mi mamu pro, el amor de todas mis vidaaas. 
Como descanso la niña maas maaas preciosisisma, perfecta y pro de todo el universo? Espero que muy pero que muy bien
y no torcida, amorcito. Solo queria recordarte que eres lo mas importante para mi, mi vida, estos dos ultimos meses me la he pasado
muyyy pero que muuuyy bien contigo mi niña, han sido los mejores dos meses de mi vida porque estoy con mi niña preciosisima, te amo muchisisismo mi niña
eres mi todo, quiero tooodo contigo amorcito, se que lo repito mucho pero ya no me puedo imaginar una vida sin ti, mi niña, me encantas demasiado, amo todo de ti
tu forma de ser, de mirar, de todo mi niña, toodo de ti me encanta, espero que te hayas despertado feliz
y lista para tener un dia muy muyy pro asi como tu mi niña, te amooooo 💞`;

let i = 0; 
let j = 0; 
let escribiendo = true;

const textDiv = document.getElementById("dashhtext");
const interactionDiv = document.getElementById("interaction");

function maquinaEscribir() {
  if (i < textos.length - 1) {
    if (escribiendo) {
      if (j < textos[i].length) {
        textDiv.innerHTML += textos[i].charAt(j);
        j++;
        setTimeout(maquinaEscribir, velocidadEscritura);
      } else {
        escribiendo = false;
        setTimeout(maquinaEscribir, 1500);
      }
    } else {
      if (j > 0) {
        textDiv.innerHTML = textos[i].substring(0, j - 1);
        j--;
        setTimeout(maquinaEscribir, velocidadBorrado);
      } else {
        escribiendo = true;
        i++;
        setTimeout(maquinaEscribir, 500);
      }
    }
  } else {
    if (j < textos[i].length) {
      textDiv.innerHTML += textos[i].charAt(j);
      j++;
      setTimeout(maquinaEscribir, velocidadEscritura);
    } else {
      interactionDiv.classList.add('visible');
    }
  }
}
function respuesta(opcion) {
  const card = document.querySelector(".card");
   const avion = document.getElementById("avion");
  const estela = document.querySelector(".estela-rectangulo");
  const ss = document.querySelector(".nao1");
  const dashh = document.querySelector(".dashh")
 

  if (opcion === "si") {
    card.classList.add("mover-derecha");

      setTimeout(() => {
      card.style.display = "none";

      avion.style.opacity = 1;
      avion.style.transform = "translate(120vw, -50%)";

      estela.style.width = "120vw";
      estela.addEventListener('transitionend', function handler() {
      dashh.style.display = "block";
       escribirTitulo();
      estela.removeEventListener('transitionend', handler);
    });

    }, 3100);    
  
  }
  else {
    card.style.display = "none";
    ss.classList.remove("s");
  }
}
function escribirTitulo(i = 0) {
  const tituloDiv = document.getElementById('dashh-title');
  if (i < titulo.length) {
    tituloDiv.innerHTML += titulo.charAt(i);
    setTimeout(() => escribirTitulo(i + 1), 80);
  } else {

    const textoDiv = document.getElementById('dashh-text');
     const dashhb = document.getElementById("show-video-button");
    textoDiv.innerHTML = textoLargo;
    textoDiv.style.opacity = 1;
    dashhb.style.opacity = 1;
  }
}

maquinaEscribir();
