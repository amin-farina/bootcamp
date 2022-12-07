/* 
Que es un hoisting?
	HOISTING es la posibilidad de poder escribir una funcion y llamarla desde cualquier parte del codigo, esto quiere decir, que podemos llamar a la funcion antes de que la misma este definida. Solo se aplica para el uso de declaraciones, no de la inicializacion de los mismos, esto quiere decir que si defino una variable y la inicializo, al llamarla antes de su inicializacion lo unico que obtendremos es el objeto (undefined) y no su valor de inicio.

---------------------------------
Que es un callback?
	Callback es el paso como parametro una funcion, la misma se ejecutara una vez requerida dentro de la funcion, cabe mencionar que la misma puede ser "renombrada" sin necesidad de que la misma sea igual

---------------------------------
De un ejemplo de callback
	function suma(a, b){
	return a+b;
	}
	function multiplicacion (resultadoSuma){
		const numero1 = parseInt(prompt("Ingresa el PRIMER numero a multiplicar"));
		const numero2 = parseInt(prompt("Ingresa el SEGUNDO numero a multiplicar"));
		let resultado=0;
		for(let i=numero1; i>0; i--){
		resultado = resultadoSuma(resultado, numero2); //--> aca esperamos la funcion que resulva la suma entre el resultado parcial y el numero 2, el mismo se ejecutara 'numero1' veces
		}
	console.log(resultado)
	}

	multiplicacion(suma); // --> Aca pasamos como parametro otra funcion o bien llamado callback.

---------------------------------
Diferencia entre un funcion literal y una funcion arrow
	Las principales diferencias de la funcion arrow sobre la funcion literal es:
		- No tiene enlaces propios this, esto quiere decir que la funcion arrow crea un nuevo entorno o contexto, por ende queda "aislada" del codigo main.
		- No tiene argumentos o palabras claves, esto quiere decir que no tiene ningun nombre, solo es llamada cuando alguien ejecuta la misma, no puede ser referenciada desde otra parte.
		- La funcion arrow no se puede utilizar como constructor, debido a que el mismo construye un ambito nuevo aislado del resto.

---------------------------------
Que es un this en javascript?
	THIS es la representancion del objeto mismo, esto quiere decir que si necesitamos buscar una propiedad dentro de un objeto, en vez de hacer referencia a si mismo por su nombre, utilizamos this. El valor this debe ser siempre un objeto, de no tenerlo el mismos toma un objeto global como 'window'. El mismo funciona tomando el objeto del miembro mas inmediato, esto quiere decir que si el this esta definido en una funcion de un atributo el mismo puede tomar como objeto al objeto padre del atributo. El siguiente ejemplo lo aclara un poco mas.
	var objetoPadre = {
		atributo1: "un string",
		atributo2: function(){
			return this.atributo1 
		}
}
        console.log(objetoPadre.atributo2()) // ---> 'un string'
        console.log(this.atributo2()) // ---> ERROR 

---------------------------------
Que es un scope?
	Scope es el contexto o ambito en el que una variable puede ser llamada o referenciada, esto apunta mas al alcance que tiene una variable. Por ejemplo si una variable se crea dentro de una funcion, la misma solo puede ser referenciada dentro de la misma, no se puede llamar fuera de ella, en cambio una variable creada fuera de una funcion puede ser referenciada dentro de la misma.

---------------------------------
Que es un closure?
	Un closure es la posibilidad de crear un ambito nuevo, con variables locales que unicamente van a poder ser modificadas mediantes las funciones internas, si estas existen, pero unicamente vamos a poder llamarlas desde funciones externas. Esto se genera gracias al scope, ya que las variables locales solo son alcanzadas unicamente dentro del ambito creado.

	function global(){
		let string = "Un string";
		function interna(){
			string = "Cambio el string";
		}
		return interna();
	}
	global();






	function multiplicacion (resultadoSuma){
	const numero1 = parseInt(prompt("Ingresa el PRIMER numero a multiplicar"));
    const numero2 = parseInt(prompt("Ingresa el SEGUNDO numero a multiplicar"));
    let resultado=0;
	for(let i=numero1; i>0; i--){
      resultado = resultadoSuma(resultado, numero2);
    }
  console.log(resultado)
}

function suma(a, b){
  return a+b;
}

multiplicacion(suma);

function iniciar() {
  var nombre = "Mozilla";  // La variable nombre es una variable local creada por iniciar.
  function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
    alert(nombre);  // Usa una variable declarada en la función externa.
  }
  mostrarNombre();
}
iniciar();

*/
// let a=2;
// let b=3;
// function suma(a,b){
// 	return a+b


// } 

function multiplicacion (resultadoSuma){
	const name = prompt("Ingresa tu nombre")
	console.log(name + resultadoSuma)
}

multiplicacion(2);
