class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
    }

    get(index) {
        if (index < 0 || index >= this.size()) {
            return -1;
        }

        let temp = this.head;

        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp.val;
    }

    addAtHead(val) {

        const newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;

    }

    addAtTail(val) {

        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            return;
        }

        let temp = this.head;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = newNode;

    }

    size(){

        let temp = this.head;
        let cnt = 0;
        // while(temp.next != null){
        while(temp != null){
        
            cnt++;
            temp = temp.next;
        }
         return cnt;

    }

    addAtIndex(index, val) {

        if(index < 0 || index > this.size()){
            console.error("Invalid Index");
            return;
        }

        const newNode = new Node(val);
        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let temp = this.head;
        for(let i = 0; i < index - 1; i++){
            temp = temp.next;
        }

        newNode.next = temp.next;
        temp.next = newNode;

    }

//     removeTop(){
//           if(!this.head){
//             return;
//     }

//     this.head = this.head.next;
// }

    // removeLast(){

    //     if(!this.head){
    //         return;
    //     }

    //     let temp = this.head;
    //     while(temp.next.next){
    //         temp = temp.next;
    //     }
    //     temp.next = null;

    // }

    deleteAtIndex(index) {
        
        if(index < 0 || index > this.size()){
            console.error("Invalid Index");
            return;
        }

        if(index === 0){
            this.head = this.head.next;
            return;
        }

        let temp = this.head;
        for(let i = 0; i < index - 1; i++){
            temp = temp.next;
        }

        if(temp.next != null){

            temp.next = temp.next.next;
        }
    }

    // print(){

    //     let temp = this.head;
    //     while(temp){
    //         console.log(temp.val);
    //         temp = temp.next;
    //     }
    // }
}

// const linkedlist = new MyLinkedList();
// linkedlist.addAtHead(10);
// linkedlist.addAtHead(60);
// linkedlist.addAtHead(40);

// linkedlist.print();