class Node {
	constructor(value, next, prev) {
		this.value = value;
		this.next = next;
		this.prev = prev;
	}
}

export default class LinkedList {
	constructor(value = null) {
		this.head = null;
		this.tail = null;
		if (value) {
			this.prepend(value);
			return;
		}
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
	isEmpty() {
		return this.length == 0;
	}
	indexOf(element) {
		let trav = this.head;
		let index = 0;
		while (trav.value != element && trav) {
			index++;
			trav = trav.next;
		}
		if (!trav) return -1;
		return index;
	}
	contains(element) {
		return this.indexOf(element) != -1;
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
	removeFirst() {
		const deletedValue = this.head.value;
		this.head = this.head.next;
		this.head.prev.next = null;
		this.head.prev = null;
		return deletedValue;
	}
	removeLast() {
		const deletedValue = this.tail.value;
		this.tail = this.tail.prev;
		this.tail.next.prev = null;
		this.tail.next = null;
		return deletedValue;
	}

	removeAt(index) {
		if (index == 0) {
			return this.removeFirst();
		}
		if (index == this.length - 1) {
			return this.removeLast();
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
	remove(element) {
		const index = this.indexOf(element);
		if (index == -1) {
			return -1;
		}

		return this.removeAt(index);
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
	toString() {
		let result = "";
		let trav = this.head;
		while (trav !== null) {
			result += `${trav.value} -> `;
			trav = trav.next;
		}

		result += "null\n";
		return result;
	}
}
