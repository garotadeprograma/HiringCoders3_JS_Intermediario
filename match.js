const cpf = '444.555.666-96';

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');

console.log(cpf.match(regex));