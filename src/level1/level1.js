
// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(str) {
  
  return str.toString();
}

export function suma(x, y) {
 
  return x + y;  
}

export function resta(x,y) {

  return x - y;
}

export function multiplica(x,y) {

  return x*y;
}

export function divide(x,y) { 

  if (y <= 0) return 'No se puede dividir'

  return x/y;
}

export function sonIguales(x,y) {  

  return x===y;  
}

export function tienenMismaLongitud(str1, str2) {  

  if ((str1.length) === (str2.length)){
    return true
  } else {
    return false
  }
}

export function menosQueNoventa(num) {  

  if (num < 90) {
    return true
  } else {
    return false
  }
}

export function mayorQueCincuenta(num) {  

  if (num > 50){
    return true
  } else {
    return false
  }
}

export function obtenerResto(x, y) {  

  let resto = x%y;

  return resto;
}

export function esPar(num) {

  if (num % 2 === 0){
    return true
  } else {
    return false
  }
}

export function esImpar(num) {  

  return num % 2 === 1;
}

export function elevarAlCuadrado(num) {  

  return num * num;
}

export function elevarAlCubo(num) { 

  return (num * num)*num;
}

export function elevar(num, exponent) {  

  return Math.pow(num, exponent);
}

export function redondearNumero(num) {  

  return Math.round(num);
}

export function redondearHaciaArriba(num) { 

  return Math.ceil(num);
}

export function numeroRandom(num) {  

  return Math.random(num);
}

export function esPositivo(numero) {
  
  if (numero>0){
    return "Es positivo"
  } else if (numero===0) {
    return false
  }else{
    return "Es negativo"
  }
}

export function agregarSimboloExclamacion(str) {  

  return str.concat("!");
}

export function combinarNombres(firstName, lastName) {

  return firstName + ' ' + lastName;
}

export function obtenerSaludo(name) {

  return `Hola ${name}!`;
}

export function obtenerAreaRectangulo(alto, ancho) {  

  return (alto * ancho);
}


export function retornarPerimetro(lado){

  return lado*4;
}


export function areaDelTriangulo(base, altura){

  return base * altura / 2;
}


export function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares.
  
  return (euro*1.2) / 1;
}


export function esVocal(letra){

  let vocales = ["a" ,"e" ,"i" ,"o" , "u"];
  if (letra.length > 1){
    return "Dato incorrecto"
  } else if (vocales.includes(letra)){
    return "Es vocal"
  } else {
    return "Dato incorrecto"
  }
}
