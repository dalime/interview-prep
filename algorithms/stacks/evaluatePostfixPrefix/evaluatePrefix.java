// INFIX
// 2 + 3

// PREFIX
// + 2 3

// POSTFIX
// 2 3 +

class PrefixStack {
  String[] arrStack;
  int maxNum = 100;
  int top = -1;

  public PrefixStack() {
    this.arrStack = new String[this.maxNum];
  }

  public void push(String x) {
    if (this.top == this.maxNum - 1) {
      String[] temp = new String[this.maxNum * 2];
      this.maxNum = this.maxNum * 2;
      for (int i = 0; i < this.arrStack.length; i++) {
        temp[i] = this.arrStack[i];
      }
      this.arrStack = temp;
    }
    this.top = this.top + 1;
    this.arrStack[this.top] = x;
  }

  public String pop() {
    String tempTop = returnTop();
    if (this.top > -1) {
      this.top--;
    }
    return tempTop;
  }

  public String returnTop() {
    if (this.top == -1) {
      System.out.println("The stack is empty.");
      return "The stack is empty.";
    }
    return this.arrStack[this.top];
  }

  public void printStack() {
    if (this.top == -1) {
      System.out.println("The stack is empty.");
    } else {
      System.out.print("The stack is: ");
      for (int i = 0; i <= this.top; i++) {
        System.out.print("[" + this.arrStack[i] + "] ");
      }
      System.out.print(".");
      System.out.println();
    }
  }

  public boolean isEmpty() {
    if (this.top == -1) {
      return true;
    }
    return false;
  }

  static public void main(String[] args) {
    String[] exp = new String[]{"-","9","+","*","4","5","*","3","2"};

    PrefixStack myStack = new PrefixStack();
    for (int i = exp.length - 1; i >= 0; i--) {
      if (exp[i] == "^" || exp[i] == "*" || exp[i] == "/" || exp[i] == "+" || exp[i] == "-") {
        int op2 = Integer.parseInt(myStack.pop());
        int op1 = Integer.parseInt(myStack.pop());
        int res = 0;
        if (exp[i] == "^") {
          res = (int) Math.pow(op1, op2);
        }
        if (exp[i] == "*") {
          res = op1 * op2;
        }
        if (exp[i] == "/") {
          res = op1 / op2;
        }
        if (exp[i] == "+") {
          res = op1 + op2;
        }
        if (exp[i] == "-") {
          res = op1 - op2;
        }
        String result = Integer.toString(res);
        myStack.push(result);
      } else {
        myStack.push(exp[i]);
      }
    }
    System.out.println("The result is: " + myStack.returnTop());
  }
}