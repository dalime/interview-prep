class Stack {
    Node top;

    class Node {
        int data;
        Node next;

        public Node(int d) {
            this.data = d;
            this.next = null;
        }
    }

    public Stack() {
        top = null;
    }

    public void push(int x) {
        Node temp = new Node(x);
        temp.next = top;
        top = temp;
    }

    public void pop() {
        if (top == null) {
            System.out.println("Stack is already empty.");
            return;
        }
        Node temp = top.next;
        top = temp;
        returnTop();
    }

    public int returnTop() {
        if (top == null) {
            System.out.println("Stack is empty.");
        }
        return top.data;
    }

    public boolean isEmpty() {
        if (top == null) {
            return true;
        }
        return false;
    }

    public void printStack() {
        Node temp = top;
        System.out.print("The stack is: ");
        while (temp != null) {
            System.out.print("[" + temp.data + "] ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Stack myStack = new Stack();

        System.out.println("Empty? " + myStack.isEmpty());
        System.out.println("Top? " + myStack.returnTop());
        myStack.pop();
        myStack.push(3);
        myStack.push(5);
        myStack.push(7);
        myStack.push(9);
        myStack.printStack();
        myStack.pop();
        myStack.printStack();
        System.out.println("Top? " + myStack.returnTop());
        System.out.println("Empty? " + myStack.isEmpty());
    }
}