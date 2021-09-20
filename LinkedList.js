class Node {
	constructor(value, next, prev) {
		this.value = value;
		this.next = next;
		this.prev = prev;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}
	get length() {
		let trav = this.head;
		let length = 0;
		while (trav != null) {
			length++;
			trav = trav.next;
		}
		return length;
	}
	prepend(value) {
		const newNode = new Node(value, this.head, null);
		if (!this.tail && !this.head) {
			this.tail = newNode;
			this.head = newNode;
			return;
		}
		this.head.prev = newNode;
		this.head = newNode;
	}

	append(value) {
		const newNode = new Node(value, null, this.tail);
		if (this.head == null) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}
		this.tail.next = newNode;
		this.tail = this.tail.next;
	}

	add(value, index) {
		if (index == 0) {
			this.prepend(value);
			return;
		}
		if (index == this.length - 1) {
			this.append(value);
			return;
		}
		let trav = this.head;

		while (index - 2 == 0) {
			trav = trav.next;

			index--;
		}
		const newNode = new Node(value, trav.next, trav);
		trav.next.prev = newNode;
		trav.next = newNode;
		trav = null;
	}

	display() {
		let trav = this.head;
		while (trav !== null) {
			process.stdout.write(`${trav.value} -> `);
			trav = trav.next;
		}

		process.stdout.write("null\n");
	}
	shift() {
		const deletedValue = this.head.value;
		this.head = this.head.next;
		this.head.prev.next = null;
		this.head.prev = null;
		return deletedValue;
	}
	pop() {
		const deletedValue = this.tail.value;
		this.tail = this.tail.prev;
		this.tail.next.prev = null;
		this.tail.next = null;
		return deletedValue;
	}
	indexOf(number) {
		let trav = this.head;
		let index = 0;
		while (trav.value != number && trav) {
			index++;
			trav = trav.next;
		}
		if (!trav) return -1;
		return index;
	}
	delete(index) {
		if (index == 0) {
			return shift();
		}
		if (index == this.length - 1) {
			return pop();
		}
		let trav = this.head;
		while (index--) {
			trav = trav.next;
		}
		const deletedValue = trav.value;
		trav.prev.next = trav.next;
		trav.next.prev = trav.prev;
		trav.prev = null;
		trav.next = null;
		trav = null;
		return deletedValue;
	}
	[Symbol.iterator]() {
		let trav = this.head;
		return {
			next() {
				if (trav) {
					const result = {
						value: trav.value,
						done: false,
					};
					trav = trav.next;
					return result;
				} else {
					return {
						value: undefined,
						done: true,
					};
				}
			},
		};
	}
}
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.add(15, 1);
list.delete(1);

for (let number of list) {
	console.log(number);
}