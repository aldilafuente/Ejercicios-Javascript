//EJERCICIOS SON STRINGS Y NÚMEROS

//EJERCICIO 39
// var name, surname;
// name = 'Aldana';
// surname = 'Lafuente';
// console.log('Mi nombre es', name, 'y tiene', name.length, 'letras.');
// console.log('Y mi apellido es', surname, 'y tiene', surname.length, 'letras.');


//EJERCICIO 40
// var text = 'Here, using... ';
// var method = 'EL ~ M É T O D O  C O N C A T ~';
// console.log(text.concat(method));


//EJERCICIO 41 Y 42
// var text = 'BLACKEN THE CURSED SUN';
// console.log(text.toLowerCase());

// var texto = 'lamb of god';
// console.log(texto.toUpperCase());


//EJERCICIO 48
// var piString = '3.14';
// var constanteString = '42';
// var pi = parseFloat(piString);
// var constante = parseInt(constanteString);
// var resultado = pi + constante;

// console.log(resultado);
// console.log('45.14 es el resultado de sumar las variables', pi.toString(), 'y', constante.toString());



//ESTRUCTURAS DE CONTROL

//EJERCICIO 49
// var number1 = 10;
// var number2 = 5;

// if (number1 > number2) {
//     console.log('La variable NUMBER1 (10) es mayor que la variable NUMBER2 (5)');
// }


//EJERCICIO 50
// var number = 10;

// if (number % 2 == 0) {
//     console.log('El número 10 es par');
// }


//EJERCICIO 51
// var user = 'hannaldi';
// var password = 'ahrecontraseña';

// if (user==='hannaldi' && password ==='ahrecontraseña') {
//     console.log('El usuario y contraseña son correctos');
// }


//EJERCICIO 52
// var number1 = 10;
// var number2 = 15;

// if (number1 > number2) {
//     console.log('La variable NUMBER1 es mayor que la variable NUMBER2');
// } else {
//     console.log('La variable NUMBER1 NO es mayor que la variable NUMBER2');
// }


//EJERCICIO 53
// var number = 13;

// if (number % 2 == 0) {
//     console.log('El número es par');
// } else {
//     console.log('El número es impar');
// }


//EJERCICIO 54
// var user = 'hannaldi';
// var password = 'ahrecontrasenia';

// if (user==='hannaldi' && password ==='ahrecontraseña') {
//     console.log('El usuario y contraseña son correctos');
// } else {
//     console.log('El usuario y contraseña no pudieron ser verificados, vuelva a intentar');
// }


//EJERCICIO 55
// var number1 = 10;
// var number2 = 15;

// number1>number2 ? console.log('El número 10 es mayor que 15') : console.log('El número 10 es menor que 15');


//EJERCICIO 56
// var number = 13;

// number % 2 === 0 ? console.log('El número es par') : console.log('El número es impar');


//EJERCICIO 57
// var user = 'hannaldi';
// var password = 'ahrecontrasenia';

// user === 'hannaldi' && password === 'ahrecontraseña' ? console.log('El usuario y contraseña son correctos') : console.log('El usuario o contraseña no son válidos, vuelva a intentar');


//EJERCICIO 58
// var hora = 9;

// if (hora <= 12 && hora > 5) {
//     console.log('¡Buen día!');
// } else if (hora > 12 && hora < 20) {
//     console.log('¡Buenas tardes!');
// } else {  
//     console.log('¡Buenas noches!');
// }


//EJERCICIO 59
// var number1 = '21';
// var number2 = '18';

// if (number1 > number2) {
//     console.log('La variable NUMBER1 es más grande que NUMBER2.');
// } else {
//     console.log('La variable NUMBER2 es más grande que NUMBER1.');
// }


//EJERCICIO 60
// var nota = 10;

// if (nota >= 8) {
//     console.log('Alumna con nota excelente.');
// } else if (nota < 9 && nota >= 6) {
//     console.log('Alumna aprobada.');
// } else {
//     console.log('Alumna desaprobada, debe hacer los ejercicios de nuevo.');
// }


//EJERCICIO 61

//CON SWITCH
// var dia = prompt('¿Qué número de la semana es?');
// var nombreDia = null;

// switch (dia) {
//     case '1':
//         nombreDia = 'lunes';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;
//     case '2':
//         nombreDia = 'martes';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;
//     case '3':
//         nombreDia = 'miércoles';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;
//     case '4':
//         nombreDia = 'jueves';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;
//     case '5':
//         nombreDia = 'viernes';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;
//     case '6':
//         nombreDia = 'sábado';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;
//     case '7':
//         nombreDia = 'domingo';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;    
//     default: 
//         console.log('El número de día ingresado no es correcto.');
//         break;
// }


//CON IF ANIDADO
// var dia = prompt('¿Qué número de la semana es?');
// var nombreDia = null;

// if (dia == 1) {
//     nombreDia = 'lunes';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else if (dia == 2) {
//     nombreDia = 'martes';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else if (dia == 3) {
//     nombreDia = 'miércoles';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else if (dia == 4) {
//     nombreDia = 'jueves';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else if (dia == 5) {
//     nombreDia = 'viernes';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else if (dia == 6) {
//     nombreDia = 'sábado';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else if (dia == 7) {
//     nombreDia = 'domingo';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else {
//     console.log('El número de día ingresado no es correcto.');
// }



//EJERCICIO 62
// var numeroMes = prompt('Ingrese un número del 1 al 12');
// var nombreMes;
// var cantidadDias;

// if (numeroMes == 1) {
//     nombreMes = 'enero';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 2) {
//     nombreMes = 'febrero';
//     cantidadDias = '28/29';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 3) {
//     nombreMes = 'marzo';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// }  else if (numeroMes == 4) {
//     nombreMes = 'abril';
//     cantidadDias = '30';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 5) {
//     nombreMes = 'mayo';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// }  else if (numeroMes == 6) {
//     nombreMes = 'junio';
//     cantidadDias = '30';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 7) {
//     nombreMes = 'julio';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// }  else if (numeroMes == 8) {
//     nombreMes = 'agosto';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 9) {
//     nombreMes = 'septiembre';
//     cantidadDias = '30';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// }  else if (numeroMes == 10) {
//     nombreMes = 'octubre';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 11) {
//     nombreMes = 'noviembre';
//     cantidadDias = '30';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 11) {
//     nombreMes = 'diciembre';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else {
//     console.log('El número ingresado no es correcto. Vuelva a intentar con un valor del 1 al 12.');
// }



//EJERCICIO 64
// var nombre;

// if (nombre) {
//     console.log('Mi nombre es', nombre);
// } else {
//     console.log('Por favor ingrese su nombre');
// }


//EJERCICIO 65
// var saldo = 0;
// if (saldo > 0) {
//     console.log('El usuario tiene', saldo, 'pesos a favor');
// } else {
//     console.log('El usuario no tiene saldo a favor');
// }


//EJERCICIO 66
// var number = 0;
// while (number <= 10) {
//     console.log('Número:', number);
//     number++;
// }


//EJERCICIO 67
// var number = 100;
// while (number >= 0) {
//     console.log('Número:', number);
//     number--;
// }


//EJERCICIO 68
// var numeroPar = 0;

// while (numeroPar <= 1000) {
//     console.log('Número par:', numeroPar);
//     numeroPar += 2; // también puede ser numeroPar += 1 y le agrego el numeroPar++
// }


//EJERCICIO 69
// var a = 0;
// var b = 1;

// while (b <= 1000) {
//     console.log('A:', a, 'MÁS B:', b, 'DA COMO RESULTADO...', a+b);
//     a = a+b;
//     b++;
// }


//EJERCICIO 70
// var a = 0;
// var b = 1;
// while (b <= 1000) {
//     console.log('A:', a, 'MÁS B:', b, 'DA COMO RESULTADO...', a+b);
//     a = a+b;
//     b += 2;
// }


//EJERCICIO 71
// var multiplicador = 1;
// while (multiplicador <= 10) {
//     var resultado = 9 * multiplicador;
//     console.log('9 multiplicado por', multiplicador, 'da como resultado:', resultado);
//     multiplicador++;
// }


//EJERCICIO 72
// var star = '*';
// while (star.length <= 15) {
//     console.log(star);
//     star += '*';
// }


//EJERCICIO 73
// var contador = 15;
// var recorte = '';
// var star = '***************';

// while (contador > 0) {
//     recorte = star.slice(0, contador);
//     console.log(recorte);
//     contador--;
// }


//EJERCICIO 74
// var star = '*';
// while (star.length <= 15) {
//     console.log(star);
//     star += '**';
// }


//EJERCICIO 75
// var a = 0;
// var b = 1;
// // var c = a+b;

// while (a < 10) {
//     a + b;
//     a = b;
//     console.log(a+b);
//     b += 1;
// }


































//------------------------ pausa ------------------------

//EJERCICIO 69
// a = a + b
// b++
// condicion es b <= 1000

//EJERCICIO 70
// a = a+b
// b = b + 2 (o b+=2 it's the same)

//EJERCICIO 71
// var multiplicador = 1;
// console.log(9*multiplicador);
// multiplicador++

//EJERCICIO 72
// var a = '*';

// while (a.length < 15) {
//     console.log(a);
//     a += '*'
// }

//EJERCICIO 73
// var contador = 5;
// var acumulado = '';
// var estrella = '*****';

// while (contador>0) {
//     acumulado = estrella.slice(0, contador);
//     console.log(acumulado);
//     contador--;
// }

// var numero = 5;
// var numeroDos = 5;
// var f = '*';

// while (numeroDos >= 0) {

//     while (numero >= 0) {
//         f = f + '*';
//         numero--;
//     }
//     console.log(f);
    
//     numero = numeroDos;
//     numero--;
// }


// var a = '';
// var base = 5;
// var resta = 5;

// while (base > 0) {
//     while (resta > 0) {
//         a = a + '*';
//     resta--;
//     }
//     console.log(a);
//     resta = base - 1;
//     a = '';
//     base--;
// }










