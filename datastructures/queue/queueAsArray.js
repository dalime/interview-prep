class QueueAsArray {
  constructor() {
    this.array = [];
    this.front = -1;
    this.rear = -1;

    this.enqueue = this.enqueue.bind(this);
    this.dequeue = this.dequeue.bind(this);
    this.returnFront = this.returnFront.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.isFull = this.isFull.bind(this);
  }

  enqueue(x) {
    if (this.isFull()) {
      return console.log('The key is full. Cannot enqueue.');
    } else if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear++;
    }
    this.array[this.rear] = x;
  }

  dequeue() {
    var temp;
    if (this.isEmpty()) {
      return console.log('Cannot dequeue. The queue is empty.');
    } else if (this.front == this.rear) {
      temp = this.front;
      this.front = -1;
      this.rear = -1;
    } else {
      temp = this.front;
      this.front++;
    }
    return this.array[temp];
  }

  returnFront() {
    if (this.front == -1) {
      return console.log('Cannot return front. Queue is empty.');
    }
    return this.array[this.front];
  }

  isEmpty() {
    return this.front == -1 && this.rear == -1 ? true : false;
  }

  isFull() {
    return this.rear + 1 == this.front ? true : false;
  }
}

console.log('Starting job...');
var myQueue = new QueueAsArray();
console.log('Empty: ' + myQueue.isEmpty());
console.log('Full: ' + myQueue.isFull());
console.log('Front: ' + myQueue.returnFront());
myQueue.dequeue();
myQueue.enqueue(2);
myQueue.enqueue(4);
myQueue.enqueue(6);
myQueue.enqueue(8);
console.log('Front: ' + myQueue.returnFront());
console.log('Dequeue: ' + myQueue.dequeue());
console.log('Front: ' + myQueue.returnFront());
console.log('Dequeue: ' + myQueue.dequeue());
console.log('Front: ' + myQueue.returnFront());