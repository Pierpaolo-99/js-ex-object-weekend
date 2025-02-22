/* traccia: Scrivi una funzione filtraPerProprieta(arr, chiave, valore) che accetti un array di oggetti e restituisca solo quelli in cui la proprietà chiave ha un certo valore.

const studenti = [
  { nome: "Paolo", corso: "Matematica" },
  { nome: "Sara", corso: "Fisica" },
  { nome: "Luca", corso: "Matematica" }
];
console.log(filtraPerProprieta(studenti, "corso", "Matematica")); 
// Output: [{ nome: "Paolo", corso: "Matematica" }, { nome: "Luca", corso: "Matematica" }]*/


const studenti = [
    { nome: "Paolo", corso: "Matematica" },
    { nome: "Sara", corso: "Fisica" },
    { nome: "Luca", corso: "Matematica" }
  ];
  console.log(studenti);
  
  //console.log(filtraPerProprieta(studenti, "corso", "Matematica")); 
  // Output: [{ nome: "Paolo", corso: "Matematica" }, { nome: "Luca", corso: "Matematica" }]


function filtraPerProprieta (arr, chiave, valore){
    const arrMathematicsStudents = []
    for (let i = 0; i < arr.length; i++){
        const this_student = arr[i]
        if (this_student[chiave] == valore){
            arrMathematicsStudents.push(arr[i])
        }
    }
    return arrMathematicsStudents
}

const mathematicsStudents = filtraPerProprieta(studenti, "corso", "Matematica")
console.log(mathematicsStudents);


