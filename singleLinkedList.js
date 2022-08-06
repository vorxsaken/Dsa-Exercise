class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class singleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertHead(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    insertTail(value) {
        let node = new Node(value);
        let current;

        if (!this.head) {
            this.insertHead(node);
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    insertIndex(value, index) {
        let node = new Node(value);
        let current, previous;

        current = this.head;
        let count = 0;

        if (this.head == null) {
            this.insertHead(value)
        } else if (index > this.size) {
            return;
        } else {
            while (count < index) {
                previous = current;
                count++;
                current = current.next;
            }

            node.next = current;
            previous.next = node;

            this.size++;
        }
    }

    removeAt(index) {
        if (index == 0 && index > this.size) {
            return;
        }

        let current, previous;
        current = this.head;
        let count = 0;

        while (count < index) {
            count++;
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
        this.size--;
    }

    getIndex(index) {
        let current = this.head;
        let count = 0;
        
        while (count < this.size) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
    }

    sort(){
        let current, index;
        current = this.head;

        if(!this.head){
            return;
        }else{
            while(current){
                index = current.next;
                while(index){
                    if(current.data > index.data){
                        let temp = current.data;
                        current.data = index.data;
                        index.data = temp;
                    }

                    index = index.next;
                }
                current = current.next;
            }
        }
    }

    printList() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let ll = new singleLinkedList();
ll.insertHead(200);
ll.insertHead(300);
ll.insertTail(500);
ll.insertHead(600);
ll.insertHead(700);
ll.insertIndex(150, 2);
ll.sort();

// ll.removeAt(1);
ll.printList();
