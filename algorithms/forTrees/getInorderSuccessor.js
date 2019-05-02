class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
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

  find(root, x) {
    if (root == null) {
      return null;
    } else if (x == root.data) {
      return root;
    } else if (x <= root.data) {
      return this.find(root.left, x);
    } else {
      return this.find(root.right, x);
    }
  }

  findMin(root) {
    if (!root) return console.log('The tree is empty.');
    if (!root.left) return root;
    return this.findMin(root.left);
  }
  
  getSuccessor(root, x) {
    var current = this.find(root, x);
    if (!current) return null;
    if (current.right) {
      return this.findMin(current.right);
    } else {
      var successor = null;
      var ancestor = root;
      while (ancestor != current) {
        if (current.data < ancestor.data) {
          successor = ancestor;
          ancestor = ancestor.left;
        } else {
          ancestor = ancestor.right;
        }
      }
      return successor;
    }
  }
}

console.log('Starting job...');
var myTree = new Tree();
var root = myTree.root;
root = myTree.insert(root, 2);
root = myTree.insert(root, 4);
root = myTree.insert(root, 20);
root = myTree.insert(root, 6);
root = myTree.insert(root, 8);
root = myTree.insert(root, 15);
root = myTree.insert(root, 10);
myTree.root = root;
var toTest = 15; // 20
var successor = myTree.getSuccessor(myTree.root, toTest);
console.log('The successor of ' + toTest + ' is: ' + (successor ? successor.data : 'None. ' + toTest + ' is the highest value in this tree.'));