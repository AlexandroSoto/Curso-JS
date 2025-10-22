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
