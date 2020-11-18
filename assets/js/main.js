 /*Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
Consigli del giorno:
1. consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.*/

var cognome = prompt("inserire cognome");
//console.log (cognome);

var cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1);

var cognomiList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

cognomiList.push(cognome);
//console.log(cognomiList);

cognomiList.sort();
//console.log(cognomiList);

// stampa lista cognomi

//console.log(cognomiList.indexOf(cognome) +1);

var contenutolista = document.getElementById("lista-cognomi");
console.log(contenutolista);

for (var i=0; i<cognomiList.length; i++){
  var item = cognomiList[i];
  contenutolista.innerHTML += "<li>" + item + "</li>";
  //console.log(item);

  //var posizione = i +1;
  console.log(posizione);
}


document.getElementById('posizione').innerHTML = cognomiList.indexOf(cognome) +1 + " questa è la posizione del tuo cognome"




//console.log(cognomiList.indexof(newCognome));
/*for (i = 0; i < cognomiList.lenght; i++){

 if (newCognome == cognomiList[i]){
   console.log(cognomiList.indexof(newCognome));
 }

}*/

/*var newCognome = false
for (i = 0; i < cognomiList.lenght; i++){
  if (newCognome == cognomiList[i]){
    newCognome = true;
    console.log(listaCognomi.indexof(newCognome))
  }
}*/
