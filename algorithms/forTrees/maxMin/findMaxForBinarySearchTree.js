var BinarySearchTree = require('../../datastructures/binarysearchtree/binarySearchTreeWithNodes');

function findMax(root) {
  if (root == null) {
    return console.log('Tree is empty.');
  } else if (root.right == null) {
    return root.data;
  } else {
    return findMax(root.right);
  }
}

console.log('Starting job...');
var myTree = new BinarySearchTree();
console.log('The min is: ' + findMax(myTree.root));
var root = myTree.root;
root = myTree.insert(root, 2);
root = myTree.insert(root, 4);
root = myTree.insert(root, 10);
root = myTree.insert(root, 6);
root = myTree.insert(root, 8);
root = myTree.insert(root, 12);
myTree.root = root;
console.log('Search for 8: ' + myTree.search(myTree.root, 8));
console.log('Search for 11: ' + myTree.search(myTree.root, 11));
console.log('Search for 9: ' + myTree.search(myTree.root, 9));
console.log('Search for 10: ' + myTree.search(myTree.root, 10));
console.log('The min is: ' + findMax(myTree.root));
