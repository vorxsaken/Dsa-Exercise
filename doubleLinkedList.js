class Node {
    constructor(value, prev = null, next = null) {
        this.data = value;
        this.prev = prev;
        this.next = next;
    }
}

class doubleLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertHead(value){
        if(this.head == null){
            this.head = new Node(value);
        }else{
            let node = new Node(value);
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.size++;
    }

    insertEnd(value){
        let current = this.head;
        let node = new Node(value);

        if(this.head == null){
            this.insertHead(value);
        }else{
            while(current.next){
                current = current.next;
            }

            node.prev = current;
            current.next = node;
        }

        this.size++;
    }

    insertAt(value, index){
        let current, previous;
        current = this.head;
        let node = new Node(value);

        if(this.head == null){
            this.insertHead(value);
            this.size++;
        }else if(index > this.size){
            return;
        }else{
            let count = 0;
            while(count < index){
                previous = current;
                count++;
                current = current.next;
            }

            node.next = current;
            node.prev = previous;
            previous.next = node;
            current.prev = node;
            this.size++;
        }
    }

    deleteFirstNode(){
        let current = this.head;
        let count = 0;

        while(count < 1){
            count++;
            current = current.next;
        }

        current.prev = null;
        this.head = current;

        this.size--;
    }
    deleteLastNode(){
        let current = this.head;
        let count = 0;

        while(count < this.size - 1){
            count++;
            current = current.next;
        }

        current.next = null;
        this.size--;
    }

    deleteAt(index){
        let before, after, current;
        current = this.head;
        let count = 0;

        while(current){
            count++;
            if(count == index){
                before = current;
                after = current.next.next;
            }
            
            current = current.next;
        }

        before.next = after;
        after.prev = before;
        this.size--;
    }

    printFromFront(){
        let current = this.head;

        if(this.head == null){
            return;
        }else{
            while(current){
                console.log(current.data);
                current = current.next;
            }
        }
    }

    printFromRear(){
        let current = this.head;

        if(this.head == null){
            return;
        }else{;
            let lastNode;
            while(current){
                lastNode = current;
                current = current.next;
            }

            while(lastNode){
                console.log(lastNode.data);
                lastNode = lastNode.prev;
            }
        }
    }
}

let ll = new doubleLinkedList();
ll.insertHead(100);
ll.insertHead(200);
ll.insertHead(300);
ll.insertHead(500);
ll.insertHead(800);
ll.insertEnd(150);
ll.insertEnd(250);
ll.deleteLastNode();
ll.printFromFront();