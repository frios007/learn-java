// uso de switch

const day ='kjjn';

switch(day){
    case 'monday':
        console.log('Inicio de la semana');
        console.log('Empezar el dia');
        break;
    case 'tuesday':
        console.log('Segundo dia de la semana');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('miercoles y jueves aburridos');
        break;
    case 'friday':
        console.log('fin de la semana');  
        break;
    case 'saturday':
    case 'sunday':
        console.log('descansamos');
    break;
    default:
        console.log('ningun dia?')
}

if(day === 'monday'){
    console.log('Inicio de la semana');
    console.log('Empezar el dia'); 
}else if(day === 'tuesday'){
    console.log('Segundo dia de la semana');   
}else if(day === 'wednesday' || day === 'thursday'){
    console.log('miercoles y jueves aburridos');   
}else if( day === 'friday'){
    console.log('fin de la semana');  
}else if(day === 'saturday' || day === 'sunday'){
    console.log('descansamos');
}else{
    console.log('ningun dia?')
}