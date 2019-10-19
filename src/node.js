class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null) {
			this.left = node;
		} else if (this.right == null) {
			this.right = node;
		} else {
			return;
		}
	}

	removeChild(node) {
		if (node == this.left) {
			this.left = null;
		} else if (node == this.right) {
			this.right = null;
		} else {
			throw new Error;
		}
		this.parent = null;
	}

	remove() {
		
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
