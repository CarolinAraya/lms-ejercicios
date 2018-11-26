var cadena = "Hola me llamo";

const countVowels = (str) => {
    var counter = 0;
    var vocales = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < str.length; i++) {
        var letra = str[i];

        for (let j = 0; j < vocales.length; j++) {
            var vocal = vocales[j];

            if (vocal === letra) {
                counter++;

            }
        }
    }
    return counter;
};

countVowels(cadena);

/*Crea una función que cuente el número de vocales de un string. 
Sigue los pasos a continuación para que completes el programa.

Implementar la función countVowels(str) que retorne el número de vocales.
Iniciar un contador en counter = 0
Iterar los caracteres de string, si el elemento actual es una vocal entonces 
incrementar el contador counter.
Retornar counter, el cual contiene el número de vocales.*/
