const listaSquadre = [
    { nome: 'Milan', punti: 0, falli: 0 },
    { nome: 'Juventus', punti: 0, falli: 0 },
    { nome: 'Inter', punti: 0, falli: 0 },
    { nome: 'Roma', punti: 0, falli: 0 },
    { nome: 'Palermo', punti: 0, falli: 0 },
    { nome: 'Atalanta', punti: 0, falli: 0 },
    { nome: 'Fiorentina', punti: 0, falli: 0 },
    { nome: 'Napoli', punti: 0, falli: 0 },
    { nome: 'Torino', punti: 0, falli: 0 },
    { nome: 'Sassuolo', punti: 0, falli: 0 },
];

function valoriRandom(min, max) {
    const numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroRandom;
}


function valoriGenerator() {


    for (i = 0; i < listaSquadre.length; i++) {

        let randomPoints = valoriRandom(0, 100);
        listaSquadre[i].punti = randomPoints;


        let randomFouls = valoriRandom(0, 20);
        listaSquadre[i].falli = randomFouls;

    }
    console.log(listaSquadre);
}


function nuovaLista() {

    const newList = [];

    for (i = 0; i < listaSquadre.length; i++) {
        const { nome, falli } = listaSquadre[i];
        newList.push(`Nome: ${nome} - Falli subiti: ${falli}`);
    }
    console.log(newList);

}

valoriGenerator();
nuovaLista();