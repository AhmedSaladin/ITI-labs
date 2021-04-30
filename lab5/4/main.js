/*
-> create box object contain books objects ensure that:
----> box object has the following properties:height, width, length, numOfBooks, volume, material, content. --done
----> book object has the following properties:title, numofChapters, author, numofPages, publisher, numofCopies --done
----> count # of books inside box 
----> delete any of these books in box according to book name or type.
----> create book object and add it to box object content property
----> The content property contains an array books 
----> use .toString() to tell its dimensions and how books are stored in it
----> implement .valueof() so that if there is more than one box object we can get total books in these boxes 
      by adding thei.e. box1 has 5 books while box2 has 2 books, box1 + box2 should return 7
*/
function Box(hght, wdth, lnght, vlm, mtrl) {
  return {
    height: hght,
    width: wdth,
    length: lnght,
    numOfBooks: 0,
    vloume: vlm,
    material: mtrl,
    content: [],
    books: 0,
  };
}

function Book(ttl, nochp, ath, nopg, pshr, nocp) {
  return {
    title: ttl,
    numofChapters: nochp,
    author: ath,
    numofPages: nopg,
    publisher: pshr,
    numofCopies: nocp,
  };
}
