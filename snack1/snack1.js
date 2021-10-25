//Array di oggetti contenenti dati bici
const listaBici = [
    { nome: 'Cannondale SuperSix Evo', peso: 7.3 },
    { nome: 'Giant TCR Advanced Pro', peso: 6.8 },
    { nome: 'BMC Teammachine SLR01', peso: 7.2 },
    { nome: 'Vitus ZX1 EVO CRS Ultegra', peso: 8.2 },
];
console.log(listaBici);


comparazionePeso();


//Funzione per trovare la bici più legegra
function comparazionePeso() {
    //pongo la prima pici come la più leggera
    let biciLeggera = listaBici[0];

    //Ciclo su tutte le bici
    for (let i = 0; i < listaBici.length; i++) {

        // Se il peso del'attuale bici più leggera risulta maggiore rispetto al peso di un'altra bici,
        // allora quest'ultima sarà la nuova bici più leggera
        if (biciLeggera.peso > listaBici[i].peso) {
            biciLeggera = listaBici[i];
        }
    }

    const { nome, peso } = biciLeggera;

    console.log(`Bici più leggera: ${nome}, Peso: ${peso}Kg`);


    const bikeContainer = document.getElementById("bike-container");
    bikeContainer.innerHTML = `
        <h1>La Bici da corsa più leggera!</h1>
        <div>Nome: ${nome}</div>
        <div>Peso: ${peso}Kg</div>`;
}
