let button = document.getElementById('genera');

button.addEventListener('click', function(){

    let km = parseInt(document.getElementById('km').value);
    let age = parseInt(document.getElementById('age').value);
    let name = document.getElementById('name').value;
    
    




    let prezzo = km * 0.21;
    let messaggio = '';
    

    if( age === 1 ){
        messaggio += `${prezzo.toFixed(2)}€`;
        document.getElementById('offerta').innerHTML = `Biglietto Standard`
        
    }
    else if ( age === 0 ){
        prezzo = prezzo * 0.8;
        messaggio += `${prezzo.toFixed(2)}€`
        document.getElementById('offerta').innerHTML = `Biglietto Sconto Minorenni`
    }
    else{
        prezzo = prezzo * 0.6;
        messaggio += `${prezzo.toFixed(2)}€`
        document.getElementById('offerta').innerHTML = `Biglietto Sconto Over-65`
    }

    document.getElementById('prezzo').innerText = messaggio;
    document.getElementById('nome_passeggero').innerText = name;

    let cp = Math.floor(Math.random() * 10000);
    document.getElementById('cp').innerText = cp;

    let carrozza = Math.floor(Math.random() * 10) +1;
    document.getElementById('carrozza').innerText = carrozza;



});

document.getElementById('annulla').addEventListener('click', function(){

    document.getElementById('prezzo').innerText = '';
    document.getElementById('nome_passeggero').innerText = '';
    document.getElementById('offerta').innerHTML = ``
    document.getElementById('carrozza').innerHTML = ``
    document.getElementById('cp').innerHTML = ``
    

})