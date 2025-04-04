const fs = require("fs");
const path = require("path");

function copiar(nombre1, nombre2){
    let contenido = fs.readFileSync(path.join(__dirname, "..", nombre1), "utf8");
    fs.writeFileSync(path.join(__dirname, "..", nombre2), contenido);
}

module.exports = copiar;