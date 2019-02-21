class Stack {
    constructor() {
        this.top = -1;
        this.maxNum = 100;
        this.arrStack = new Array(this.maxNum);

        this.push = this.push.bind(this);
        this.pop = this.pop.bind(this);
        this.returnTop = this.returnTop.bind(this);
        this.isEmpty = this.isEmpty.bind(this);
        this.printStack = this.printStack.bind(this);
    }

    push(x) {
        if (this.top == (this.maxNum - 1)) {
            var temp = new Array(this.maxNum * 2);
            for (var i = 0; i < this.arrStack.length; i++) {
                temp[i] = this.arrStack[i];
            }
            this.arrStack = temp;
        }
        if (this.top == -1) {
            this.top += 2;
        } else {
            this.top += 1;
        }
        this.arrStack[this.top] = x;
    }

    pop() {
        if (this.top == -1) {
            return console.log("The stack is already empty.");
        }
        this.top--;
        this.returnTop();
    }

    returnTop() {
        if (this.top == -1) {
            console.log("The stack is empty.");
        }
        return this.top;
    }

    isEmpty() {
        return (this.top == -1) ?  true : false;
    }

    printStack() {
        if (this.top == - 1) return console.log("Sorry, the stack is empty.");

        var returnString = "The stack is: ";
        for (var i = 0; i <= this.top; i++) {
            returnString += ("[" + this.arrStack[i] + "] ");
        }
        returnString += ".";
        return returnString;
    }
}

console.log('Starting job...');

var myArray = [1, 2, 3, 4, 5];
var myStack = new Stack();

console.log('The array is: ', myArray);

for (var i = 0; i < myArray.length; i++) {
    myStack.push(myArray[i]);
}

console.log(myStack.printStack());
console.log(myStack.returnTop());

for (var i = 0; i < myArray.length; i++) {
    myArray[i] = myStack.returnTop();
    myStack.pop();
}

console.log('The array is: ', myArray);

console.log('Job ended.');