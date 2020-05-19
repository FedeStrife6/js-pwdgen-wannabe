// Informazioni Richieste All'Utente //
var nome = prompt('Inserisci il tuo nome');
var eta = prompt('Inserisci il tuo cognome');
var colore = prompt('Inserisci il tuo colore preferito');

// Testo Da Visualizzare Una Volta Inserite Le Info //
var password =  nome + eta + colore + '19';
document.getElementById('password').innerHTML = 'Benvenuto ' + password + '.';

//console.log(password);//
