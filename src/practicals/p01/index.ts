import { Car } from "./car";

const car = new Car();

car.brand = "Toyota";
car.model = "Camry";

car.start(car.brand, car.model);
// Toyota Camry is starting...
car.accelerate(car.brand, car.model);
// Toyota Camry is accelerating...
car.brake(car.brand, car.model)  ;
// Toyota Camry is braking...
car.stop(car.brand, car.model);
// Toyota Camry is stopping...
