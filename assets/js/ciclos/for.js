const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Flash', 'Acuaman', 'Linterna Verde', 'Cyborg', 'Shazam', 'Flecha Verde', 'Atom'];

console.warn('For tradicional');

for ( let i = 0; i < heroes.length; i++) { // i = i + 1 sintaxis basica del for
    console.log(heroes[i]); 
}


console.warn('For in');

for ( let i in heroes ) { 
    console.log(heroes[i]); 
}


console.warn('For of');

for ( let heroe of heroes ) { 
    console.log(heroe); 
}

