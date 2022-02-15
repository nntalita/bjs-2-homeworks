`use strict`

class PrintEditionItem {
    name;
    releaseDate;
    pagesCount;
    type = null;
    _state = 100;

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }



    get state() {
        return this._state;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0
        } else if (value > 100) {
            this._state = 100
        } else
            this._state = value;
    }

    fix() {
        this.state = this.state * 1.5
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    name;
    books = [];

    constructor(name) {
        this.name = name;
    }

    addBook(book) {
        if (book._state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(item => item[type] === value);
        if (book === undefined) {
            book = null
        }
        return book;
    }

    giveBookByName(bookName) {
        let book = this.books.find(item => item.name === bookName);
        if (book === undefined) {
            book = null
        } else this.books.splice(this.books.indexOf(book), 1);
        return book;
    }
}


const libraryBig = new Library("Библиотека на районе");

libraryBig.addBook(
    new DetectiveBook(
        "Маринина Александра",
        "Кто украл кота?",
        2020,
        1008
    )
);
libraryBig.addBook(
    new FantasticBook(
        "Сантехник дядя Вася",
        "Жизнь без водки возможна!",
        1972,
        10
    )
);
libraryBig.addBook(
    new Magazine(
        "Бурда-морда",
        2022,
        50
    )
);
libraryBig.addBook(
    new NovelBook(
        "Чукча в чуме ждет рассвет",
        "Что вижу,то пою",
        1919,
        100
    )
)

console.log(libraryBig.findBookBy("name", "Властелин колец") + " не нашлась"); //null
console.log(libraryBig.findBookBy("releaseDate", 1919).name + " нашлась"); //"Чукча в чуме ждет рассвет"

console.log("Количество книг до выдачи: " + libraryBig.books.length); //Количество книг до выдачи: 4
const outBook = libraryBig.giveBookByName("Бурда-морда");
console.log("Количество книг после выдачи: " + libraryBig.books.length); //Количество книг после выдачи: 3
outBook._state = 17;
console.log(outBook._state + " испортили state  " + outBook.name);
outBook.fix();
console.log(outBook._state + " - починили");
libraryBig.addBook(outBook);
console.log("Количество книг после добавления: " + libraryBig.books.length); //Количество книг после попытки добавления : 3
outBook.fix();
console.log(outBook._state + " - починили");
libraryBig.addBook(outBook);
console.log("Количество книг после добавления: " + libraryBig.books.length); //Количество книг после попытки добавления : 4
