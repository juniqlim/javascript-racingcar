const c = require('./car.js');

test('car move', () => {
    const car1 = new c.Car('name', 0);
    expect(car1.name).toBe('name');
    expect(car1.move(() => 6).position).toBe(1);
});

test('cars move', () => {
    const cars = new c.Cars([new c.Car('car1', 0),
        new c.Car('car2', 0),
        new c.Car('car3', 0)]);
    expect(cars.move(() => 6).winners()).toEqual(
        [new c.Car('car1', 1),
        new c.Car('car2', 1),
        new c.Car('car3', 1)]);
});