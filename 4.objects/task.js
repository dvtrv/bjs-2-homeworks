function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

const student1 = new Student('Mary', 'Non-binary', 17);
const student2 = new Student('Jane', 'Female', 32);
const student3 = new Student('Jimmy', 'Male', 25);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if (this.marks !== undefined) {
        this.marks.push(...marksToAdd);
    }
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined || this.marks.length === 0) {
        return 0;
    } else {
        return this.marks.reduce((acc, value) => acc + value, 0) / this.marks.length;    }
}

Student.prototype.exclude = function (addReason) {
    if (this.excluded === undefined){
        delete this.subject;
        delete this.marks;
        this.excluded = addReason;
    } 
}