// En un juego de pelea un personaje utiliza un skill.
//     La skill funciona de esta manera:
//     El contrincante recibirá 10 golpes
//     Cada uno de esos golpes proporciona un daño que varia entre 1000 y 2000 de manera aleatoria
//         a.Muestre cual fue el daño recibido por el contrincante en cada golpe
//         b.Muestre el daño total final que el enemigo recibió


let golpes = [];
let dañoTotal = 0;

for(i=0; i<11; i++){
    let daño = Math.floor(Math.random()*1000+1000);
    golpes.push(daño)
    dañoTotal+= daño

}

document.write(`El daño hecho por cada golpe es de:<br> . ${golpes.join(`<br> . `)}`);

document.write(`<br>El daño total recibido fue de ${dañoTotal}`);

