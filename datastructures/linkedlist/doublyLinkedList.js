class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.printString = "";
        this.reversePrintString = "";

        this.insertAtHead = this.insertAtHead.bind(this);
        this.printList = this.printList.bind(this);
        this.reversePrint = this.reversePrint.bind(this);
    }

    insertAtHead(d) {
        var newNode = new Node(d);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }

    printList() {
        var temp = this.head;
        this.printString = "Printing list: ";
        while (temp) {
            this.printString += ("[" + temp.data + "] ");
            temp = temp.next;
        }
        this.printString += ".";
        console.log(this.printString);
    }

    reversePrint() {
        var temp = this.head;
        if (!temp) return;

        while (temp.next) {
            temp = temp.next;
        }

        this.reversePrintString = "Reverse printing: ";
        while (temp) {
            this.reversePrintString += ("[" + temp.data + "] ");
            temp = temp.prev;
        }
        this.reversePrintString += ".";
        console.log(this.reversePrintString);
    }
}

console.log('Starting job...');

var myList = new DoublyLinkedList();
myList.insertAtHead(6);
myList.insertAtHead(4);
myList.insertAtHead(2);

myList.printList();
myList.reversePrint();

console.log('Job finished.');