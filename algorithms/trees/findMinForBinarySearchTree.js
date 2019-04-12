class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;

    this.insert = this.insert.bind(this);
    this.search = this.search.bind(this);
    this.findMin = this.findMin.bind(this);
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

  findMin(root) {
    if (root == null) {
      return console.log('Tree is empty.');
    } else if (root.left == null) {
      return root.data;
    } else {
      return this.findMin(root.left);
    }
  }
}

console.log('Starting job...');
var myTree = new BinarySearchTree();
console.log('The min is: ' + myTree.findMin(myTree.root));
var root = myTree.root;
root = myTree.insert(root, 2);
myTree.root = root;
root = myTree.insert(root, 4);
root = myTree.insert(root, 10);
root = myTree.insert(root, 6);
root = myTree.insert(root, 8);
console.log('Search for 8: ' + myTree.search(myTree.root, 8));
console.log('Search for 11: ' + myTree.search(myTree.root, 11));
console.log('Search for 9: ' + myTree.search(myTree.root, 9));
console.log('Search for 10: ' + myTree.search(myTree.root, 10));
console.log('The min is: ' + myTree.findMin(myTree.root));
