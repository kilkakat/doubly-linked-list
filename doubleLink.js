class DobleLinkedList {
    constructor () {
    this.first = null;
    this.last = null;
}



print() {

    let curr = this.first;

    while (curr != null) {
        console.log(curr.data);
        curr = curr.next;
    }
}



pushBack(data) {

    const newNode = new Node(data);

    if (!this.first) {
        this.first = newNode;
        this.last = newNode;
        return;
    }

    this.last.next = newNode;
    newNode.prev = this.last;
    this.last = newNode;
}



pushFront(data) {

    const newNode = new Node(data);

    if (!this.first) {
        this.first = newNode;
        this.last = newNode;
        return;
    }

    this.first.prev = newNode;
    newNode.next = this.first;
    this.first = newNode;
}



findNode(data) {

    let curr = this.first;
    while (curr) {

        if (curr.data == data) {
            return curr;
        }
        curr = curr.next;

    }
    return null;
}

insertAfter(node, data){

    const newNode = new Node(data);

    newNode.next = node.next;
    node.next = newNode;
    newNode.prev = node;
    
}

}



class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}


const list = new DobleLinkedList();

list.pushBack(1);
list.pushBack(4);
list.pushBack(2);
list.pushBack(3); 
list.pushFront(9);

const insert = list.insertAfter(list.findNode(1), 5);
list.print();


