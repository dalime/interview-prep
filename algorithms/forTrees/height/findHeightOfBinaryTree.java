class BinaryTreeHeight {
  class Node {
    int data;
    Node left;
    Node right;

    public Node(int x) {
      this.data = x;
      this.left = null;
      this.right = null;
    }

    public int getData() {
      return this.data;
    }

    public Node getLeft() {
      return this.left;
    }

    public Node getRight() {
      return this.right;
    }

    public void setLeft(Node x) {
      this.left = x;
    }

    public void setRight(Node x) {
      this.right = x;
    }
  }

  Node root;

  public BinaryTreeHeight() {
    this.root = null;
  }

  public Node insert(Node root, int data) {
    if (root == null) {
      root = new Node(data);
    } else if (data <= root.getData()) {
      root.setLeft(insert(root.getLeft(), data));
    } else {
      root.setRight(insert(root.getRight(), data));
    }
    return root;
  }

  public boolean search(Node root, int data) {
    if (root == null) {
      return false;
    } else if (data == root.getData()) {
      return true;
    } else if (data <= root.getData()) {
      return search(root.getLeft(), data);
    } else {
      return search(root.getRight(), data);
    }
  }

  public int getHeight(Node root) {
    if (root == null) {
      return -1;
    }
    int leftHeight = getHeight(root.getLeft());
    int rightHeight = getHeight(root.getRight());
    return Math.max(leftHeight, rightHeight) + 1;
  }

  public int findHeight() {
    return getHeight(this.root);
  }

  public static void main(String[] args) {
    BinaryTreeHeight myTree = new BinaryTreeHeight();
    Node root = myTree.root;
    root = myTree.insert(root, 8);
    root = myTree.insert(root, 10);
    root = myTree.insert(root, 4);
    root = myTree.insert(root, 2);
    root = myTree.insert(root, 6);
    root = myTree.insert(root, 12);
    myTree.root = root;
    System.out.println("Height of the tree is: " + myTree.findHeight());
  }
}