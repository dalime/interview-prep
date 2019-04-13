var BinaryTree = require('../../datastructures/binarysearchtree/binarySearchTreeWithNodes');

function getHeight(root) {
  if (!root) return -1;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

console.log('Starting job...');
var myTree = new BinaryTree();
var root = myTree.root;
root = myTree.insert(root, 8);
root = myTree.insert(root, 10);
root = myTree.insert(root, 4);
root = myTree.insert(root, 2);
root = myTree.insert(root, 6);
root = myTree.insert(root, 12);
myTree.root = root;
console.log('Height of tree: ' + getHeight(myTree.root));