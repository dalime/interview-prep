class CharStack {
  constructor() {
    this.top = -1;
    this.arrStack = [];

    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    this.printTop = this.printTop.bind(this);
    this.printStack = this.printStack.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  push(x) {
    this.arrStack.push(x);
    this.top++;
  }

  pop() {
    this.arrStack.pop();
    this.top--;
  }

  printTop() {
    console.log('Top char: ', this.arrStack[this.top]);
  }

  printStack() {
    var printString = "The stack is: ";
    for (var i = 0; i < this.arrStack.length; i++) {
      printString += "[" + this.arrStack[i] + "] ";
    }
    console.log(printString);
  }

  isEmpty() {
    return this.top == -1 ? true : false;
  }
}

function checkBalance(string) {
  var myStack = new CharStack();
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
      myStack.push(string[i]);
    } else if (string[i] === ')' || string[i] === ']' || string[i] === '}') {
      if (myStack.isEmpty()) {
        return false;
      } else if (string[i] === ')' && myStack.arrStack[myStack.top] != '(') {
        return false;
      } else if (string[i] === ']' && myStack.arrStack[myStack.top] != '[') { 
        return false;
      } else if (string[i] === '}' && myStack.arrStack[myStack.top] != '{') {
        return false;
      } else {
        myStack.pop();
      }
    }
  }
  if (myStack.isEmpty()) {
    return true;
  }
  return false;
}

var check = "(asdf[jk;]234);lkj";
console.log("Is " + check + " balanced? " + checkBalance(check));
