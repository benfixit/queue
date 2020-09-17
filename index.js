class Queue {
    constructor(){
        this.dataStore = [];
    }

    enqueue(data){
        this.dataStore.push(data)
    }

    dequeue(){
        return this.dataStore.shift()
    }

    back(){
        return this.dataStore[this.dataStore.length - 1]
    }

    front(){
        return this.dataStore[0]
    }

    empty(){
        return this.dataStore.length === 0
    }

    display(){
        this.dataStore.forEach(data => {
            console.log(data)
        })
    }
}

const queue = new Queue();
queue.enqueue(70)
queue.enqueue(10)
queue.enqueue(7)
queue.enqueue(88)
queue.enqueue(3)
queue.display();