import saludar, {Saludar, PI, usuario, hello} from "./constantes.js"
import {aritmetica as calculos} from "./aritmetica.js";

console.log("Archivo Modulos");
console.log(PI, usuario);
//console.log(aritmetica.sumar(3,4));
console.log(calculos.sumar(3,4));
console.log(calculos.restar(3,4));
saludar();
hello();

let saludo = new Saludar();
saludo;