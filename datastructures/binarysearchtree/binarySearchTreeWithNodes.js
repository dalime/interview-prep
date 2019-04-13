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
}

// console.log('Starting job...');
// var myTree = new BinarySearchTreeWithNodes();
// var root = null;
// root = myTree.insert(root, 2);
// root = myTree.insert(root, 8);
// root = myTree.insert(root, 10);
// root = myTree.insert(root, 4);
// root = myTree.insert(root, 6);
// myTree.root = root;
// console.log('Search for 2: ' + myTree.search(myTree.root, 2));
// console.log('Search for 11: ' + myTree.search(myTree.root, 11));
// console.log('Search for 4: ' + myTree.search(myTree.root, 4));
// console.log('Search for 8: ' + myTree.search(myTree.root, 8));

module.exports = BinarySearchTreeWithNodes;