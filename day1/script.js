const { readFileSync } = require('fs');

const inputAsArray = syncReadFile('./inputData.txt');

const amoutOfCaloriesCarried = getMaxAmoutCarried(inputAsArray);

console.log(amoutOfCaloriesCarried);

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    return arr;
}

function getMaxAmoutCarried(calories) {
    let mostCaloriesCarried = 0;
    let caloriesCounter = 0;

    calories.forEach(calory => {
        if (!calory) {
            if (caloriesCounter > mostCaloriesCarried) {
                mostCaloriesCarried = caloriesCounter;
            }
            caloriesCounter = 0;
        } else {
            caloriesCounter += Number(calory);
        }
    });

    return mostCaloriesCarried;
} 