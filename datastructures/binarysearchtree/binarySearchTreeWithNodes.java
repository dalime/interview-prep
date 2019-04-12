class BinarySearchTreeWithNodes {
  class Node {
    int data;
    Node left;
    Node right;

    public Node(int d) {
      this.data = d;
      this.left = null;
      this.right = null;
    }
  }

  Node root;

  public BinarySearchTreeWithNodes() {
    this.root = null;
  }

  public Node insert(Node root, int data) {
    if (this.root == null) {
      this.root = new Node(data);
    }

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
    } else if (root.data == data) {
      return true;
    } else if (data <= root.data) {
      return search(root.left, data);
    } else {
      return search(root.right, data);
    }
  }

  public static void main(String[] args) {
    BinarySearchTreeWithNodes myTree = new BinarySearchTreeWithNodes();
    Node root = myTree.root;
    root = myTree.insert(root, 2);
    myTree.root = root;
    root = myTree.insert(root, 8);
    root = myTree.insert(root, 10);
    root = myTree.insert(root, 4);
    root = myTree.insert(root, 6);
    System.out.println("Search for 2: " + myTree.search(myTree.root, 2));
    System.out.println("Search for 11: " + myTree.search(myTree.root, 11));
    System.out.println("Search for 4: " + myTree.search(myTree.root, 4));
    System.out.println("Search for 8: " + myTree.search(myTree.root, 8));
  }
}