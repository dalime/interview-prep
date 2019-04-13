import java.util.HashMap;

class InToPostStack {
  int top = -1;
  int max = 100;
  char[] stack;

  public InToPostStack() {
    this.stack = new char[this.max];
  }

  public void push(char x) {
    if (this.top == this.max -1) {
      char[] temp = new char[this.max * 2];
      for (int i = 0; i < this.stack.length; i++) {
        temp[i] = this.stack[i];
      }
      this.max = this.max * 2;
      this.stack = temp;
    }
    this.top++;
    this.stack[this.top] = x;
  }

  public void pop() {
    if (this.top == -1) {
      System.out.println("The stack is already empty.");
    } else {
      this.top--;
    }
  }

  public char returnTop() {
    if (this.top == -1) {
      System.out.println("The stack is empty.");
      return '~';
    } else {
      return this.stack[this.top];
    }
  }

  public boolean isEmpty() {
    if (this.top == -1) {
      return true;
    }
    return false;
  }

  public void printStack() {
    if (this.top == -1) {
      System.out.println("The stack is empty.");
    } else {
      System.out.print("The stack is: ");
      for (int i = 0; i <= this.top; i++) {
        System.out.print("[" + this.stack[i] + "] ");
      }
      System.out.print(".");
      System.out.println();
    }
  }
}

class InfixToPostfix {

  public static void main(String[] args) {
    HashMap<Character, Integer> matrix = new HashMap<Character, Integer>();
    matrix.put('(', 3);
    matrix.put(')', 3);
    matrix.put('*', 2);
    matrix.put('/', 2);
    matrix.put('+', 1);
    matrix.put('-', 1);

    String expression = "A+B+C-D*E";
    char[] exp = expression.toCharArray();
    InToPostStack myStack = new InToPostStack();
    String result = "";

    for (int i = 0; i < exp.length; i++) {
      if (exp[i] != '(' && exp[i] != ')' && exp[i] != '*' && exp[i] != '/' && exp[i] != '+' && exp[i] != '-') {
        result = result + exp[i];
      } else {
        if (exp[i] == '(') {
          myStack.push(exp[i]);
        } else if (exp[i] == ')') {
          while (myStack.returnTop() != '(') {
            char temp = myStack.returnTop();
            myStack.pop();
            result = result + temp;
          }
          myStack.pop();
        } else {
          while (!myStack.isEmpty() && exp[i] != '(' && !(matrix.get(myStack.returnTop()) > matrix.get(exp[i]))) {
            result = result + myStack.returnTop();
            myStack.pop();
          }
          myStack.push(exp[i]);
        }
      }
    }
    while (!myStack.isEmpty()) {
      result = result + myStack.returnTop();
      myStack.pop();
    }
    System.out.println(result);
  }
}