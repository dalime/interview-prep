class CharStack {
  int top = -1;
  int maxNum = 100;
  char[] arrStack;

  public CharStack() {
    this.arrStack = new char[this.maxNum];
  }

  public void push(char x) {
    if (this.top == (this.maxNum - 1)) {
      char[] temp = new char[this.maxNum * 2];
      for (int i = 0; i < this.arrStack.length; i++) {
        temp[i] = this.arrStack[i];
      }
      this.arrStack = temp;
    }
    this.top = this.top + 1;
    this.arrStack[this.top] = x;
  }

  public void pop() {
    if (this.top == -1) {
      System.out.println("Stack is already empty.");
      return;
    }
    this.top = this.top - 1;
  }

  public void printTop() {
    if (this.top == -1) {
      System.out.println("Stack is empty.");
    } else {
      System.out.println("Top char: " + this.arrStack[this.top]);
    }
  }

  public boolean isEmpty() {
    if (this.top == -1) {
      return true;
    }
    return false;
  }

  public void printStack() {
    System.out.print("The stack is: ");
    for (int i = 0; i <= this.top; i++) {
      System.out.print("[" + this.arrStack[i] + "] ");
    }
    System.out.println();
  }
}

class BalancedParenthesis {
  char[] myChars;

  public BalancedParenthesis(String s) {
    this.myChars = s.toCharArray();
  }

  private boolean checkForBalance() {
    CharStack myStack = new CharStack();

    for (int i = 0; i < myChars.length; i++) {
      if (myChars[i] == '(' || myChars[i] == '[' || myChars[i] == '{') {
        myStack.push(myChars[i]);
      } else if (myChars[i] == ')' || myChars[i] == ']' || myChars[i] == '}') {
          if (myStack.isEmpty()) {
            return false;
          }
          if (myChars[i] == ')' && myStack.arrStack[myStack.top] != '(') {
            return false;
          }
          if (myChars[i] == ']' && myStack.arrStack[myStack.top] != '[') {
            return false;
          }
          if (myChars[i] == '}' && myStack.arrStack[myStack.top] != '{') {
            return false;
          }
          myStack.pop();
      } else {
        if (myStack.isEmpty()) {
          return true;
        }
      }
    }
    if (myStack.isEmpty()) {
      return true;
    }
    return false;
  }

  public static void main(String[] args) {
    String check = "[asdf(jkl;)weoi]1234";
    System.out.print("Is " + check + " balanced? ");
    BalancedParenthesis balance = new BalancedParenthesis(check);
    System.out.print(balance.checkForBalance() + ".");
  }
}