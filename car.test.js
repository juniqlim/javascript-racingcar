const {Cars, Car} = require("./car");

test('car move', () => {
    const car = new Car('name', 0);

    expect(car.name).toBe('name');
    expect(car.move(() => 5).position).toBe(0);
    expect(car.move(() => 6).position).toBe(1);
});

test('cars move', () => {
    const cars = new Cars([new Car('car1', 0),
        new Car('car2', 0),
        new Car('car3', 0)]);

    expect(cars.move(() => 5)).toEqual(
        new Cars([new Car('car1', 0),
            new Car('car2', 0),
            new Car('car3', 0)])
    );
    expect(cars.move(() => 6)).toEqual(
        new Cars([new Car('car1', 1),
            new Car('car2', 1),
            new Car('car3', 1)])
    );
});

test('cars winners', () => {
    const cars = new Cars([new Car('car1', 0),
        new Car('car2', 0),
        new Car('car3', 0)]);

    expect(cars.move(() => 6).winners()).toEqual(
        [new Car('car1', 1),
            new Car('car2', 1),
            new Car('car3', 1)]
    );
});