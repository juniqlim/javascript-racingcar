class Car {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        Object.freeze(this);
    }

    move(numberFunc) {
        let number = numberFunc();

        if (number > 5) {
            return new Car(this.name, this.position + 1);
        }
        return new Car(this.name, this.position);
    }
}

class Cars {
    constructor(cars) {
        this.cars = cars;
        Object.freeze(this);
    }

    move(numberFunction) {
        const cars = this.cars.map(car => car.move(numberFunction));
        return new Cars(cars);
    }

    show() {
        this.cars.forEach(car => {
            console.log(`${car.name}: ${'-'.repeat(car.position)}`);
        });
    }

    winners() {
        const maxPosition = Math.max(...this.cars.map(car => car.position));
        return this.cars.filter(car => car.position === maxPosition);
    }

    showWinner() {
        console.log(`최종 우승자: ${this.winners().map(winner => winner.name).join(', ')}`);
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

