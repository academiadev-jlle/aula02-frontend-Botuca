// https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/Usando_XMLHttpRequest
// https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX/Getting_Started

document.addEventListener('DOMContentLoaded', onLoadDOM);

function onLoadDOM() {
    buscaPlaneta();
}

function buscaPlaneta() {
    const apiURL = 'https://swapi.co/api/planets/';
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', apiURL, true);
    xmlHttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            const result = JSON.parse(this.responseText);
            result.results.forEach(planetInfo => adicionaPlaneta(planetInfo));
        }
    }
    xmlHttp.send();
}

function adicionaPlaneta(info) {
    const tr = document.createElement('tr');
    const planeta = document.createElement('td');
    const populacao = document.createElement('td');
    const clima = document.createElement('td');
    const gravidade = document.createElement('td');
    const residente = document.createElement('td');

    planeta.textContent = info.name;
    populacao.textContent = info.population;
    clima.textContent = info.climate;
    gravidade.textContent = info.gravity;
    //residente.textContent = info.residents;

    tr.appendChild(planeta);
    tr.appendChild(populacao);
    tr.appendChild(clima);
    tr.appendChild(gravidade);
    tr.appendChild(residente);

    document.querySelector('.tabela-planetas tbody').appendChild(tr);

}