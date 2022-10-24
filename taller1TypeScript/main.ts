import { Serie } from "./serie.js";
import { series } from "./data.js";


let seriesTbody: HTMLElement = document.getElementById('series')!;
const total: HTMLElement = document.getElementById("total-series")!;

seriesATabla(series);

total.innerHTML = `Promedio de temporadas: ${getPromedioSeas(series)}`

//Llenar la tabla
function seriesATabla(series: Serie[]): void {
    series.forEach(c => {
        let listaElement = document.createElement("tr");
        listaElement.innerHTML = `<td>${c.num}</td><td>${c.name}</td><td>${c.prod}</td><td>${c.seas}</td>`;
        seriesTbody.appendChild(listaElement);
    });
}

//Calcular promedio
function getPromedioSeas(series: Serie[]): number {
    let total: number = 0;
    series.forEach((serie) => total = total + serie.seas);
    return total
}

