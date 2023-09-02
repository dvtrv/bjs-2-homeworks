// Task 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100; // Состояние по умолчанию
        this.type = null; // Тип по умолчанию
    }

    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

// Task 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (const book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index >= 0) {
            return this.books.splice(index, 1)[0];
        }
        return null;
    }

}

// *** Task 3 ***

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
    addMark(mark, subject) {
        if (typeof subject === 'string' && typeof mark === 'number') {
            if (mark > 5 || mark < 2) {
                console.log('Value mark is incorrect');
                return;
            }

            if (this.marks[subject] !== undefined) {
                this.marks[subject].push(mark);
            } else {
                this.marks[subject] = [mark];
            }

        } else {
            console.log(subject, mark);
            console.log('Parametrs is incorrect. Enter parametrs in the form: Subject => Marks.');
            return;
        }
    }
    getAverageBySubject(subject) {
        if (this.marks[subject] === undefined) {
            console.log(`This Subject "${subject}" is undefined.`);
            return 0;
        } else {
            return this.marks[subject].reduce((acc, value) => acc + value, 0) / this.marks[subject].length;
        }
    }
    getAverage() {
        let subject = Object.keys(this.marks);
        if(subject.length === 0){
            console.log('Marks is not found');
            return 0;
        }
        return subject.reduce((acc, value) => acc + this.getAverageBySubject(value), 0) / subject.length;
    }
}