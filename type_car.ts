class Car {
    name: string;
    position: number;

    constructor(name: string, position: number) {
        this.name = name;
        this.position = position;
        Object.freeze(this);
    }

    move(numberFunc: () => number): Car {
        if (numberFunc() > 5) {
            return new Car(this.name, this.position + 1);
        }
        return new Car(this.name, this.position);
    }
}

class Cars {
    cars: Car[];

    constructor(cars: Car[]) {
        this.cars = cars;
    }

    move(numberFunction: () => number): Cars {
        const cars = this.cars.map(car => car.move(numberFunction));
        return new Cars(cars);
    }

    show(): void {
        this.cars.forEach(car => {
            console.log(`${car.name}: ${'-'.repeat(car.position)}`);
        });
    }

    winners(): Car[] {
        const maxPosition = Math.max(...this.cars.map(car => car.position));
        return this.cars.filter(car => car.position === maxPosition);
    }

    showWinner(): void {
        console.log(`최종 우승자: ${this.winners().map(winner => winner.name).join(', ')}`);
    }
}

const randomNumber = () => {
    return Math.floor(Math.random() * 10);
};

module.exports = {
    Car: Car,
    Cars: Cars,
    randomNumber: randomNumber
};