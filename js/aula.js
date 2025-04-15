let nome = "Rhuan";
// alert(nome);
console.log(nome);

const x = 10;
const array = ["a", "b", "c"];
const objeto = { name: "Rhuan", age: 23 }; //JSON

console.log(x);
console.log(typeof x);
console.log("------------------");
console.log(array);
console.log(typeof array);
console.log("------------------");
console.log(objeto);
console.log(typeof objeto);
console.log(objeto.name);
console.log(array[2]);

let opcao = true; //boolean
/*
condicional
....
*/

if (2 > 1) {
  console.log("2 é maior que 1");
} else {
  console.log("2 não é maior que 1");
}
// Estrutra de repetição
// i = i + 1
const arr = ["amora", "banana", "caju", "damasco", "framboesa"];
for (let i = 0; i < arr.length; i++) {
  // console.log('O valor da repetição é '+ arr[i]);
  // template literal, é o uso da crase `
  console.log(`O valor da repetição é ${arr[i]}`);
}

//função
function soma() {
  console.log(22 + 11);
}
soma();

function calcula(a, b) {
  console.log(a * b);
}
calcula(12, 12);
