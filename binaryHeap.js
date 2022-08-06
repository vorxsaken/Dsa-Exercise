class binaryHeap{
    constructor(){
        this.array = [];
    }

    heapify(arr, n, i){
        let largest = i;

        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if(left < n && arr[left] > arr[largest]){
            largest = left;
        }

        if(right < n && arr[right] > arr[largest]){
            largest = right;
        }

        if(largest != i){
            let temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;

            this.heapify(arr, n, largest);
        }
    }

    insert(val){
        let size = this.array.length;
        if(size == 0){
            this.array.push(val);
        }else{
            this.array.push(val);

            for(let i = parseInt(size / 2 - 1); i >= 0; i--){
                this.heapify(this.array, size, i);
            }
        }
    }

    delete(val){
        let size = this.array.length;
        let i;

        for(i = 0; i < size; i++){
            if(val == this.array[i]){
                break;
            }
        }

        [this.array[i], this.array[size - 1]] = [this.array[size - 1], this.array[i]];
        this.array.splice(size - 1);

        for(let y = parseInt(size / 2 - 1); y >= 0; y--){
            this.heapify(this.array, size, y);
        }
    }

    extractMax(){
        const max = this.array[0];
        this.delete(max);
        return max;
    }

    getList = () => this.array;
}

var heap = new binaryHeap();
var sorted = [];
for(var i = 0; i < 50; i++){
    var random = Math.ceil(Math.random() * 100);
    heap.insert(random);
}
var size = heap.array.length;

console.log("Unsorted: ", heap.getList());

for(var a = 0; a < size; a++){
    sorted.push(heap.extractMax());
}

console.log("Sorted: ", sorted);



