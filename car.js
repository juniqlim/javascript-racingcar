class Car {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        Object.freeze(this);
    }

    move(numberFunc) {
        if (numberFunc() > 5) {
            return new Car(this.name, this.position + 1);
        }
        return new Car(this.name, this.position);
    }
}

class Cars {
    constructor(cars) {
        this.cars = cars;
    }

    move(numberFunction) {
        const cars = this.cars.map(car => car.move(numberFunction));
        return new Cars(cars);
    }

    winners() {
        const maxPosition = Math.max(...this.cars.map(car => car.position));
        return this.cars.filter(car => car.position === maxPosition);
    }
}

const randomNumber = () => {
    return Math.floor(Math.random() * 10);
};

module.exports = {
    Car,
    Cars,
    randomNumber
};