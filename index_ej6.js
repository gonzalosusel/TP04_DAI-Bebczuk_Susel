try{
    const parsearUrl = require("./modules/URLPase");
    console.log(parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"))
} catch(err) {
    console.log(`Upsi hay un error: ${err}`);
}