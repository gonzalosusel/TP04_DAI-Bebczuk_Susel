const url = require("url");

function parsearUrl(urlCompleta){
    let urlObj = new url.URL(urlCompleta);
    return {
        host: urlObj.host,
        pathname: urlObj.pathname,
        parametros: Object.fromEntries(urlObj.searchParams.entries())
    };
}

module.exports = parsearUrl;