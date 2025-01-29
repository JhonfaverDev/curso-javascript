function saludar( nombre ) { 
    console.log('Hola ' + nombre); // Imprimir en consola
} // Función saludar, manera tradicional de declarar una función, pero no es lo recomendado

const saludar2 = function( nombre ) { // al ser una cosntante el mnombre de la función no se puede cambiar
    console.log('Hola Mundo ' + nombre);
} // Función saludar2, manera de declarar una función anónima, 







saludar(); // Llamar a la función
saludar('zorra'); // Llamar a la función
saludar2('perro');
// saludar();