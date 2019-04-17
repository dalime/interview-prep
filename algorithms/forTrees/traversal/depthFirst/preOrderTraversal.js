class Node {
  constructor(x) {
    this.data = x;
    this.left = null;
    this.right = null;
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

function preOrder(root) {
  if (root == null) return;
  console.log('[' + root.data + '] ');
  if (root.left) preOrder(root.left);
  if (root.right) preOrder(root.right);
}

console.log('Starting job...');
var myTree = new BinaryTree();
var root = myTree.root;
root = myTree.insert(root, 8);
root = myTree.insert(root, 6);
root = myTree.insert(root, 10);
root = myTree.insert(root, 2);
root = myTree.insert(root, 14);
root = myTree.insert(root, 4);
root = myTree.insert(root, 12);
myTree.root = root;
preOrder(myTree.root);