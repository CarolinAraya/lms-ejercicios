const contar = (hastaNumero) => {
    for ( let i = hastaNumero; i >= 1; i--) {
        console.log(i);
    }
}

//contar(9);

const contarRecursivo = (n) => {
    if ( n > 0) {
        console.log(n);
        contarRecursivo(n-1);
    }
}

contarRecursivo(9);