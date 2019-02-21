class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;

        this.push = this.push.bind(this);
        this.pop = this.pop.bind(this);
        this.returnTop = this.returnTop.bind(this);
        this.isEmpty = this.isEmpty.bind(this);
        this.printStack = this.printStack.bind(this);
    }

    push(x) {
        var newNode = new Node(x);
        if (!this.top) {
            this.top = newNode;
            return;
        }
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (!this.top) {
            return console.log('The stack is already empty.');
        }
        var temp = this.top;
        this.top = temp.next;
        this.returnTop();
    }

    returnTop() {
        if (!this.top) {
            console.log('The stack is empty.');
        }
        return this.top.data;
    }

    isEmpty() {
        return (!this.top) ? true : false;
    }

    printStack() {
        var returnString = "The stack is: ";
        var temp = this.top;
        while (temp != null) {
            returnString += ("[" + temp.data + "] ");
            temp = temp.next;
        }
        returnString += ".";
        console.log(returnString);
    }
}

console.log('Job starting...');

var myStack = new Stack();
console.log("Empty? " + myStack.isEmpty());
console.log("Empty? " + myStack.isEmpty());
console.log("Pop? " + myStack.pop());
myStack.push(3);
myStack.push(5);
myStack.push(7);
myStack.push(9);
myStack.printStack();
myStack.pop();
myStack.printStack();
console.log("Top? " + myStack.returnTop());
console.log("Empty? " + myStack.isEmpty());

console.log('Job ended.');