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
        this.top++;
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

var myStack = new Stack();
console.log('Is empty? ' + myStack.isEmpty());
console.log('Top? ' + myStack.returnTop());
myStack.pop();
myStack.push(3);
myStack.push(5);
myStack.push(7);
myStack.push(9);
console.log(myStack.printStack());
myStack.pop();
console.log(myStack.printStack());
console.log('Top? ' + myStack.returnTop());
console.log('Is empty? ' + myStack.isEmpty());

console.log('Job ended.');