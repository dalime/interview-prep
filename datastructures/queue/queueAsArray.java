class QueueAsArray {
  int[] array;
  int maxNum = 10;
  int front;
  int rear;

  public QueueAsArray() {
    this.array = new int[this.maxNum];
    this.front = -1;
    this.rear = -1;
  }

  public void enqueue(int x) {
    if (this.isFull()) {
      System.out.println("The queue is full.");
      return;
    } else if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = this.rear + 1;
    }
    this.array[this.rear] = x;
  }

  public int dequeue() {
    int temp;
    System.out.println(this.front);
    if (isEmpty()) {
      System.out.println("The queue is already empty.");
      return -1;
    } else if (this.front == this.rear) {
      temp = this.front;
      this.front = -1;
      this.rear = -1;
    } else {
      temp = this.front;
      this.front = this.front + 1;
    }
    return this.array[temp];
  }

  public int front() {
    if (this.front == -1) {
      System.out.println("Cannot return. Queue is empty.");
      return -1;
    }
    return this.array[this.front];
  }

  public boolean isFull() {
    return this.rear + 1 == this.front ? true : false;
  }

  public boolean isEmpty() {
    return this.front == -1 && this.rear == -1 ? true : false;
  }

  public static void main(String[] args) {
    QueueAsArray myQueue = new QueueAsArray();
    System.out.println("Empty: " + myQueue.isEmpty());
    System.out.println("Full: " + myQueue.isFull());
    System.out.println("Front: " + myQueue.front());
    myQueue.dequeue();
    myQueue.enqueue(2);
    myQueue.enqueue(4);
    myQueue.enqueue(6);
    myQueue.enqueue(8);
    System.out.println("Front: " + myQueue.front());
    System.out.println("Dequeue: " + myQueue.dequeue());
    System.out.println("Front: " + myQueue.front());
    System.out.println("Dequeue: " + myQueue.dequeue());
    System.out.println("Front: " + myQueue.front());
  }
}