class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;

    this.enqueue = this.enqueue.bind(this);
    this.dequeue = this.dequeue.bind(this);
    this.peekFront = this.peekFront.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.printQueue = this.printQueue.bind(this);
  }

  enqueue(x) {
    if (this.front == null && this.rear == null) {
      this.front = x;
      this.rear = x;
    } else {
      this.rear.next = x;
      this.rear = x;
    }
  }

  dequeue() {
    var temp = this.front;
    if (this.front == null) return console.log('Cannot dequeue. Queue is empty.');
    if (this.front == this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
    }
    return temp;
  }

  peekFront() {
    if (this.front == null) return console.log('No front. Queue is empty.');
    return this.front;
  }

  isEmpty() {
    return (this.front == null && this.rear == null) ? true : false;
  }

  printQueue() {
    if (this.front == null) return console.log('The queue is empty.');
    var temp = this.front;
    var returnString = 'The queue is: ';
    while (temp != null) {
      returnString += '[' + temp.data + ']';
      temp = temp.next;
    }
    returnString += '.';
    return console.log(returnString);
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.insert = this.insert.bind(this);
    this.search = this.search.bind(this);
  }

  insert(root, x) {
    if (root == null) {
      root = new Node(x);
    } else if (x <= root.data) {
      root.left = this.insert(root.left, x);
    } else {
      root.right = this.insert(root.right, x);
    }
    return root;
  }

  search(root, x) {
    if (root == null) {
      return false;
    } else if (x == root.data) {
      return true;
    } else if (x <= root.data) {
      return this.search(root.left, x);
    } else {
      return this.search(root.right, x);
    }
  }
}

function levelOrder(root) {
  if (root == null) return console.log('The tree is empty.');
  var myQueue = new Queue();
  myQueue.enqueue(root);
  var returnString = 'The tree is: ';
  while (!myQueue.isEmpty()) {
    var temp = myQueue.peekFront();
    returnString += '[' + temp.data + '] ';
    if (temp.left != null) myQueue.enqueue(temp.left);
    if (temp.right != null) myQueue.enqueue(temp.right);
    myQueue.dequeue();
  }
  returnString += '.';
  return console.log(returnString);
}

console.log('Starting job...');
var myTree = new BinaryTree();
var root = myTree.root;
root = myTree.insert(root, 2);
root = myTree.insert(root, 4);
root = myTree.insert(root, 6);
root = myTree.insert(root, 8);
root = myTree.insert(root, 10);
root = myTree.insert(root, 12);
root = myTree.insert(root, 14);
myTree.root = root;
levelOrder(myTree.root);