const LinkedList = function(firstVal) {
	function Node(val=null) {
		this.val = val;
		this.next = null;
	}

	const head = new Node(firstVal);
	let listSize = 1;
	return {
		isEmpty: function() {

		},
		size: function() {
			return listSize;
		},
		prepend: function() {

		},
		append: function(val) {
			// find end of list
			let listPointer = head;
			while( listPointer.next ) {
				console.log(listPointer.val);
				listPointer.next = listPointer.next.next;
			}
			// add new node with value = val
			listPointer.next = Node(val);
			listSize += 1;
		},
		remove: function() {

		},
		contains: function() {

		},
		print: function() {
			list = head;
			while( list ) {
				console.log(list.val);
				list = list.next;
			}
		}
	}
}

let myList = LinkedList(1);
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(5);
myList.print();



