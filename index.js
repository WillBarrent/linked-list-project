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
            let temp = this.head;
            while (true) {
                if (temp.nextNode === null) {
                    temp.nextNode = node;
                    break;
                } else {
                    temp = temp.nextNode;
                }
            }
            this.tail = temp.nextNode;
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
        if (node.nextNode === null) {
            return 1;
        }

        return this.size(node.nextNode) + 1;
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
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let linkedList = new LinkedList();

linkedList.prepend("Prepend");

linkedList.append("Test");
linkedList.append("New Value");
linkedList.append("New Second Value");

console.log(linkedList.toString())