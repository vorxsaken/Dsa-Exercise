class queue {
    constructor(){
        this.rear = -1;
        this.front = -1;
        this.queu = [];
        this.size = 5;
    }

    isFull(){
        if(this.front == 0 && this.rear == this.size - 1){
            return true;
        }
        return false;
    }

    isEmpty(){
        if(this.front == -1){
            return true;
        }
        return false;
    }

    enQueu(value){
        if(this.isFull()){
            console.log("queu is full");
        }else{
            this.front = 0;
            this.rear++;
            this.queu[this.rear] = value;
        }
    }

    deQueu(){
        let element = 0;
        if(this.isEmpty()){
            console.log("queu is empty");
        }else{
            element = this.queu[this.front];
            if(this.front >= this.rear){
                this.rear = -1;
                this.front = -1;
            }else{
                this.front++;
            }
            console.log("deleted: " + element);

        }
    }

    display(){
        if(this.isEmpty()){
            console.log("queu empty");
        }else{
            console.log("Front at: " + this.front);
            console.log("Rear at: " + this.rear);
            console.log("Queu value ->");
            for(var i = this.front; i < this.rear + 1; i++){
                console.log(this.queu[i]);
            }
        }
    }
}

var q = new queue;
q.enQueu(1);
q.enQueu(2);
q.enQueu(3);
q.deQueu();
q.deQueu();
q.deQueu();
q.display();
