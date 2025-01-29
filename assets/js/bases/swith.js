const dia = 0; // 0: Domungo

switch ( dia ) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes'); 
        break; // Si no se pone el break, se ejecutará el siguiente caso
    case 2:
        console.log('Martes');
        break;
    default: // Si no se cumple ningún caso, se ejecuta el default
        console.log('No es un día de la semana');
        break;
}