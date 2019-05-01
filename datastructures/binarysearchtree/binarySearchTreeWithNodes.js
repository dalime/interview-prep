class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTreeWithNodes {
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
    } else if (root.data == x) {
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
      return root;
    } else {
      return this.findMin(root.left);
    }
  }

  delete(root, x) {
    if (root == null) return root;
    if (x < root.data) {
      root.left = this.delete(root.left, x);
    } else if (x > root.data) {
      root.right = this.delete(root.right, x);
    } else {
      if (!root.left && !root.right) {
        root = null;
      } else if (!root.left) {
        root = root.right;
      } else if (!root.right) {
        root = root.left;
      } else {
        var temp = this.findMin(root.right);
        root.data = temp.data;
        root.right = this.delete(root.right, temp.data);
      }
    }
    return root;
  }
}

function preOrder(root) {
  if (root == null) return;
  console.log('[' + root.data + '] ');
  if (root.left) preOrder(root.left);
  if (root.right) preOrder(root.right);
}

console.log('Starting job...');
var myTree = new BinarySearchTreeWithNodes();
var root = null;
root = myTree.insert(root, 2);
root = myTree.insert(root, 8);
root = myTree.insert(root, 10);
root = myTree.insert(root, 4);
root = myTree.insert(root, 6);
myTree.root = root;
console.log('Search for 2: ' + myTree.search(myTree.root, 2));
console.log('Search for 11: ' + myTree.search(myTree.root, 11));
console.log('Search for 4: ' + myTree.search(myTree.root, 4));
console.log('Search for 8: ' + myTree.search(myTree.root, 8));
myTree.delete(myTree.root, 6);
preOrder(myTree.root);

module.exports = BinarySearchTreeWithNodes;