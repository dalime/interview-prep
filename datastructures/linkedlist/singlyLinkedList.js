class Node {
    constructor(data) {
        this.data = data;
        this.next = null;

        this.setNext = this.setNext.bind(this);
    }

    setNext(next) {
        this.next = next;
    }

    printData() {
        return this.data;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.printString = "";
        this.printReverseString = "";

        this.printList = this.printList.bind(this);
        this.insertAtBeg = this.insertAtBeg.bind(this);
        this.insertAtN = this.insertAtN.bind(this);
        this.deleteAtN = this.deleteAtN.bind(this);
        this.reverseIterative = this.reverseIterative.bind(this);
        this.printRecursive = this.printRecursive.bind(this);
        this.reversePrintRecursive = this.reversePrintRecursive.bind(this);
        this.reverseRecursive = this.reverseRecursive.bind(this);
    }

    printList() {
        var temp = this.head;
        var print = "The list is: ";
        while (temp != null) {
            print += ("[" + temp.printData() + "] ");
            temp = temp.next;
        }
        print += ".";
        console.log(print);
    }

    insertAtBeg(d) {
        // head -> [1] -> [2] -> [3] -> [4] -> null
        // head -> [d] -> [1] -> [2] -> [3] -> [4] -> null

        var temp = this.head;
        var newNode = new Node(d);
        newNode.next = temp;
        this.head = newNode;
    }

    insertAtN(d, n) {
        // head -> [1] -> [2] -> [3] -> [4] -> null
        // head -> [1] -> [2] -> [d] -> [3] -> [4] -> null

        var temp1 = new Node(d);
        var temp2 = this.head;
        for (var i = 0; i < (n - 2); i++) {
            temp2 = temp2.next;
        }
        temp1.next = temp2.next;
        temp2.next = temp1;
    }

    deleteAtN(n) {
        // head -> [] -> [n] -> [] -> [] -> null
        ////////// delete ^ ///////////////////

        var temp1 = this.head;
        if (n === 1) {
            this.head = temp1.next;
        }

        for (var i = 0; i < (n - 2); i++) {
            temp1 = temp1.next;
        }

        var temp2 = temp1.next;
        temp1.next = temp2.next;
    }

    reverseIterative() {
        // head -> [] -> [] -> [] -> [] ->  null
        // null <- [] <- [] <- [] <- [] <- head
        var prev;
        var current = this.head;
        var next;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    printRecursive(node) {
        if (!node) {
            console.log(this.printString);
            return;
        }
        this.printString += ("[" + node.data + "] ");
        this.printRecursive(node.next);
    }

    reversePrintRecursive(node) {
        if (!node) {
            return;
        }
        this.reversePrintRecursive(node.next);
        this.printReverseString += ("[" + node.data + "] ");
    }

    reverseRecursive(p) {
        // if only 1 node in list
        if (!p.next) {
            this.head = p;
            return;
        }

        this.reverseRecursive(p.next);
        // switching places
        var q = p.next;
        q.next = p;
        // gets rid of link to next for p
        p.next = null;
    }
}

console.log("Starting job...");

var myList = new LinkedList();
var first = new Node(1);
var second = new Node(2);
var third = new Node(3);

first.setNext(second);
second.setNext(third);
myList.head = first;

myList.printList();

myList.insertAtBeg(4);
myList.printList();

myList.insertAtN(5, 3);
myList.printList();

myList.deleteAtN(4);
myList.printList();

myList.printString = "The recursively printed list is: ";
myList.printRecursive(myList.head);

myList.printReverseString = "The recursively reversed printed list is: ";
myList.reversePrintRecursive(myList.head); 
console.log(myList.printReverseString);

myList.reverseIterative();
myList.printList();

console.log("Reversing recursively:");
myList.reverseRecursive(myList.head);
myList.printList();