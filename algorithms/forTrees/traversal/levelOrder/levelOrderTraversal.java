class LevelOrderBinaryTree {
  class Node {
    int data;
    Node left;
    Node right;
    Node next;

    Node(int x) {
      this.data = x;
      this.left = null;
      this.right = null;
    }
  }

  class TraversalQueue {
    Node front;
    Node rear;
  
    public TraversalQueue() {
      this.front = null;
      this.rear = null;
    }
  
    public void enqueue(Node x) {
      if (this.front == null && this.rear == null) {
        this.front = x;
        this.rear = x;
      } else {
        this.rear.next = x;
        this.rear = x;
      }
    }
  
    public Node dequeue() {
      Node temp = this.front;
      if (this.front == null) {
        System.out.println("Cannot Dequeue. Queue is already empty.");
        return null;
      } else if (this.front == this.rear) {
        this.front = null;
        this.rear = null;
      } else {
        this.front = this.front.next;
      }
      return temp;
    }
  
    public Node front() {
      if (this.front == null) {
        System.out.println("The queue is empty.");
        return null;
      }
      return this.front;
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
  }

  Node root;

  public LevelOrderBinaryTree() {
    this.root = null;
  }

  public Node insert(Node root, int x) {
    if (root == null) {
      root = new Node(x);
    } else if (x <= root.data) {
      root.left = insert(root.left, x);
    } else {
      root.right = insert(root.right, x);
    }
    return root;
  }

  public boolean search(Node root, int x) {
    if (root == null) {
      return false;
    } else if (x == root.data) {
      return true;
    } else if (x <= root.data) {
      return search(root.left, x);
    } else {
      return search(root.right, x);
    }
  }

  public void levelOrder(Node root) {
    if (root == null) {
      System.out.println("The tree is empty.");
      return;
    } 
    TraversalQueue myQueue = new TraversalQueue();
    myQueue.enqueue(root);
    System.out.print("The tree is: ");
    while (!myQueue.isEmpty()) {
      Node temp = myQueue.front();
      System.out.print("[" + temp.data + "] ");
      if (temp.left != null) myQueue.enqueue(temp.left);
      if (temp.right != null) myQueue.enqueue(temp.right);
      myQueue.dequeue();
    }
    System.out.print(".");
  }

  public static void main(String[] args) {
    LevelOrderBinaryTree myTree = new LevelOrderBinaryTree();
    Node root = myTree.root;
    root = myTree.insert(root, 2);
    root = myTree.insert(root, 4);
    root = myTree.insert(root, 6);
    root = myTree.insert(root, 8);
    myTree.root = root;
    root = myTree.insert(root, 10);
    root = myTree.insert(root, 12);
    root = myTree.insert(root, 14);
    myTree.levelOrder(myTree.root);
  }
}