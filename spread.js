let listaInicial = [5, 6, 7];
console.log(`Lista Inicial: ${listaInicial}`);

const listaIncluirMenores = [1, 2, 3];
listaInicial = [5, 6, ...listaIncluirMenores, 7];
console.log(`Lista Inicial: ${listaInicial}`);
