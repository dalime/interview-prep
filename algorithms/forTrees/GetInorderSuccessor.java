class InorderSuccessorTree {
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

  public InorderSuccessorTree() {
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

  public Node find(Node root, int x) {
    if (root == null) {
      return null;
    } else if (x == root.data) {
      return root;
    } else if (x <= root.data) {
      return find(root.left, x);
    } else {
      return find(root.right, x);
    }
  }

  public Node findMin(Node root) {
    if (root == null) {
      System.out.println("Tree is empty.");
      return null;
    } else if (root.left == null) {
      return root;
    } else {
      return findMin(root.left);
    }
  }

  public Node getSuccessor(Node root, int x) {
    Node current = find(root, x);
    if (current == null) return null;
    if (current.right != null) {
      return findMin(current.right);
    } else {
      Node successor = null;
      Node ancestor = root;
      while (ancestor != current) {
        if (current.data < ancestor.data) {
          successor = ancestor;
          ancestor = ancestor.left;
        } else {
          ancestor = ancestor.right;
        }
      }
      return successor;
    }
  }

  public static void main(String[] args) {
    System.out.println("Get Inorder Successor.");
    InorderSuccessorTree myTree = new InorderSuccessorTree();
    Node root = myTree.root;
    root = myTree.insert(root, 2);
    root = myTree.insert(root, 4);
    root = myTree.insert(root, 20);
    root = myTree.insert(root, 6);
    root = myTree.insert(root, 8);
    root = myTree.insert(root, 15);
    root = myTree.insert(root, 10);
    myTree.root = root;
    int toTest = 15; // 20
    Node successor = myTree.getSuccessor(root, toTest);
    if (successor != null) {
      System.out.println("The successor to " + toTest + " is: " + successor.data);
    } else {
      System.out.println("None. " + toTest + " is the highest value in this tree.");
    }
  }
}