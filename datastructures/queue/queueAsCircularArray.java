class QueueAsCircularArray {
  int[] array;
  int maxNum = 10;
  int front;
  int rear;

  public QueueAsCircularArray() {
    this.array = new int[maxNum];
    this.front = -1;
    this.rear = -1;
  }

  public void enqueue(int x) {
    if (this.isFull()) {
      System.out.println("Cannot enqueue. Queue is already full.");
      return;
    } else if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.maxNum;
    }
    this.array[this.rear] = x;
  }

  public int dequeue() {
    int temp;
    if (this.isEmpty()) {
      System.out.println("Cannot dequeue. Queue is empty.");
      return -1;
    } else if (this.front == this.rear) {
      temp = this.front;
      this.front = -1;
      this.rear = -1;
    } else {
      temp = this.front;
      this.front = (this.front + 1) % this.maxNum;
    }
    return this.array[temp];
  }

  public int front() {
    if (this.front == -1) {
      System.out.println("Cannot return front. Queue is empty.");
      return -1;
    }
    return this.array[this.front];
  }

  public boolean isEmpty() {
    return (this.front == -1 && this.rear == -1) ? true : false;
  }

  public boolean isFull() {
    return (((this.rear + 1) % this.maxNum) == this.front) ? true : false;
  }

  public static void main(String[] args) {
    QueueAsCircularArray myQueue = new QueueAsCircularArray();
    myQueue.dequeue();
    myQueue.front();
    System.out.println("Is Empty?: " + myQueue.isEmpty());
    System.out.println("Is Full?: " + myQueue.isFull());
    myQueue.enqueue(2);
    myQueue.enqueue(4);
    myQueue.enqueue(6);
    myQueue.enqueue(8);
    System.out.println("Dequeue: " + myQueue.dequeue());
    System.out.println("Front: " + myQueue.front());
    myQueue.enqueue(10);
    System.out.println("Dequeue: " + myQueue.dequeue());
    System.out.println("Front: " + myQueue.front());
    System.out.println("Is Empty?: " + myQueue.isEmpty());
    myQueue.enqueue(10);
    myQueue.enqueue(12);
    myQueue.enqueue(14);
    myQueue.enqueue(16);
    myQueue.enqueue(18);
    myQueue.enqueue(20);
    myQueue.enqueue(22);
    myQueue.enqueue(24);
    myQueue.enqueue(26);
    myQueue.enqueue(28);
    myQueue.enqueue(30);
    myQueue.enqueue(32);
    myQueue.enqueue(34);
  }
}