class QueueAsLinkedList {
  Node front;
  Node rear;

  class Node {
    int data;
    Node next;

    public Node(int x) {
      this.data = x;
      this.next = null;
    }

    public void setNext(Node next) {
      this.next = next;
    }
  }

  public QueueAsLinkedList() {
    this.front = null;
    this.rear = null;
  }

  public void enqueue(int x) {
    Node temp = new Node(x);
    if (this.front == null && this.rear == null) {
      this.front = temp;
      this.rear = temp;
    } else {
      this.rear.setNext(temp);
      this.rear = temp;
    }
  }

  public int dequeue() {
    Node temp = this.front;
    if (this.front == null) {
      System.out.println("Cannot Dequeue. Queue is already empty.");
      return -1;
    } else if (this.front == this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }
    return temp.data;
  }

  public String front() {
    if (this.front == null) {
      return "Cannot return front. Queue is empty.";
    }
    return "[" + this.front.data + "]";
  }

  public boolean isEmpty() {
    if (this.front == null && this.rear == null) {
      return true;
    }
    return false;
  }

  public void printQueue() {
    if (this.front == null) {
      System.out.println("The queue is empty.");
      return;
    }
    Node temp = this.front;
    System.out.print("The queue is: ");
    while (temp != null) {
      System.out.print("[" + temp.data + "] ");
      temp = temp.next;
    }
    System.out.print(".");
    System.out.println();
  }

  public static void main(String[] args) {
    QueueAsLinkedList myQueue = new QueueAsLinkedList();
    System.out.println("Empty?: " + myQueue.isEmpty());
    myQueue.dequeue();
    myQueue.printQueue();
    myQueue.enqueue(2);
    myQueue.enqueue(4);
    myQueue.enqueue(6);
    System.out.println("Empty?: " + myQueue.isEmpty());
    myQueue.printQueue();
    myQueue.dequeue();
    myQueue.printQueue();
    System.out.println("Front: " + myQueue.front());
  }
}