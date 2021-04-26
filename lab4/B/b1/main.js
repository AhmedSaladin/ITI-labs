/*
Make your own simulation for a simple linked list custom Object,
that accepts objects with a single numeric property value in an ascending order.

1- Enqueue a value as long as the value is in the sequence otherwise through
    an exception(push an item at the end of the list with the passed value). --done 
2- Insert an item in specific place as long as the value 
    is missing from the sequence otherwise through an exception. --done
3- Pop a value (remove an item from the end of the list). --done
4- Remove an item from specific place with the required value,
    if the value is not added return a message with “data not found”. --done
5- Dequeue a value (remove an item from the beginning of the list). --done
6- Display the content of the list. --done
7- Ensure that there is no duplication in your entered values. --done
8- You can add any property you need. --done

*/


function Node(vlu) {
    return {
        next: null,
        value: vlu,
        previous: null,
    }
}

function LinkedList() {
    return {
        head: null,
        tail: null,
        length: 0,
        enqueue: function (value) {
            if (isNaN(parseInt(value))) throw "Enter only numeric values.";
            if (this.search(value) == null) {
                var new_node = new Node(value);
                if (this.length < 1) {
                    this.head = new_node;
                    this.tail = new_node;
                } else {
                    this.tail.next = new_node;
                    new_node.previous = this.tail;
                    this.tail = new_node;
                }
                this.increase_length();
            } else throw `This value: ${value} numericin the list you can't add it again.`;
        },
        dequeue: function () {
            this.is_head_null();
            var old_head = this.head;
            if (this.length == 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = old_head.next;
                this.head.previous = null;
                old_head.next = null;
            }
            this.decrease_length();
            return old_head;
        },
        get: function (index) {
            if (index <= 0 || index > this.length) throw "Can't get this element";
            var counter = 1;
            var current = this.head;
            while (counter != index) {
                current = current.next;
                counter++;
            }
            return current;
        },
        insert: function (value, position) {
            var current_position = this.get(position);
            var new_node = new Node(value);
            new_node.next = current_position;
            new_node.previous = current_position.previous;

            // previous element in chain point to new node.
            current_position.previous.next = new_node;

            // now the old element in this position
            // point to new node added to list in his position
            current_position.previous = new_node;
            this.increase_length();
        },
        remove: function (value) {
            this.is_head_null();
            var founded = this.search(value);
            if (founded != null) {
                var tmp = founded;
                // tail case
                (founded.next != null) ?
                    founded.next.previous = tmp.previous :
                    this.tail = founded.previous;
                // head case
                (founded.previous != null) ?
                    founded.previous.next = tmp.next :
                    this.head = founded.next;

                founded = null;
                this.decrease_length();
            } else throw "Data not found."
        },
        pop: function () {
            this.is_head_null();
            var popped_node = this.tail;
            if (this.length == 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = popped_node.previous;
                this.tail.next = null;
                popped_node.previous = null;
            }
            this.decrease_length();
            return popped_node;
        },
        displayInfo: function () {
            return this.head;
        },
        increase_length: function () { this.length++; },
        decrease_length: function () { this.length--; },
        is_head_null: function () {
            if (this.head == null) throw "List is empty.";
        },
        search: function (value) {
            if (this.length <= 0) return null;
            current = this.head;
            var counter = 1;
            while (current.value != value) {
                counter++;
                current = current.next;
                if (current == null) return null;
            }
            return current;
        }
    }
}
try {

    var list = new LinkedList();
    list.enqueue(15);
    list.enqueue(12);
    list.enqueue(11);
    list.enqueue(19);
    list.enqueue(20);
    list.insert(3, 4);
    list.remove(15);
    list.remove(20);

    var tail = list.get_tail();
    var head = list.get_head();

    console.log(tail);
    console.log(head);

    list.enqueue(20);
} catch (err) {
    console.error(err);
}

