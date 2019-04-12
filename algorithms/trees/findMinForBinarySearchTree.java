class MinBinarySearchTree {
  class Node {
    int data;
    Node left;
    Node right;

    public Node(int x) {
      this.data = x;
      this.left = null;
      this.right = null;
    }
  }

  Node root;

  public MinBinarySearchTree() {
    this.root = null;
  }

  public Node insert(Node root, int data) {
    if (root == null) {
      root = new Node(data);
    } else if (data <= root.data) {
      root.left = insert(root.left, data);
    } else {
      root.right = insert(root.right, data);
    }
    return root;
  }

  public boolean search(Node root, int data) {
    if (root == null) {
      return false;
    } else if (data == root.data) {
      return true;
    } else if (data <= root.data) {
      return search(root.left, data);
    } else {
      return search(root.right, data);
    }
  }

  public int findMin(Node root) {
    if (root == null) {
      System.out.println("Tree is empty.");
      return -1;
    } else if (root.left == null) {
      return root.data;
    } else {
      return findMin(root.left);
    }
  }

  public static void main(String[] args) {
    MinBinarySearchTree myTree = new MinBinarySearchTree();
    Node root = myTree.root;
    System.out.println("Search for 8: " + myTree.search(null, 8));
    System.out.println("The min is: " + myTree.findMin(myTree.root));
    root = myTree.insert(root, 2);
    myTree.root = root;
    root = myTree.insert(root, 10);
    root = myTree.insert(root, 4);
    root = myTree.insert(root, 8);
    root = myTree.insert(root, 6);
    root = myTree.insert(root, 12);
    System.out.println("Search for 8: " + myTree.search(myTree.root, 8));
    System.out.println("Search for 12: " + myTree.search(myTree.root, 12));
    System.out.println("Search for 7: " + myTree.search(myTree.root, 7));
    System.out.println("The min is: " + myTree.findMin(myTree.root));
  }
}