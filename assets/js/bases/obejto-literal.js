let personaje   = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: true,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre:', personaje.nombre); // Acceder a las propiedades de un objeto
console.log('Nombre:', personaje['nombre']); // Otra forma de acceder a las propiedades de un objeto
console.log('Edad:', personaje.edad);

console.log('Coors:', personaje.coords);
console.log('Lat:', personaje.coords.lat);

console.log('No. Trajes:', personaje.trajes.length);
console.log('Último Traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo:', personaje[x]);

delete personaje.edad; // Eliminar una propiedad de un objeto
console.log(personaje);


const entriesPares = Object.entries(personaje); // Convertir un objeto en un arreglo    
console.log(entriesPares);

Object.freeze(personaje); // Congelar un objeto

personaje.dinero = 100000000;

