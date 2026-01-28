//Stacks

//defining the stack class
function Stack() {
    //the array to store the data
    this.dataStore = [];

    //the top method to check the top item
    this.top = 0;

    //the push method to add an item
    this.push = push;

    //the pop method to remove the last item
    this.pop = pop;

    //the peek method to display the last item in the list
    this.peek = peek;

    //the clear to clear or wipe all data from the list
    this.clear = clear;

    //the length to find the length of items in the list
    this.length = length;
}

//the push function to add an item
function push(element) {
    //adding the imput item
    this.dataStore[this.top++] = element;
}

//function pop to remove the last item
function pop() {
    //removing the last item from the list
    return this.dataStore[--this.top];
}

//function to check the last item in the list
function peek() {
    //checking the last item in the list
    return this.dataStore[this.top - 1];
}

//functioin to find the length of the list
function length() {
    //checking the number of items in the list
    return this.dataStore.length;
}

//function to clear all the data from the dataStore
function clear() {
    //clearing all the data from the list
    this.top = 0;
};


//populating the class list
var add = new Stack();
add.push("Ama");
add.push("CLinton");
add.push("Asamoah");
add.push("Flex");
add.push("Mends");
add.push("Donkor");
console.log("You have ", add.length(), " items in the list")
let lastItem = add.pop()
console.log("I have removed the last item: ", lastItem);
console.log("The peek item is ", add.peek());
add.clear()

