
var number = 9;

var array = [3, 15, 4, 6, 2, 9, 12, 34];

function findPairForSum(numbers, number) {

    var result = [];

    for (i = 0; i < numbers.length - 1; i++) {

        var firstNumber = numbers[i];

        for (j = i + 1; j < numbers.length; j++) {

            var secondNumber = numbers[j];

            var sum = firstNumber + secondNumber;

            if (sum == number) {
                sumandos.push(firstNumber, secondNumber)
            }
        }

    }
    return result;
}

findPairForSum(array, number)
