let nome = "Matheus"
// alert(nome);
console.log(nome);

const x = 10;
const lista = [1,2,3]
const objeto = {name: "Matheus", age:51} //JSON

console.log(x);
console.log(typeof x);
console.log('-----------------')
console.log(lista)
console.log(typeof lista)
console.log('------------------')
console.log(objeto)
console.log(typeof objeto)

let valor = true // boleano

if (2 > 1) {
    console.log("2 é maior que 1")
} else {
    console.log("2 não é maior que 1")
}
//

// Estrutura de repetição
// i = i + 1
const arr = ["amora", "banana", "caju", "damasco", "oloco", "nosfaa"];

for (let i = 0; i < arr.length; i++){
    console.log("O valor da repetição é " + arr[i])
    // console.log('O valor da repetição é '+arr[i])
    // template literal, é o uso da crase `
    console.log(`O valor da repetição é ${arr[i]}`)
}

//função
function soma(){
    console.log(22+11);
}

function calcula(a,b){
    console.log(a*b)
}

calcula(12,12)