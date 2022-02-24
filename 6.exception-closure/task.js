`use strict`

function parseCount(count) {


    let result = Number.parseInt(count);
    if (isNaN(result)) {
        throw result = new Error("Невалидное значение");
    }
    return result;

}

function validateCount(count) {

    let result;
    try {
        result = parseCount(count);
        if (typeof (result) === "number") {
            return result;
        }
    } catch (e) {
        return e;
    }
}


class Triangle {

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter() {
        try {
            let result = this.a + this.b + this.c;
            return +result;
        } catch (e) {
            return e;
        }
    }

    getArea() {
        try {
            let halfPerimeter = this.getPerimeter() / 2;
            let result = ((halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)) ** (1 / 2)).toFixed(3);
            return +result;
        } catch (e) {
            return e;
        }
    }
}

function getTriangle(a, b, c) {

    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getArea: function () {
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter: function () {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}

