//THESE IS A PROGRAMME THAT CALCULATES THE BASE OF ANY NUMBER TO BASE TWO, AND NINE.



//A STACK PROGRAM TO CONVERT A NUMBER TO BASE 2 OR 9

//function to define the stack
function mulBase(num, base) {

    //array to hold data in the form of stack
    var stackStore = [];

    do {
        //method to add the modulo of the of the number to the stackStore
        stackStore.push(num % base);

        //dividing the number of times the base goes into a given number and finding the whole of it.
        num = Math.floor(num / base);

    } while (num > 0)

    //variable to hold converted numbers
    let converted = '';

    while (stackStore.length > 0) {

        //inverting the result in the stackStore
        converted += stackStore.pop();
    }

    //returning all the pop item from the stackStore that has been stored to display.
    return converted;

}

//sample output input:
let num = 100;
let base = 2;
let conversionResult = mulBase(num, base);

//sample output:
console.log(`${num} to base ${base} is ${conversionResult}`);