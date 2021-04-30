/*
-> create box object contain books objects ensure that:
----> box object has the following properties:height, width, length, numOfBooks, volume, material, content. --done
----> book object has the following properties:title, numofChapters, author, numofPages, publisher, numofCopies --done
----> count # of books inside box --done
----> delete any of these books in box according to book name or type.
----> create book object and add it to box object content property --done
----> The content property contains an array books --done
----> use .toString() to tell its dimensions and how books are stored in it
----> implement .valueof() so that if there is more than one box object we can get total books in these boxes 
      by adding thei.e. box1 has 5 books while box2 has 2 books, box1 + box2 should return 7
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
      return `This box dimensions is height: ${this.height}cm, width: ${
          this.width}cm, length: ${this.length}cm, have a ${this.numOfBooks} books`;
    },
    valueof: function () {},
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
try {
  var bx = Box(30, 20, 33, 25, "plastic");
  var bk = Book("the true story", 36, "the man", 366, "book pub", 3);
  console.log(bx.toString());
} catch (err) {
  console.error(err);
}
