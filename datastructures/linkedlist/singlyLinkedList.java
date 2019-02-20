class SinglyLinkedList {
    Node head;

    static class Node {
        int data;
        Node next;

        Node(int d) { data = d; next = null; }

        public void setNext(Node val) {
            this.next = val;
        }
    }

    public void printList() {
        Node temp = head;
        System.out.print("The list is: ");
        while (temp != null) {
            System.out.print(" [" + temp.data + "] ");
            temp = temp.next;
        }
        System.out.println();
    }

    public void insertAtBeg(int x) {
        Node temp = new Node(x);
        temp.next = head;
        head = temp;
    }

    public void insertAtN(int x, int n) {
        Node temp1 = new Node(x);
        Node temp2 = head;
        for (int i = 0; i < (n - 2); i++) {
            temp2 = temp2.next;
        }
        temp1.next = temp2.next;
        temp2.next = temp1;
    }

    public void deleteAtN(int n) {
        Node temp1 = head;
        if (n == 1) {
            head = temp1.next;
        }
        for (int i = 0; i < n - 2; i++) {
            temp1 = temp1.next;
        }
        Node temp2 = temp1.next;
        temp1.next = temp2.next;
    }

    public void reverseIterative() {
        Node prev = null;
        Node current = head;
        Node next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;
    }

    public void printRecursive(Node node) {
        if (node == null) {
            System.out.println();
            return;
        }
        System.out.print("[" + node.data + "] ");
        printRecursive(node.next);
    }

    public void reversePrintRecursive(Node node) {
        if (node == null) {
            return;
        }
        reversePrintRecursive(node.next);
        System.out.print("[" + node.data + "] ");
    }

    public void reverseRecursive(Node p) {
        if (p.next == null) {
            head = p;
            return;
        }
        reverseRecursive(p.next);
        Node q = p.next;
        q.next = p;
        p.next = null;
    }

    public static void main(String[] args) {
        SinglyLinkedList myList = new SinglyLinkedList();
        Node first = new Node(1);
        Node second = new Node(2);
        Node third = new Node(3);

        first.next = second;
        second.next = third;
        myList.head = first;

        myList.insertAtBeg(4);
        myList.insertAtN(5, 3);

        myList.printList();

        myList.deleteAtN(1);

        myList.printList();
        myList.reverseIterative();
        myList.printList();

        System.out.print("Recursive print: ");
        myList.printRecursive(myList.head);
        System.out.print("Recursive reverse print: ");
        myList.reversePrintRecursive(myList.head);
        System.out.println();

        myList.reverseRecursive(myList.head);
        myList.printList();
    }
}