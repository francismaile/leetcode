/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * Example 1:
 * Input: 1->1->2
 * Output: 1->2
 *
 * Example 2:
 * Input: 1->1->2->3->3
 * Output: 1->2->3
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function(head) {
  if( !head ) return head;
	let list = head;
	
	while(list.next) {
		if(list.val === list.next.val) {
			list.next = list.next.next;
		} else {
			list = list.next;
		}
	}

	return head;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

function printLinkedList( list ) {
	while( list ) {
		console.log(list.val);
		list = list.next;
	}
}

let list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);
list1.next.next.next = new ListNode(5);

printLinkedList( deleteDuplicates( list1 ) );

let list2;
printLinkedList( deleteDuplicates( list2 ) );
