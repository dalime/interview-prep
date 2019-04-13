class ReverseStack {
    int top = -1;
    int maxNum = 100;
    int[] arrStack;

    public ReverseStack() {
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
        returnTop();
    }

    public int returnTop() {
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
        int[] myArray = new int[] {1, 2, 3, 4, 5};
        ReverseStack myStack = new ReverseStack();

        System.out.print("The Array is: ");
        for (int i = 0; i < myArray.length; i++) {
            System.out.print("[" + myArray[i] + "] ");
        }
        System.out.println();
        
        for (int i = 0; i < myArray.length; i++) {
            myStack.push(myArray[i]);
        }

        for (int i = 0; i < myArray.length; i++) {
            myArray[i] = myStack.returnTop();
            myStack.pop();
        }

        System.out.print("The Array is: ");
        for (int i = 0; i < myArray.length; i++) {
            System.out.print("[" + myArray[i] + "] ");
        }
        System.out.println();
    }
}