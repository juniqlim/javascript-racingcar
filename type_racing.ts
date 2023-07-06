import * as readline from 'readline';
import { Cars, Car, randomNumber } from './car';

class Racing {
    private carNames: string;
    private tryNumber: number;

    constructor(carNames: string, tryNumber: number) {
        this.carNames = carNames;
        this.tryNumber = tryNumber;
    }

    run(): void {
        let cars = this.toCars(this.carNames);
        for (let i = 0; i <= this.tryNumber; i++) {
            cars = cars.move(randomNumber);
            cars.show();
            console.log();
        }
        cars.showWinner();
    }

    toCars(carNames: string): Cars {
        return new Cars(carNames.split(',').map((name) => new Car(name.trim(), 0)));
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('경주할 자동차 이름을 입력하세요(이름은 쉼표(,)로 구분): ', (carNames) => {
    rl.question('시도할 회수는 몇회인가요? ', (tryNumber) => {
        const racing = new Racing(carNames, Number(tryNumber));
        racing.run();
        rl.close();
    });
});