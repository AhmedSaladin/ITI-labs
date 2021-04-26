/*
Make your own simulation for a simple linked list custom Object,
that accepts objects with a single numeric property value in an ascending order.
1- Enqueue a valueas long as the value is in the sequenceotherwise through 
    an exception(push an item at the end of the list with the passed value).

2- Insertan item in specific place as long as the value 
    is missing from the sequenceotherwise through an exception.

3- Pop a value (remove an item from the end of the list).

4- Remove an item from specific placewith the required value,
    if the value is not added return a message with “data not found”.
    
5- Dequeue a value (removeanitem from the beginningof the list).

6- Display thecontentof the list.

7- Ensure that there is no duplication in your entered values. 

8- You can add any property you need.

*/

var List = [];

function Node(vlu) {
    return {
        next: null,
        value: vlu,
        previous: null,
    }
}


// List.push(element);
// List.push(ele);
// List.push(ele);

// Enqueue(e, List);

// function Enqueue(node, arr) {
//     if (arr.length < 1) {
//         arr.push(node);
//     // } else {
//     //     var counter = 0;
//     //     var there = 0
//     //     while (counter < arr.length) {
//     //         var there = (arr[counter].value == node.value) ? there++ : there;
//     //         if (arr[counter].value < node.value) {
//     //             //case 1 arr.next not null
//     //             if (there <= 1)
//     //                 arr.push(node);
//     //             arr[arr.length - 1].previous = counter;
//     //             arr[arr.length - 1].next = arr[counter].next;
//     //             arr[counter].next = arr.length - 1;
//     //             //case 2 arr.next null
//     //         }
//     //         // } else {
//     //         //     var prv = arr[counter];
//     //         //     node.previous =
//     //         //         arr[counter] = node;
//     //         // }
//     //         counter++;
//     //     }
//     }
// }

function LinkedList() {
    return {
        head: null,
        tail: null,
        length: 0,
        enqueue: function () { },
        dequeue: function () { },
        insert: function (value) {
            var new_node = new Node(value);
            if (this.length < 1) {
                this.head = new_node;
                this.tail = new_node;
            } else {
                this.tail.next = new_node;
                new_node.previous = this.tail;
                this.tail = new_node;
            }
            this.length++;
            return this;
        },
        remove: function () { },
        pop: function () {
            if (this.length == 1) {
                var n = head;
                this.head = null;
                this.tail = null;
                return n;
            }
            if (this.head == null) {
                throw "List is empty."
            }
            var n = this.tail;
            this.tail = n.previous;
            this.tail.next = null;
            this.length--
            n.previous = null;
            return n;
        },
        displayInfo: function () { }
    }
}
var list = new LinkedList();
list.insert(15);
list.insert(12);
list.insert(11);
var x = list.insert(10);
var r = list.pop();
console.log(r);
console.log(x);

