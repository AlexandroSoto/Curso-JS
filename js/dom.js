 /*    console.log(window);
        let texto = "tres tristes tigres tragaban trigo en un trigal";
        const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
        hablar(texto);  */ 


//--------------------------- Nodos, Elementos y Selectores ----------------------------
/*console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el)=>console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li")); */ 

//-------------------------- DOM: Atributos y Data-Attributes --------------
/*
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.documentElement.querySelector(".link-dom").href);
console.log(document.documentElement.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https:www.youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-Atributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description="Suscríbete a mi canal y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));          */

//------------------------------  DOM: Estilos y Variables CSS----------------------------  
/*
const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));


//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
 $body = document.body;

let varDrkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
 varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDrkColor,varYellowColor);

$body.style.backgroundColor = varDrkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","#000");
varDrkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color",varDrkColor);*/

//--------------------  DOM: Clases CSS -------------------------------------------------

/*const $card = document.querySelector(".card");

console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.replace("rotate-45", "rotate-135");

$card.classList.add("opacity-80","sepia");
$card.classList.remove("opacity-80","sepia");
$card.classList.toggle("opacity-80","sepia");           */ 

//-----------------     DOM: TEXTO Y HTML       -------------------------------------
/*
const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>aoaoaaoaoaoa</p>
<p>jsnvhfbsjknc</p>
<p>envfjdksmasmdckmeoss</p>
`;

$whatIsDOM.innerText = text; //no traduce html y ademas pinta algun salto de linea
$whatIsDOM.textContent = text; //no traduce html
$whatIsDOM.innerHTML = text; //reconoce elementos html
$whatIsDOM.outerHTML = text; //reconoce elementos html  */



//---------------------------   DOM TRAVERSING: RECORRIENDO EL DOM -----------------------------
        /*
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
*/

//----------------------- DOM: Creando Elementos y Fragmentos --------------------------
/*
const $figure = document.createElement("figure"),
 $img = document.createElement("img"),
 $figcaption = document.createElement("figcaption"),
 $figcaptionText = document.createTextNode("Animals"),
 $cards = document.querySelector(".cards"),
 $figure2 = document.createElement("figure");

$img.setAttribute("src","https:placeimg.com/");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
 <img src="https:placeimg.com/" alt="People">
 <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["primavera","verano","otoño","invierno"],
 $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach(elemento =>{
        const $li = document.createElement("li");
        $li.textContent = elemento;
        $ul.appendChild($li);
});

const continentes = ["africa","amrica","asia","europa","oceania"];
 $ul2 = document.createElement("ul");

document.write("<h3>Continentes</h3>")
document.body.appendChild($ul2);
$ul2.innerHTML="";
continentes.forEach(el=>$ul2.innerHTML+=`<li>${el}</li>`);

const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre"
];

const $ul3 = document.createElement("ul"),
 $fragment = document.createDocumentFragment();

meses.forEach(el => {
        const $li = document.createElement("li");
        $li.textContent = el;
        $fragment.appendChild($li);
});

document.write("<h3>Meses de año</h3>")
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
*/ 

//-------------------------   DOM: Templates HTML ------------------------------------
/*
const $cards = document.querySelector(".card"),
 $template = document.getElementById("template-card").content,
 $fragment = document.createDocumentFragment(),
 cardContent = [
        {
                title:"Tecnologia",
                img:"https://placeimg.com/200/200/tech",
        },
        {
                title:"Animales",
                img:"https://placeimg.com/200/200/animals",
        },
        {
                title:"Arquitectura",
                img:"https://placeimg.com/200/200/arch",
        },
        {
                title:"Gente",
                img:"https://placeimg.com/200/200/people",
        },
        {
                title:"Naturaleza",
                img:"https://placeimg.com/200/200/nature",
        },
 ];

cardContent.forEach(el=>{
  $template.querySelector("img").setAttribute("src",el.img);
  $template.querySelector("img").setAttribute("alt",el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template,true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
*/


//---------------------------DOM Modificando Elementos --------------------------
/*
const $cards = document.querySelector(".cards"),
 $newCard = document.createElement("figure"),
 $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alr="Any">
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

//$cards.replaceChild($newCard,$cards.children[2]);
//$cards.removeChild($cards.lastElementChild);
//$cards.insertBefore($newCard,$cards.firstElementChild);

document.body.appendChild($cloneCards);
*/ 

//----------------------- DOM: Modificando Elementos (Cool Style)-------------------------
/*
const $cards = document.querySelector(".cards"),
 $newCard = document.createElement("figure");

let $contentCard  = `
<img src="https://placeimg.com/200/200/any" alr="Any">
<figcaption></figcaption>
`;
$newCard.classList.add("card");


$newCard.insertAdjacentHTML("beforeend",$contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
//$cards.insertAdjacentElement("afterbegin",$newCard);

$cards.prepend($newCard);
$cards.append($newCard);
$cards.before($newCard);
$cards.after($newCard);
*/ 

//-------------------- DOM: Maneajadores de Eventos --------------------------------
/*
function holaMundo(){
  alert("Hola Mundo");
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e){
  alert("hola mundo manejador de eventos semantico");
  console.log(e);
  console.log(event);
}

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click",(e)=>{
  alert("Hola manejador de eventos multiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e);
})
*/

//-------------------  DOM: Flujo de Eventos (Burbuja y Captura)--------------------------
//----------------     DOM: stopPropagation & preventDefault -----------------------------
//-------------------- DOM: Delegación de Eventos ----------------------------------------

/*
function flujoEventos(e){
  console.log(`Hola te saluda ${this}, el clic lo origino ${e.target.className}`);
}

document.addEventListener("click", (e)=>{
  console.log("click en " , e.target);

  if(e.target.matches("eventos-flujo div")){
    flujoEventos(e);
  }

  if(e.target.matches("eventos-flujo a")){
    alert("Hola soy tu amigo y docente digital JonMircha");
    e.preventDefault();
  }
});

console.log(window.document);

*/

//---------------------  BOM: Propiedades y Eventos   ---------------------------
/*
window.addEventListener("resize",e=>{
  console.clear();
  console.log("***********Evento Resize***********");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("scroll",e=>{
  console.clear();
  console.log("***********Evento Scroll***********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", e=>{
  console.log("***********Evento Load***********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
})

document.addEventListener("DOMContentLoaded",e=>{
  console.log("***********Evento DOMContentLoaded***********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
})
*/ 

//------------------------------  BOM: Metodos  --------------------------------------

//window.alert("alerta");
//window.confirm("Confirmacion");
//window.prompt("Aviso");
/*
const $btnAbrir=document.getElementById("abrir-ventana"),
 $btnCerrar=document.getElementById("cerrar-ventana"),
 $btnImprimir=document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener('click',e=>{
  ventana = window.open("https://jonmircha.com");
});

$btnCerrar.addEventListener('click',e=>{
  //window.close();
  ventana.close();
});

$btnImprimir.addEventListener('click',e=>{
  window.print();
});
*/ 

//-----------------  BOM: Objetos: URL, Historial y Navegador -----------------------

// console.log("**********Objeto URL(location)*******************");
// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);//detecta valor de la url despues del hash
// console.log(location.pathname);

// console.log("********* Objeto Historial (history) **********");
// console.log(history);
// console.log(history.length);
// history.forward(1);
// history.go(-3);
// history.back(2);

console.log("********* Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);