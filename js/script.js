/*
Data una lista della spesa (inventatela), 
stampare in pagina gli elementi della lista individualmente 
con un ciclo while.  (anche brutalmente, basta che si vedano)
*/

//prendo gli elementi in pagina

const target = document.getElementById('target');
//creo un aray per gli elementi della speas 
const shopingList = ['uova', 'latte', 'burro', 'mele' ,'zucchero', 'farina'];
//prendo la lunghezza del arai
const elementNumber = shopingList.length

console.log(elementNumber); 

//creo variabile d'appoggio
let element = ''
let i = 0;
while(i < elementNumber){
    element += `<li>${shopingList[i]}</li>`
    i++
    //console.log(element)
}


target.innerHTML += element

