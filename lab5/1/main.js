/*
linkedlist logic.
-> Createyour own object that contains a list of numerical sequence, with the following details
----> Your constructor takes 3 parameters to define start, end of list and step --done
----> The list should be private and filled with private method --done
----> You can create getter and setter for the list if needed --done
----> Allow the user to apply the following functionality to his created sequence:
--------> Append or prepend a new value (you have to ensure that you are pushing sequential
          value otherwise through exception) --done
 --------> Dequeue or pop a value, --done
 --------> display all its content, --done
 ----> all of the properties should be defined using accessor descriptor, prevent them from being deleted,iteratedor being modified.
 ----> you can add any property you need. --done
*/
function Sequence(step, start, end) {
  var list = [];
  this.step = step;
  this.start = start;
  this.end = end;
  this.getList = function () {
    return list;
  };
  var fill = function () {
    for (var i = start; i < end; i += step) list.push(i);
  };
  fill();
}

Object.defineProperties(Sequence.prototype, {
  append: {
    value: function (item) {
      var list = this.is_in_list(item);
      var sequential = item - list[list.length - 1];
      if (sequential != this.step) throw "Not a sequential value";
      list.push(item);
    },
    enumerable: false,
    writable: false,
    configurable: false,
  },
  prepend: {
    value: function (item) {
      var list = this.is_in_list(item);
      var sequential = item - list[list.length - 1];
      if (sequential != this.step) throw "Not a sequential value";
      list.push(item);
    },
    enumerable: false,
    writable: false,
    configurable: false,
  },
  dequeue: {
    value: function () {
      var list = this.is_empty();
      return list.shift();
    },
    enumerable: false,
    writable: false,
    configurable: false,
  },
  pop: {
    value: function () {
      var list = this.is_empty();
      return list.pop();
    },
    enumerable: false,
    writable: false,
    configurable: false,
  },
  is_empty: {
    value: function () {
      var list = this.getList();
      if (list.length < 1) throw "List is empty";
      return list;
    },
    enumerable: false,
    writable: false,
    configurable: false,
  },
  is_in_list: {
    value: function (item) {
      var list = this.getList();
      for (var i in list) {
        if (list[i] === item) throw `item in list`;
      }
      return list;
    },

  },
});
// Object.defineProperty(Sequence.prototype, "append", {
//   value: function (item) {
//     var list = this.is_in_list(item);
//     var sequential = item - list[list.length - 1];
//     if (sequential != this.step) throw "Not a sequential value";
//     list.push(item);
//   },
//   enumerable: false,
//   writable: false,
//   configurable: false,
// });

// Object.defineProperty(Sequence.prototype, "prepend", {
//   value: function (item) {
//     var list = this.is_in_list();
//     var sequential = list[0] - item;
//     if (sequential != this.step) throw "Not a sequential value";
//     list.unshift(item);
//   },
//   enumerable: false,
//   writable: false,
//   configurable: false,
// });

// Object.defineProperty(Sequence.prototype, "dequeue", {
//   value: function () {
//     var list = this.is_empty();
//     return list.shift();
//   },
//   enumerable: false,
//   writable: false,
//   configurable: false,
// });

// Object.defineProperty(Sequence.prototype, "pop", {
//   value: function () {
//     var list = this.is_empty();
//     return list.pop();
//   },
//   enumerable: false,
//   writable: false,
//   configurable: false,
// });

// Object.defineProperty(Sequence.prototype, "is_empty", {
//   value: function () {
//     var list = this.getList();
//     if (list.length < 1) throw "List is empty";
//     return list;
//   },
//   enumerable: false,
//   writable: false,
//   configurable: false,
// });

// Object.defineProperty(Sequence.prototype, "is_in_list", {
//   value: function (item) {
//     var list = this.getList();
//     for (var i in list) {
//       if (list[i] === item) throw `item in list`;
//     }
//     return list;
//   },
//   enumerable: false,
//   writable: false,
//   configurable: false,
// });

try {
  var list = new Sequence(2, 3, 20);
  console.log(list.getList());
  list.append(21);
  list.prepend(1);
  console.log(list.pop());
  console.log(list.dequeue());
  console.log(list.getList());
  list.append(12);
  list.prepend(12);
} catch (err) {
  console.error(err);
}
