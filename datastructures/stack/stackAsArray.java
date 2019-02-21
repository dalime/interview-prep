class Stack {
    int top = -1;
    int maxNum = 100;
    int[] arrStack;

    public Stack() {
        arrStack = new int[maxNum];
    }

    public void push(int x) {
        if (top == (maxNum - 1)) {
            int[] temp = new int[maxNum * 2];
            for (int i = 0; i < arrStack.length; i++) {
                temp[i] = arrStack[i];
            }
            arrStack = temp;
        }
        top = top + 1;
        arrStack[top] = x;
    }

    public void pop() {
        if (top == -1) {
            System.out.println("Stack is already empty.");
            return;
        }
        top = top - 1;
        top();
    }

    public int top() {
        if (top == -1) {
            System.out.println("Stack is empty.");
            return 0;
        }
        return arrStack[top];
    } 

    public boolean isEmpty() {
        if (top == -1) {
            return true;
        } else {
            return false;
        }
    }

    public void printStack() {
        System.out.print("The stack is: ");
        for (int i = 0; i <= top; i++) {
            System.out.print("[" + arrStack[i] + "] ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Stack myStack = new Stack();
        System.out.println("Empty? " + myStack.isEmpty());
        myStack.pop();
        myStack.top();
        myStack.push(1);
        myStack.push(3);
        myStack.push(5);
        myStack.push(7);
        myStack.printStack();
        myStack.pop();
        myStack.printStack();
    }
}