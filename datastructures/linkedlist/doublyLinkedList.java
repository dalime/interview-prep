class DoublyLinkedList {
    Node head;

    class Node {
        int data;
        Node next;
        Node prev;

        Node(int d) { data = d; next = null; prev = null; };
    }

    public void insertAtHead(int d) {
        Node newNode = new Node(d);
        if (head == null) {
            head = newNode;
            return;
        }
        head.prev = newNode;
        newNode.next = head;
        head = newNode;
    }

    public void print() {
        Node temp = head;
        System.out.print("The list is: ");
        while (temp != null) {
            System.out.print("[" + temp.data + "] ");
            temp = temp.next;
        }
        System.out.println();
    }

    public void reversePrint() {
        Node temp = head;
        if (temp == null) {
            return;
        }

        while (temp.next != null) {
            temp = temp.next;
        }

        System.out.print("Reverse printing: ");
        while (temp != null) {
            System.out.print("[" + temp.data + "] ");
            temp = temp.prev;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        DoublyLinkedList myList = new DoublyLinkedList();
        
        myList.insertAtHead(6);
        myList.insertAtHead(4);
        myList.insertAtHead(2);

        myList.print();
        myList.reversePrint();
    }
}