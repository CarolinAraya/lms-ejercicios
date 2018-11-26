const factorial = (n) => {
    var r = n <= 1 ? 1 : n * factorial(n - 1);
    console.log(r);
    return r;
}

factorial(5);