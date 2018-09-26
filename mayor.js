var A = 5;
var B = 7;
var C = 2;

const max = (A, B, C) => {

    var mayor;

    if (A > B) {
        mayor = A;
    } else {
        mayor = B;
    };

    if (C > mayor){
        mayor = C;
    }
}

max(A, B, C);