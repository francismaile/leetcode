/**
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 *	Input: 1->2->4, 1->3->4
 *	Output: 1->1->2->3->4->4
 *
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
  if( !l1 ) return l2;
  if( !l2 ) return l1;
	let mergedList = new ListNode();

	function ListNode(val) {
		this.val = val;
		this.next = null;
	}

	function addNode( list, val ) {
		let currentNode = list;
		if( list.val ) {
			// find end of list. add new node with value val
			while( currentNode.next ) {
				currentNode = currentNode.next;
			}
			currentNode.next = new ListNode(val);
		} else {
			list.val = val;
		}
		return list;
	}

	while( l1 || l2 ) { 
		if( !l1 ) {
			mergedList = addNode( mergedList, l2.val );
			l2 = l2.next;
		} else if( !l2 || l1.val < l2.val ) {
			mergedList = addNode( mergedList, l1.val );
			l1 = l1.next;
		} else {
			mergedList = addNode( mergedList, l2.val );
			l2 = l2.next;
		}
	}
	return mergedList;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(5);

let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

function printLinkedList( list ) {
	while( list ) {
		console.log(list.val);
		list = list.next;
	}
}

printLinkedList( mergeTwoLists( list1, list2 ) );
