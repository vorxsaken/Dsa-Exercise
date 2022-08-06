function hash(key, size) {
    let hash = 0;

    for(let i = 0; i < key.length; i++){
        hash += key.charCodeAt(i);
    }

    return hash % size;
}

class hashTable{
    constructor(){
        this.size = 5;
        this.bucket = Array(this.size);

        for(let i = 0; i < this.size; i++){
            this.bucket[i] = new Map();
        }
    }

    insert(key, value){
        let index = hash(key, this.size);
        this.bucket[index].set(key, value);
    }

    remove(key){
        let index = hash(key, this.size);
        let deleted = this.bucket[index].get(key);
        this.bucket[index].delete(key);
        return deleted;
    }

    search(key){
        let index = hash(key, this.size);
        let value = this.bucket[index].get(key);
        console.log(key + " => " + value);
    }
}

let table = new hashTable();
table.insert("nama", "fahmi");
table.insert("serena", "al");
table.insert("lita", "io");
table.insert("mina", "io");
table.insert(100, {
    nama: "fahmi",
    tinggi: "171"
});


console.log(table.bucket);

