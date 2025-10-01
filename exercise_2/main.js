/* traccia: Scrivi una funzione estraiValori(arr, chiave) che restituisca un array con tutti i valori associati a una certa proprietà. 

const prodotti = [
  { nome: "Laptop", prezzo: 1000 },
  { nome: "Mouse", prezzo: 30 },
  { nome: "Monitor", prezzo: 200 }
];

console.log(estraiValori(prodotti, "nome")); 
// Output: ["Laptop", "Mouse", "Monitor"] */

const prodotti = [
    { nome: "Laptop", prezzo: 1000 },
    { nome: "Mouse", prezzo: 30 },
    { nome: "Monitor", prezzo: 200 }
  ];
console.log(prodotti);


function estraiValori (arr, chiave){
    const arrValori = []
    for (let i = 0; arr.length; i++){
        const thisProduct = arr[i]
        arrValori.push(thisProduct[chiave]);
    }
    return arrValori
}

const productValue = estraiValori(prodotti, "nome")
console.log(productValue);
