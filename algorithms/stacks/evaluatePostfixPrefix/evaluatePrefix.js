class PrefixStack {
  constructor() {
    this.arrStack = [];
    this.top = -1;

    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    this.returnTop = this.returnTop.bind(this);
    this.printStack = this.printStack.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  push(x) {
    this.top++;
    this.arrStack[this.top] = x;
  }

  pop() {
    if (this.top == -1) {
      return console.log('Stack is empty.');
    }
    var tempTop = this.returnTop();
    this.top--;
    return tempTop;
  }

  returnTop() {
    if (this.top == -1) {
      return console.log('Stack is empty.');
    }
    return this.arrStack[this.top];
  }

  printStack() {
    var returnString = "The stack is: ";
    for (var i = 0; i <= this.top; i++) {
      returnString += "[" + this.arrStack[i] + "] ";
    }
    returnString += ".";
    console.log(returnString);
  }

  isEmpty() {
    if (this.top == -1) {
      return true;
    }
    return false;
  }
}

console.log('Starting job...');
var expression = "- 9 + * 4 5 * 3 2";
var exp = expression.split(/ /ig);
var myStack = new PrefixStack();
for (var i = exp.length - 1; i >= 0; i--) {
  if (exp[i] == '^' || exp[i] == '*' || exp[i] == '/' || exp[i] == '+' || exp[i] == '-') {
    var op2 = parseInt(myStack.pop());
    var op1 = parseInt(myStack.pop());
    var res = 0;
    if (exp[i] == '^') {
      res = op1**op2;
    }
    if (exp[i] == '*') {
      res = op1 * op2;
    }
    if (exp[i] == '/') {
      res = op1 / op2;
    }
    if (exp[i] == '+') {
      res = op1 + op2;
    }
    if (exp[i] == '-') {
      res = op1 - op2;
    }
    myStack.push(res.toString());
  } else {
    myStack.push(exp[i]);
  }
}
console.log("The result is: " + myStack.returnTop());