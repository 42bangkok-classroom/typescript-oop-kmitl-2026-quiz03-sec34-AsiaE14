export class Car {

    brand: string | undefined
    model: string | undefined

   

    start(brand:string, model:string){
        this.brand = brand;
        this.model = model;
       return console.log(`${this.brand} ${this.model} is starting...`);
    }

    accelerate(brand:string, model:string){
        this.brand = brand;
        this.model = model; 
        return console.log(`${this.brand} ${this.model} is accelerating...`);
    }
    

    brake(brand:string, model:string   ){
        this.brand = brand;
        this.model = model;
        return console.log(`${this.brand} ${this.model} is braking...`);
    }
        
    stop(brand:string, model:string){
        this.brand = brand;
        this.model = model;
        return console.log(`${this.brand} ${this.model} is stopping...`);    
    }
}


