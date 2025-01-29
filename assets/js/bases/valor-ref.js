let a = 10;
let b = a;
a = 20;

console.log({a, b});

// Todos los valores primitivos se pasan por valor
// todos los objetos se pasan por referencia


let juan = {nombre: 'Juan'};
let ana = {...juan}; // operador spread para clonar el objeto
ana.nombre = 'Ana';
console.log({juan, ana});

const cambiaNombre = ({ persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre({persona: peter});

console.log({peter, tony});

