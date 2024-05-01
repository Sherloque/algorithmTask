function createArray(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array;
}

function removeRandomElements(array) {
    let index1 = Math.floor(Math.random() * array.length);
    let index2 = Math.floor(Math.random() * array.length);
    while (index2 === index1) {
        index2 = Math.floor(Math.random() * array.length);
    }
    array.splice(index1, 1);
    array.splice(index2 < index1 ? index2 : index2 - 1, 1);
}

function findMissingNumbers(array) {
    let n = array.length + 2;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = array.reduce((acc, curr) => acc + curr, 0);
    let missingSum = expectedSum - actualSum;

    let presentNumbers = {};
    for (let num of array) {
        presentNumbers[num] = true;
    }

    let firstMissingNumber;
    let secondMissingNumber;
    for (let i = 1; i <= missingSum; i++) {
        if (!presentNumbers[i] && !firstMissingNumber) {
            firstMissingNumber = i;
        } else if (!presentNumbers[i]) {
            secondMissingNumber = i;
            break;
        }
    }

    return [firstMissingNumber, secondMissingNumber];
}

const number = parseInt(prompt("Введите число (больше 1):"));

if (!isNaN(number) && number > 1) {
    let sequentialArray = createArray(number);
    removeRandomElements(sequentialArray);
    let missingNumbers = findMissingNumbers(sequentialArray);

    console.log(`Исходный массив от 1 до ${number}:`, sequentialArray);
    console.log("Отсутствующие числа:", missingNumbers);
} else {
    console.log("Пожалуйста, введите корректное число больше 1.");
}


/*
Вычислительная сложность решения - O(n), где n - количество элементов в массиве, сложность будет линейно изменяться вместе с размером исходного массива
*/