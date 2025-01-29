// Una manera no muy común de crear arreglos
// const arr = new Array(10);
// console.log(arr);


let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log(videoJuegos);

console.log(videoJuegos[0]); // Hacer referencia a un elemento del arreglo

let arregloCosas = [[1,2,3], ['Juan', 'Pedro', 'Oscar'], [true, false, true]]; // Arreglo de arreglos


let arreglocos = [
    true,
    123,
    'fernando',
    1 + 2,
    function() {}, // Funcion de flecha 
    ()=>{}, 
    {a: 1} // Objeto
];


console.log(arreglocos);
console.log(arregloCosas[1][2]); // Hacer referencia a un elemento de un arreglo de arreglos
