// 7- Ensure that there is no duplication in your entered values.
// 8- You can add any property you need. --done
function LinkedList() {
  var list = [];

  // 6- Display the content of the list. --done
  this.get_list = function () {
    return list;
  };
}

// 1- Enqueue a value as long as the value is in the sequence otherwise through --need to modifiy
//    an exception(push an item at the end of the list with the passed value). --done
LinkedList.prototype.enqueue = function (item) {
  var list = this.get_list();
  if (this.is_in_list(item))
    throw "Push an item at the end of the list with the passed value";
  list.unshift(item);
};

// 2- Insert an item in specific place as long as the value
//    is missing from the sequence otherwise through an exception.
LinkedList.prototype.insert = function (item, position) {
  var list = this.get_list();
};

// 3- Pop a value (remove an item from the end of the list).--done
LinkedList.prototype.pop = function () {
  var list = this.get_list();
  if (list.length < 1) throw "Can't pop from empty list";
  return list.pop();
};

// 4- Remove an item from specific place with the required value,
//    if the value is not added return a message with “data not found”. --done
LinkedList.prototype.remove = function (value) {
  var list = this.get_list();
  if (list.length < 1) throw "Can't remove from empty list";
  var position = this.is_in_list(value);
  if (!position[0]) throw "Data not found";
  list.splice(position[1], 1);
};

// 5- Dequeue a value (remove an item from the beginning of the list). --done
LinkedList.prototype.dequeue = function () {
  var list = this.get_list();
  if (list.length < 1) throw "Can't dequeue from empty list";
  return list.shift();
};

LinkedList.prototype.push = function (item) {
  var list = this.get_list();
  if (this.is_in_list(item)[0]) throw "This element in list";
  list.push(item);
};

LinkedList.prototype.is_in_list = function (item) {
  var list = this.get_list();
  for (var i in list) {
    if (item == list[i]) return [true, i];
  }
  return [false];
};

var list = new LinkedList();
var end = list.get_list();

try {
  list.push(12);
  list.push(11);
  list.push(9);
  list.push(15);
  list.push(3);
  list.push(2);
  list.push(1);
} catch (err) {
  console.error(err);
} finally {
  console.log(end);
}
