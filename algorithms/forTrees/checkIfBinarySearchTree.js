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

function isBST(root, minVal, maxVal) {
  if (root == null) return true;
  if (root.data >= minVal && root.data <= maxVal && isBST(root.left, minVal, root.data) && isBST(root.right, root.data, maxVal)) {
    return true;
  } else {
    return false;
  }
}

function isBinarySearch(root) {
  console.log('Is Binary Search Tree?: ', isBST(root, Number.MIN_VALUE, Number.MAX_VALUE));
}

console.log('Starting job...');
var myTree = new BinaryTree();
var root = myTree.root;
root = myTree.insert(root, 7);
root = myTree.insert(root, 4);
root = myTree.insert(root, 9);
root = myTree.insert(root, 1);
root = myTree.insert(root, 6);
myTree.root = root;
isBinarySearch(myTree.root);