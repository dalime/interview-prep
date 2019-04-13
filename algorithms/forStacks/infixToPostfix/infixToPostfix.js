class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;

    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    this.returnTop = this.returnTop.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.printStack = this.printStack.bind(this);
  }

  push(x) {
    this.top++;
    this.stack[this.top] = x;
  }

  pop() {
    if (this.top == -1) return console.log('The stack is already empty.');
    this.top--;
  }

  returnTop() {
    if (this.top == -1) return console.log('The stack is empty.');
    return this.stack[this.top];
  }

  isEmpty() {
    if (this.top == -1) return true;
    return false;
  }

  printStack() {
    if (this.top == -1) return console.log('The stack is empty.');
    var returnString = 'The stack is: ';
    for (var i = 0; i <= this.top; i++) {
      returnString += '[' + this.stack[i] + '] ';
    }
    returnString += '.';
    console.log(returnString);
  }
}

console.log('Starting job...');

var matrix = {
  '(': 3,
  ')': 3,
  '*': 2,
  '/': 2,
  '+': 1,
  '-': 1
};

var expression = 'A+B+C-D*E';
var exp = expression.split('');
var result = '';
var myStack = new Stack();

for (var i = 0; i < exp.length; i++) {
  if (exp[i] != '(' && exp[i] != ')' && exp[i] != '*' && exp[i] != '/' && exp[i] != '+' && exp[i] != '-') {
    result += exp[i];
  } else {
    if (exp[i] == '(') {
      myStack.push(exp[i]);
    } else if (exp[i] == ')') {
      while (myStack.returnTop() != '(') {
        var temp = myStack.returnTop();
        myStack.pop();
        result += temp;
      }
      myStack.pop();
    } else {
      while (!myStack.isEmpty() && myStack.returnTop() != '(' && !(matrix[myStack.returnTop()] > matrix[exp[i]])) {
        result += myStack.returnTop();
        myStack.pop();
      }
      myStack.push(exp[i]);
    }
  }
}
while (!myStack.isEmpty()) {
  result += myStack.returnTop();
  myStack.pop();
}
console.log(result);