const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heap = [];
		this.lastIndex = 0;
	}

	push(data, priority) {
		let newNode = new Node(data, priority);
		this.insertNode(newNode);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
