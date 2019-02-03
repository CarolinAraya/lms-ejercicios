let arrayNames = ["grace", "ada", "margaret", "eniac", "joan"]; //devuelve el nombre más largo y en mayúscula la primera letra

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

const sortString = (arr) => {//Ordena el arreglo alfabéticamente en forma ascendente (a-z), (mostrar el resultado en un listado)
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
console.log(`los nombre al revés son ${sortString(arrayNames)}`)

