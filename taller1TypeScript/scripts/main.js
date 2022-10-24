import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var total = document.getElementById("total-series");
seriesATabla(series);
total.innerHTML = "Promedio de temporadas: ".concat(getPromedioSeas(series));
//Llenar la tabla
function seriesATabla(series) {
    series.forEach(function (c) {
        var listaElement = document.createElement("tr");
        listaElement.innerHTML = "<td class=\"thead-light\" >".concat(c.num, "</td><td class = \"noma\" >").concat(c.name, "</td><td>").concat(c.prod, "</td><td>").concat(c.seas, "</td>");
        seriesTbody.appendChild(listaElement);
    });
}
//Calcular promedio
function getPromedioSeas(series) {
    var total = 0;
    series.forEach(function (serie) { return total = total + serie.seas; });
    return total;
}
