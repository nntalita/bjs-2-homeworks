function Student(name, gender, age) {
    this.name = name;
    this gender = gender;
    this age = age;
}
studentFirst = new Student("Bob", "male", "16")
Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
        this.marks = [mark]
    } else {
        this.marks.push(mark)
    }
}

Student.prototype.addMarks = function (...mark) {
    for (let item of mark) {
        this.addMark(item)
    }

}
Student.prototype.getAverage = function () {
    let result = this.marks.reduce( (sum, current) => {
        return sum + current
    });
    result = result / this.marks.length;
    return result;
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
}
