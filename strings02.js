/*  Criar um arquivo javascript para:
a) Exibir no console a posição da letra h na string txt.*/
let txt = "abcdefghijklm"
console.log (txt.charAt (7))
//b) Exibir no console a palavra bananas, use o método slice.

let txt1= "posso comer bananas o dia todo"
console.log (txt1.slice (11,19))
//c) Substituir a palavra "Olá" pela palavra "Bem vindo", e exibir no console.
let txt02 =" Olá , mundo ";
let mudar = txt02.replace ("Olá", "Bem, vindo");
console.log (mudar);
//d) Converter o texto em letras maiúsculas e exibir no console.
var texto= "Ola,Mundo!"
console.log( texto.toUpperCase())

//e) Converter o texto em letras minúsculas e exibir no console.
var texto= "OLÁ,MUNDO!"
console.log( texto.toLowerCase())
//f) Exibir no console o tamanho da string.
var texto ="posso comer bananas o dia todo"

console.log (texto.length);
//g) Concatenar as strings e exibir no console.
let str1 ="Olá,"
let str2 ="Mundo!"
let juntar  = str1.concat (str2);
console.log (juntar)
//h) Ordenar o array de frutas em ordem alfabética e exibir no console
const fruits = ["Banana", "Orange", "Apple","Kiwi"]
fruits.sort();
console.log (fruits);
//i) Exibir no console o array de frutas, Remover Banana e Kiwi do array de frutas e exibir no console o novo array.
var tirarInicio = fruits.shift();
var tirar = fruits.pop ();
console.log (tirar);
console.log (tirarInicio);
//j) Exibir no console o array de frutas, adicionar Uva, Caju e Kiwi no array de frutas e exibir no console o novo array.
fruits.push ("uva","Cajú", "Kiwi");
console.log (fruits);
   
/*k) Exibir no console o array de frutas, adicionar Pera e Manga no início do array de frutas, remover  o último item do array e exibir no console o novo array.*/
fruits.unshift("Pera", "Manga")
fruits.pop ();
console.log (fruits)



