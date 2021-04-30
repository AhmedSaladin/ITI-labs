/*
-> create box object contain books objects ensure that:
----> box object has the following properties:height, width, length, numOfBooks, volume, material, content. --done
----> book object has the following properties:title, numofChapters, author, numofPages, publisher, numofCopies --done
----> count # of books inside box --done
----> delete any of these books in box according to book name or type.
----> create book object and add it to box object content property --done
----> The content property contains an array books --done
----> use .toString() to tell its dimensions and how books are stored in it --done
----> implement .valueof() so that if there is more than one box object we can get total books in these boxes 
      by adding thei.e. box1 has 5 books while box2 has 2 books, box1 + box2 should return 7 --done
*/
function Box(height, width, length, volume, material) {
  return {
    height: height,
    width: width,
    length: length,
    numOfBooks: 0,
    volume: volume,
    material: material,
    content: [],
    add: function (book) {
      this.content.push(book);
      this.numOfBooks++;
    },
    toString: function () {
      return `This box dimensions is height: ${this.height}cm, width: ${this.width}cm, length: ${this.length}cm, it have a ${this.numOfBooks} books`;
    },
    delete: function (title) {
      var books = this.content;
      if (books.length < 1) throw "Content of box in empty";
      for (var i in books)
        if (books[i].title == title) {
          var index = i;
          books.splice(index, 1);
          this.numOfBooks--;
        }
    },
  };
}

function Book(
  title,
  numofChapters,
  author,
  numofPages,
  publisher,
  numofCopies
) {
  return {
    title: title,
    numofChapters: numofChapters,
    author: author,
    numofPages: numofPages,
    publisher: publisher,
    numofCopies: numofCopies,
  };
}

function valueOf() {
  var sum = 0;
  for (var i in arguments) {
    sum += arguments[i].numOfBooks;
  }
  if (isNaN(sum)) throw "Enter a valid box";
  return `The total content of boxes is ${sum}`;
}

try {
  var bx = Box(30, 20, 33, 25, "plastic");
  var bk = Book("the true story", 36, "the man", 366, "book pub", 3);
  bx.add(bk);
  bx.add(bk);
  console.log(bx.toString());
  console.log(valueOf(bx, bx));
  bx.delete("the true story");
} catch (err) {
  console.error(err);
}
