let arrayNames = ["grace", "ada", "margaret", "eniac", "joan"];

const longer = (arr) => {
    let name = arr[0];
    if (arr) {
        for (i = 1; i < arr.length; i++) {
            if (name.length < arr[i].length) {
                name = arr[i];
            }
        }
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
}

//console.log(longer(arrayNames));

const sortString = (arr) => {
    if (arr < 1) {
        return []
    }

    let sortLeft = [];
    let sortRight = [];
    let pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].charAt() < pivot.charAt()) {
            sortLeft.push(arr[i]);
            console.log(arr[i])
        }
        else {
            sortRight.push(arr[i])
        }
    }
    return [].concat(sortString(sortLeft), pivot, sortString(sortRight));
}
console.log(sortString(arrayNames))

/* ○ Dado el siguiente arreglo de nombres:
■ arrayNames = [“grace”, ”ada”, ”margaret”, “eniac”, ”joan”]
○ Desarrollar el código para cada uno de los siguientes casos:
■ Obtener el nombre más largo y escribirlo colocando en mayúscula la
primera letra
■ Ordenar el arreglo alfabéticamente en forma ascendente (a-z) y
mostrar el resultado en un listado.

○ Importante: no puedes usar los métodos nativos como `sort()`, `map()`,
`filter()` o `each()`. */