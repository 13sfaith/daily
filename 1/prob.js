/*
Given a singly linked list and an integer k, remove the
kth last element from the list. k is guaranteed to be smaller than the
length of the list.

The list is very long, so making more then one pass is prohibitively expensive.
*/


class Node
{
  constructor(v)
  {
    this.v = v;
    this.next = null;
  }
}

class List
{
  constructor(element)
  {
    this.head = element;
  }

  addElement(v)
  {
    let point = this.head;
    while(point.next != null)
    {
      point = point.next;
    }
    point.next = new Node(v);
  }

  removeElement(prev)
  {
    let point = prev.next;
    if (point != null)
    {
      point = point.next;
    }
    prev.next = point;
  }


  printList()
  {
    let point = this.head;
    let str = "";
    while (point != null)
    {
      str += point.v + ", ";
      point = point.next;
    }
    console.log("{" + str + "}");
  }


}

function removeByLast(k, a)
{
  let arr = [];

  let point = a.head;

  while(point != null)
  {
    if (arr.length > (k + 1))
    {
      arr.shift();
    }
    arr.push(point);
    point = point.next;
  }

  a.removeElement(arr[0]);
}

let k = 5;
let a = new List(new Node(2));
a.addElement(3);
a.addElement(5);
a.addElement(1);
a.addElement(10);
a.addElement(24);
a.addElement(6);
a.addElement(200);
a.addElement(69);
a.addElement(121);

a.printList();

removeByLast(k, a);
console.log('Removed the ' + k + ' from last element');

a.printList();
