class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class circularLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtHead(value){
        let node = new Node(value);

        if(this.head == null){
            this.head = node;
        }else{
            let current = this.head;
            let head = node;
            let count = 0;
            
            head.next = this.head;

            while(count < this.size - 1){
                current = current.next;
                count++;
            }

            current.next = node;
            this.head = node;
        }

        this.size++;
    }

    insertTail(value){
        let current, count;
        current = this.head;
        count = 0;

        let node = new Node(value);
        while(count < this.size){
            current = current.next;
            count++;
        }
        node.next = this.head;
        current.next = node;

        this.size++;
    }

    insertAt(value, index){
        let node = new Node(value);
        let previous, current;
        current = this.head;

        if(this.head == null){
            this.insertAtHead(value)
        }else if(index > this.size + 1){
            return;
        }else if(index == this.size + 1){
            this.insertTail(value);
        }
        else{
            let count = 0;

            while(count < index){
                previous = current;
                count++;
                current = current.next;
            }

            node.next = current;
            previous.next = node;
            this.size++;
        }
    }

    deleteHead(){
        let current = this.head;
        let count = 0;

        while(count < 1){
            current = current.next;
            count++;
        }

        this.head = current;
        this.size--;
    }

    deleteAt(index){
        let current, previous;
        current = this.head;
        let count = 0;

        while(count < index){
            previous = current;
            count++;
            current = current.next;
        }

        previous =  current.next;
        this.size--;
    }

    printList(){
        let current = this.head;
        let count = 0;
        while(count < this.size){         
            console.log(count + ' -> ' + current.data);
            current = current.next;
            count++;
        }
    }
}

let ll = new circularLinkedList();
ll.insertAtHead(200);
ll.insertAtHead(300);
ll.insertAtHead(100);
ll.insertAtHead(800);
ll.insertAt(150, 3);
ll.insertTail(250);

// ll.deleteAt(2);
ll.printList();