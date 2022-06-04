const fs = require("fs");
const path = require("path");

const pathTexto = path.join(__dirname, './caperucitaRoja.txt');

const texto = "Hola! este es el cuento de Caperucita Roja."
const mensaje = "Érase una vez una niñita que lucía una hermosa capa de color rojo. Como la niña la usaba muy a menudo, todos la llamaban Caperucita Roja. Un día, la mamá de Caperucita Roja la llamó y le dijo:Abuelita no se siente muy bien, he horneado unas galleticas y quiero que tú se las lleves. -Claro que sí —respondió Caperucita Roja, poniéndose su capa y llenando su canasta de galleticas recién horneadas.."

const escribir = fs.writeFileSync(pathTexto, texto + mensaje, "utf-8");

const leer = fs.readFileSync(pathTexto, "utf-8");

console.log(leer);