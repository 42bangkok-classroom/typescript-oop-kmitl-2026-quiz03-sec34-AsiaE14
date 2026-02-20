export class Car {

    brand: string | undefined
    model: string | undefined

   

    start(brand, model){
        this.brand = brand;
        this.model = model;
       return console.log(`${this.brand} ${this.model} is starting...`);
    }

    accelerate(brand, model){
        this.brand = brand;
        this.model = model; 
        return console.log(`${this.brand} ${this.model} is accelerating...`);
    }
    

    brake(brand, model ){
        this.brand = brand;
        this.model = model;
        return console.log(`${this.brand} ${this.model} is braking...`);
    }
        
    stop(brand, model){
        this.brand = brand;
        this.model = model;
        return console.log(`${this.brand} ${this.model} is stopping...`);    
    }
}


