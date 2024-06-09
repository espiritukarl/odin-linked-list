class LinkedList {
    constructor() {
        this.headNode = null;
        this.tailNode = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value)
        if (this.tailNode) this.tailNode.nextNode = newNode
        else this.headNode = newNode
        this.tailNode = newNode
        this.length++
    }

    prepend(value) {
        const newNode = new Node(value)
        if (this.headNode) newNode.nextNode = this.headNode
        else this.tailNode = newNode
        this.headNode = newNode
        this.length++
    }

    size() {
        return this.length
    }

    head() {
        return this.headNode
    }

    tail() {
        return this.tailNode
    }

    at(index) {
        if (index < 0 || index > this.length) return null
        let currentNode = this.headNode
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode
        }

        return currentNode
    }

    pop() {
        if (!this.headNode) return null
        if (this.headNode === this.tailNode) {
            this.headNode = null
            this.tailNode = null
            this.length = 0
            return this.headNode
        }

        let currentNode = this.headNode
        while (currentNode.nextNode !== this.tailNode) {
            currentNode = currentNode.nextNode
        }

        this.tailNode = currentNode
        this.tailNode.nextNode = null
        this.length--

    }

    contains(value) {
        let currentNode = this.headNode
        while (currentNode) {
            if (currentNode.value === value) return true
            currentNode = currentNode.nextNode
        }

        return false
    }

    find(value) {
        let currentNode = this.headNode
        let i = 0
        while (currentNode) {
            if (currentNode.value === value) return i
            currentNode = currentNode.nextNode
            i++
        }

        return null
    }

    toString() {
        let currentNode = this.headNode
        let str = '';
        while (currentNode) {
            str += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode
        }

        return str + 'null'
    }

    insertAt(value, index) {
        if (index < 0 || index > this.length) {
            return null;
        }

        if (index === 0) {
            this.prepend(value);
        } else if (index === this.length) {
            this.pop()
        } else {
            let previousNode = this.at(index - 1)
            let nextNode = this.at(index)
            let newNode = new Node(value)

            previousNode.nextNode = newNode
            newNode.nextNode = nextNode;
            this.length++
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index === 0) {
            this.headNode = this.headNode.nextNode 
            this.length--
            if (this.length === 0) this.tailNode = null
        } else {
            let previousNode = this.at(index-1)
            let removeNode = this.at(index)
            let nextNode = removeNode.nextNode

            previousNode.nextNode = nextNode
            if (removeNode === this.tailNode) this.tailNode = previousNode
            this.length--
        }
    }
}

class Node {
    constructor(value = null) {
      this.value = value;
      this.nextNode = null;
    }
}

const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)

list.prepend(5)
list.prepend(1)

console.log("List after appending, and prepending: ")
console.log(list.toString())

list.insertAt(15, 2)
list.insertAt(25, 5)

console.log("List after appending, prepending, and inserting:")
console.log(list.toString())

list.removeAt(3)

console.log("List after removing a value:")
console.log(list.toString())

list.pop()

console.log("List after popping a value:")
console.log(list.toString())

//Test out other functions:
console.log("Head Node: " + JSON.stringify(list.head()))
console.log("Tail Node: " + JSON.stringify(list.tail()))
console.log("List Size: " + list.size())