class Node {
  constructor(x) {
    this.data = x;
    this.next = null;

    this.setNext = this.setNext.bind(this);
  }

  setNext(next) {
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;

    this.enqueue = this.enqueue.bind(this);
    this.dequeue = this.dequeue.bind(this);
    this.returnFront = this.returnFront.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.printQueue = this.printQueue.bind(this);
  }

  enqueue(x) {
    var temp = new Node(x);
    if (this.front == null && this.rear == null) {
      this.front = temp;
      this.rear = temp;
    } else {
      this.rear.setNext(temp);
      this.rear = temp;
    }
  }

  dequeue() {
    var temp = this.front;
    if (this.front == null) {
      return console.log('Cannot dequeue. Queue is already empty.');
    } else if (this.front == this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }
    return temp;
  }

  returnFront() {
    if (this.front == null) return 'Cannot return front. Queue is empty.';
    return '[' + this.front.data + ']';
  }

  isEmpty() {
    return (this.front == null && this.rear == null) ? true : false;
  }

  printQueue() {
    if (this.front == null) return console.log('The queue is empty.');
    var temp = this.front;
    var returnString = 'The queue is: ';
    while (temp != null) {
      returnString += '[' + temp.data + '] ';
      temp = temp.next;
    }
    returnString += '.';
    return console.log(returnString);
  }
}

console.log('Starting job...');
var myQueue = new Queue();
console.log('Empty?: ' + myQueue.isEmpty());
myQueue.dequeue();
myQueue.printQueue();
myQueue.enqueue(2);
myQueue.enqueue(4);
myQueue.enqueue(6);
console.log('Empty?: ' + myQueue.isEmpty());
myQueue.printQueue();
myQueue.dequeue();
myQueue.printQueue();
console.log('Front: ' + myQueue.returnFront());