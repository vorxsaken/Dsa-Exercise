class queuCircular{
    constructor(){
        this.front = -1;
        this.rear = -1;
        this.queu = [];
        this.size = 5;
    }

    isFull(){
        if(this.front == 0 && this.rear == this.size - 1){
            return true;
        }
        if(this.front == this.rear + 1){
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
            console.log("queu full");
        }else{
            if(this.front == -1){
                this.front = 0;
            }
            this.rear = (this.rear + 1) % this.size;
            this.queu[this.rear] = value;
            console.log("inserted : " + value);
        }
    }

    deQueu(){
        var element;
        if(this.isEmpty()){
            console.log("queu empty");
        }else{
            element = this.queu[this.front];
            if(this.front == this.rear){
                this.front = -1;
                this.rear == -1;
            }else{
                this.front = (this.front + 1) % this.size;
            }
            console.log("deleted: " + element) ;
        }
    }

    display(){
        var i;
        console.log("front: " + this.front);
        console.log("item -->");
        for( i = this.front; i != this.rear; i = (i + 1) % this.size){
            console.log(this.queu[i]);
        }
        console.log(this.queu[i]);
    }
}

var item = new queuCircular;

item.enQueu(2);
item.enQueu(1);
item.enQueu(3);
item.enQueu(4);
item.enQueu(5);
item.deQueu();
item.deQueu();
item.enQueu(5);
item.display();