class CheckIfBinarySearchTree {
  class Node {
    int data;
    Node left;
    Node right;

    public Node(int x) {
      this.data = x;
    }
  }

  Node root;

  public CheckIfBinarySearchTree() {
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

  public boolean isBST(Node root, int minVal, int maxVal) {
    if (root == null) return true;
    if (root.data >= minVal && root.data <= maxVal && isBST(root.left, minVal, root.data) && isBST(root.right, root.data, maxVal)) {
      return true;
    } else {
      return false;
    }
  }

  public void isBinarySearch(Node root) {   
    System.out.println("Is Binary Search Tree?: " + isBST(root, Integer.MIN_VALUE, Integer.MAX_VALUE));
  }

  public static void main(String[] args) {
    CheckIfBinarySearchTree myTree = new CheckIfBinarySearchTree();
    Node root = myTree.root;
    root = myTree.insert(root, 7);
    root = myTree.insert(root, 4);
    root = myTree.insert(root, 9);
    root = myTree.insert(root, 1);
    root = myTree.insert(root, 6);
    myTree.root = root;
    myTree.isBinarySearch(myTree.root);
  }
}