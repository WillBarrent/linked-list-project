class LinkedList {
    constructor(head = null) {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const node = new Node();
        node.value = value;

        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.nextNode = node;
            this.tail = this.tail.nextNode;
        }
    }

    prepend(value) {
        const node = new Node();
        node.value = value;

        let temp = this.head;

        this.head = node;
        this.head.nextNode = temp;

        if (this.head.nextNode === null)
            this.tail = this.head;
    }

    size(node = this.head) {
        if (this.head === null)
            return 0;


        if (node?.nextNode === null) {
            return 1;
        } 
        

        return this.size(node?.nextNode) + 1;
    }

    headNode() {
        return this.head;
    }

    tailNode() {
        return this.tail;
    }

    at(index) {
        let temp = this.head;
        let counter = 0;
        while (counter !== index) {
            counter += 1;
            temp = temp.nextNode;
        }

        return temp;
    }

    pop() {
        let temp = this.head;
        let prev = null;

        while (temp.nextNode !== null) {
            prev = temp;
            temp = temp.nextNode;
        }

        prev !== null ? prev.nextNode = null : this.head = null;

        return this.head;
    }

    contains(value) {
        let temp = this.head;
        while (temp !== null) {
            if (temp.value === value)
                return true;
            temp = temp.nextNode;
        }

        return false;
    }

    find(value) {
        let temp = this.head;
        while (temp !== null) {
            if (temp.value === value)
                return value;
            temp = temp.nextNode;
        }

        return null;
    }

    toString() {
        let linkedList = "";
        let temp = this.head;
        while (temp !== null) {
            if (temp.value)
                linkedList += `(${temp.value}) -> `;
            temp = temp.nextNode;
        }

        return linkedList + '(null)';
    }

    insertAt(value, index) {
        const size = this.size();
        if (index > size) {
            throw new Error("Index is larger than the size of linked list.");
        }

        const node = new Node();
        node.value = value;

        if (index === size && index !== 0) {
            this.tail.nextNode = node;
            this.tail = this.tail.nextNode;
            return;
        } else if (index === 0) {
            this.prepend(node.value);
            let tail = this.tailNode();
            tail = this.head;
            return;
        }

        let currentNode = this.at(index);

        let prevNode = this.at(index !== 0 ? index - 1 : index);
        const nextNode = this.at(index + 1);

        currentNode = node;
        // If write this because when index is equal to zero,
        // we can not take previous node in Linked List
        (index === 0) ? this.head = currentNode : prevNode.nextNode = currentNode;
        currentNode.nextNode = nextNode;

        if (index === size - 1) {
            this.tail = prevNode.nextNode;
        }
    }

    removeAt(index) {
        const size = this.size();
        if (index >= size) {
            throw new Error("Index is larger or equal than the size of linked list.");
        }

        let currentNode = this.at(index);
        currentNode = currentNode.nextNode;

        if (index > 0) {
            const prevNode = this.at(index - 1);
            prevNode.nextNode = currentNode;
        } else {
            this.head = null;
            this.tail = null;
        }

        if (index === size - 1 && index > 0) {
            this.tail = prevNode;
        }

        return;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let linkedList = new LinkedList();

linkedList.insertAt("JavaScript", 0);
linkedList.append("C++")
linkedList.insertAt("Python", 2);
linkedList.insertAt("TypeScript", 2);
linkedList.removeAt(2);

console.log(linkedList.size());

console.log(linkedList.toString());
console.log(linkedList.tail)