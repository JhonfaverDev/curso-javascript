const carros = ['Ford', 'Fiat', 'VW', 'Chevrolet', 'Renault'];

let i = 0;

// while (i < carros.length) { 
//   console.log(carros[i]);
// //   i = i + 1; // incremento
//   i++; // incremento
// }

// Forma mas limpia del codigo anterior
// while ( i < carros.length ) {
//     console.log(carros[i]);
//     i++;
// }

while (carros[i]) {
    if ( i === 1 ){
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}

console.warn('Do While');

let j = 0;

do {
    console.log(carros[j]);
    j++;


}while( carros[j] );