const ctc = require("country-to-currency");
const obtenerMoneda = (pais) => ctc[pais];

module.exports = obtenerMoneda;