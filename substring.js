var word = "world";


function myFunction(n) {

    var str = "Hello world, welcome to the universe.";

    console.log(str.includes(n))
    return str.includes(n);

}

myFunction(word);

/* Escribe una función que tome un `string` y un `substring`y devuelva
verdadero si el `string` contiene el `substring`. */