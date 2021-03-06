var arrayNumbers = [-17, 24, 9, 32, 100, -80, 28, 0, -10]

const mayor = (arr) => {
    let mayor = arr[0];
    if (arr) {
        for (let i = 1; i < arr.length; i++) {
            if (mayor < arr[i]) {
                mayor = arr[i];
            }
        }
    }
    return mayor;
}

const menor = (arr) => {
    let menor = arr[0];
    if (arr) {
        for (let i = 1; i < arr.length; i++) {
            if ( menor > arr[i]) {
                menor = arr[i];
            }
        }
    }
    return menor;
}


console.log(mayor(arrayNumbers));
console.log(menor(arrayNumbers));




/* 5. Mayores y menores
○ Dado el siguiente arreglo de números:
■ arrayNumbers = [-17, 24, 9, 32, 100, -80, 28, 0, -10]
○ Desarrollar el código para cada uno de los siguientes casos:
■ Obtener el número mayor del arreglo.
■ Obtener el número menor del arreglo.
■ Obtener el segundo número mayor del arreglo.
○ Importante: no puedes usar métodos nativos como `sort()`, `map()`,
`filter()` o `each()`, ni ningún otro método nativo para la resolución de este
reto. */