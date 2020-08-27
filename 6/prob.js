/*
Given a singly linked list, reverse the list.
Try to achieve this both recursively and iteratively
*/

class ListNode
{
  constructor(val)
  {
    this.val = val;
    this.next = null;
  }

  printList(head)
  {
    let output = head.val + ', ';
    let node = head.next;
    while (node != null)
    {
      output += node.val;
      output += ', ';
      node = node.next;
    }
    console.log(output);
  }

  reverseRecursively(head)
  {
    if (head == null)
    {
      return null;
    }
    if (head.next == null)
    {
      return head;
    }

    node1 = this.reverseRecursively(head.next);
    head.next.next = head;
    head.next = null;
    return node1;
  }
}

testHead = new ListNode(4);
node1 = new ListNode(3);
testHead.next = node1;
node2 = new ListNode(2);
node1.next = node2;
node3 = new ListNode(1);
node2.next = node3;
testTail = new ListNode(0);
node3.next = testTail;

testHead.printList(testHead);

testHead.reverseRecursively(testHead);

testHead.printList(testTail);
