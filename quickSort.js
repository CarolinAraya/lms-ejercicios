
const quickSort = (arr) => {
    if (arr.length < 1) {
        return [];
    }
    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        };
    }
    //mayor(right);
    return [].concat(quickSort(left), pivot, quickSort(right));
}

console.log(quickSort([-17, 24, 9, 32, 100, -80, 28, 0, -10]))

/* const mayor = (arr) => {
    console.log(arr[arr.length-1])
} */
