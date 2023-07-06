const readline = require('readline');
const {Cars, Car, randomNumber} = require("./car");

class Racing {
    constructor(carNames, tryNumber) {
        this.carNames = carNames;
        this.tryNumber = tryNumber;
    }

    run() {
        let cars = this.toCars(this.carNames);
        for (let i = 0; i <= this.tryNumber; i++) {
            cars = cars.move(randomNumber);
            cars.show();
            console.log();
        }
        cars.showWinner();
    }

    toCars(carNames) {
        const names = carNames.split(',');
        return new Cars(names.map((name) => new Car(name.trim(), 0)));
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('경주할 자동차 이름을 입력하세요(이름은 쉼표(,)로 구분): ', (carNames) => {
    rl.question('시도할 회수는 몇회인가요? ', (tryNumber) => {
        const racing = new Racing(carNames, tryNumber);
        racing.run();
        rl.close();
    });
});