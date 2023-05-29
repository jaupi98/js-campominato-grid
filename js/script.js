// definisco la funzione che crea il songolo quadratino
function createSquareElement(){
    let square = document.createElement('div');
    square.classList.add('square');
    return square;
}

// Recupero l'elelmento in cui creare la griglia

const grid = document.getElementById('grid');

for(let i = 0; i<100; i++){
    // creo il singolo quadtratino
    let square = createSquareElement();
    console.log(square);

}