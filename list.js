const factoryLinkedList = () => {
    let head = null;
    let tail = null;
    let length = 0;

    function appendNode (value) {
        let newNode = nodeFactory(value);
        //console.log(newNode);
        length++;
        if (linkedList.head === null) {
            linkedList.head = newNode;
            linkedList.tail = newNode;
            return;
        }
        newNode.prev = linkedList.tail;
        linkedList.tail.next = newNode;
        linkedList.tail = newNode;
        return;
    }

    function prependNode (value) {
        let newNode = nodeFactory(value);
        length++;
        if (linkedList.tail === null) {
            linkedList.head = newNode;
            linkedList.tail = newNode;
            return;
        }
        linkedList.head.prev = newNode;
        newNode.next = linkedList.head;
        linkedList.head = newNode;
        return;
    }

    function at(index) {
        if(index > length - 1 || index < 0) {
            return null;
        }
        let curr = linkedList.head;
        for(let i = 0; i <= index; i++) {
            if(index === i) {
                return curr.getValue();
            }
            curr = curr.next;
        } 
    }

    const pop = () => {
        if(linkedList.tail === null) {
            return null;
        }
        linkedList.tail = linkedList.tail.prev;
        linkedList.tail.next = null;
        length--;
        return;
    }

    function getSize() {
        return length;
    }

    function printList() {
        let curr = linkedList.head;
        let str = "";
        while(true) {
            if(curr === null) {
                str += "null";
                return str;
            }
            str += `(${curr.getValue()}) --> `
            curr = curr.next;
        }
    }

    function contains(val) {
        if(linkedList.head === null) {
            return false;
        }

        let curr = linkedList.head;
        while(curr !== null) {
            if (curr.getValue() === val ) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    function find(val) {
        if(linkedList.head === null) {
            return null;
        }

        let curr = linkedList.head;
        let index = 0;
        while(curr !== null) {
            if (curr.getValue() === val ) {
                return index;
            }
            index++;
            curr = curr.next;
        }
        return null;
    }

    function insertAt(value, index) {
        if( linkedList.head === null ) {
            return null;
        } else if ( index > length - 1 || index < 0) {
            return "This index does not exist.";
        } else if( index === 0 ) {
            prependNode(value);
            length++;
            return;
        }
        
        let curr = linkedList.head;
        while(index > 0) {
            curr = curr.next;
            index--;
        }

        let newNode = nodeFactory(value);
        newNode.next = curr;
        newNode.prev = curr.prev;
        newNode.prev.next = newNode;
        curr.prev = newNode;
        length++;
        return printList();
    }

    function removeAt(index) {
        if( linkedList.head === null ) {
            return null;
        } else if ( index > length - 1 || index < 0) {
            return "This index does not exist.";
        }

        let curr = linkedList.head;
        while(index > 0) {
            curr = curr.next;
            index--;
        }

        if( linkedList.head === curr ) {
            linkedList.head = curr.next;
            curr.next.prev = null;
        } else if( linkedList.tail === curr ) {
            linkedList.tail = curr.prev;
            curr.prev.next = null;
        } else {
            curr.prev.next = curr.next;
            curr.next.prev = curr.prev;
            curr.prev = null;
            curr.next = null;
        }
        return printList();

    }

    const linkedList = { head, tail, appendNode, prependNode, getSize, at, pop, printList, contains, find, insertAt, removeAt };
    return linkedList;
} 

const nodeFactory = (val) => {
    let next = null;
    let prev = null;
    let value = val;

    let getValue = () => {
        return value;
    }

    function setValue(newVal) {
        value = newVal;
        return;
    } 

    return { getValue, setValue, next, prev };
}

let newLinkedList = factoryLinkedList();
newLinkedList.appendNode(45);
newLinkedList.appendNode(75);
newLinkedList.prependNode(15);
newLinkedList.prependNode(69);
newLinkedList.prependNode(420);
newLinkedList.prependNode(7);
console.log(newLinkedList.getSize());
console.log(newLinkedList.head.getValue());
//console.log(newLinkedList.at(-5));
//console.log(newLinkedList.pop());

console.log(newLinkedList.printList());
console.log(newLinkedList.contains(75));

console.log(newLinkedList.find(75));

console.log(newLinkedList.insertAt(52, 0));
console.log(newLinkedList.printList());

console.log(newLinkedList.removeAt(2));