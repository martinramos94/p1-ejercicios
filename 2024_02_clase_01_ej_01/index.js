//pido dos extremos para comparar
const max= parseInt(prompt("Ingrese el maximo para comparar"));
const min= parseInt(prompt("Ingrese el minimo para comparar"));

//pido el numero para comparar
const num= parseInt(prompt("Ingrese el numero a comparar"));

//verifico si el numero esta en rango
if(num >= min && num <= max){
    //entro aca solo si esta entre el max y el min
    alert("El numero esta en rango"); 
}else{
    alert("El numero esta fuera de rango");
}

//es par?

if(num % 2===0){
        alert("el numero es par");
}else{
    alert("El nuemro es impar");
}
