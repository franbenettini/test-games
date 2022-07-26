// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).

  return x > y ? x : y
}

export function mayoriaDeEdad(edad) {

  return edad >= 18 ? 'Allowed' : 'Not allowed';
}
  
export function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 

  switch (status) {
    case 1:
      return 'Online';
    case 2:
      return 'Away';
    case 3:
      return 'Offline';
    default:
      return 'Offline';
  }
}

export function saludo(idioma) {  

  switch (idioma) {
    case 'aleman':
      return 'Guten Tag!';
    case 'ingles':
      return 'Hello!';
    case 'mandarin':
      return 'Ni Hao!';
    default:
      return 'Hola!';
  }

}

export function colors(color) {  
  //Usar el statement Switch.
  
  switch (color) {
    case 'blue':
      return 'This is blue';
    case 'red':
      return 'This is red';
    case 'green':
      return 'This is green';
    case 'orange':
      return 'This is orange';  
    default:
      return 'Color not found';
  }
 
}

export function esDiezOCinco(numero) {

  if (numero == 5 || numero == 10) {
    return true
  } else {
    return false
  }

}

export function estaEnRango(numero) {  

  if (numero > 20 && numero < 50) {
    return true;
  } else {
    return false;
  }

}

export function esEntero(numero) {
  
  return Number.isInteger(numero) ? true : false;
}

export function fizzBuzz(numero) {
  
  if (numero % 15 === 0) {
    return "fizzbuzz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } else {
    return numero;
  }
}

export function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  } else if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  } else if (num1 > num2 && num1 > num3) {
    return "Número 1 es mayor y positivo";
  } else if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  } else {
    return false;
  }
  
}

export function esPrimo(num) {
  
  // Casos especiales
	if (num == 0 || num == 1 || num == 4) return false;
	for (let x = 2; x < num / 2; x++) {
		if (num % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;  
}

export function esVerdadero(valor){
  
  if (valor === true){
    return 'Soy verdadero'
  } else {
    return 'Soy falso'
  }
}

export function tablaDelSeis(){
  
  let tabla = [];
  for(let i = 0; i <= 10; i++){
    tabla.push(6 * i);
  }
  return tabla;

}

export function tieneTresDigitos(numero){
  
  let resultado = numero.toString().length === 3 ? true : false

  return resultado;
}

export function doWhile(numero) {  
  
  /* let i=0;
  while (i===8){
    numero = numero + 5;
    i++;
  } */

  let i = 0;
  do {
    numero += 5;
    i += 1;
  } while (i < 8);

  return numero;
  
}