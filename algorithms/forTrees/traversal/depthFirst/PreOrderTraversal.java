public class PreOrderTraversal {
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

  public PreOrderTraversal() {
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

  public void preOrder(Node root) {
    if (root == null) return;
    System.out.print("[" + root.data + "] ");
    preOrder(root.left);
    preOrder(root.right);
  }

  public static void main(String[] args) {
    PreOrderTraversal myTree = new PreOrderTraversal();
    Node root = myTree.root;
    root = myTree.insert(root, 2);
    root = myTree.insert(root, 4);
    root = myTree.insert(root, 6);
    root = myTree.insert(root, 8);
    root = myTree.insert(root, 10);
    root = myTree.insert(root, 12);
    root = myTree.insert(root, 14);
    myTree.root = root;
    myTree.preOrder(myTree.root);
  }
}

