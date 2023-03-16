//  Tipo Any
const a: any = 27;
const b: any = ['Adriane'];

const result = a + b;
console.log(result);

// Quando usar o tipo any

const formulario: { [campoFomulario: string]: any } = {
  nome: 'Adriane',
  sobrenome: 'Almeida',
  idade: 27,
};

console.log(formulario);
