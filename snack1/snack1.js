const bikesList = [
    { nome: 'Cannondale SuperSix Evo', peso: 7.3 },
    { nome: 'Giant TCR Advanced Pro', peso: 6.8 },
    { nome: 'BMC Teammachine SLR01', peso: 7.2 },
    { nome: 'Vitus ZX1 EVO CRS Ultegra', peso: 8.2 },
];
console.log(bikesList);

const listaOrdinePeso = [];

for (let i = 0; i < bikesList.length; i++) {

    const { peso } = bikesList;
    console.log(peso);
    listaOrdinePeso.push(peso);
}
console.log(listaOrdinePeso);