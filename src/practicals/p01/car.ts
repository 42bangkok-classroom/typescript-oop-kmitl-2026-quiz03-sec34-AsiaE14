export class Car {

     brand: string 
    model: string 

    en(brand: string, model: string){
        this.brand = brand;
        this.model = model;
    }

   

    start(){
       
       return console.log(`${this.brand} ${this.model} is starting...`);
    }

    accelerate(){
       
        return console.log(`${this.brand} ${this.model} is accelerating...`);
    }
    

    brake(){
       
        return console.log(`${this.brand} ${this.model} is braking...`);
    }
        
    stop(){
       
        return console.log(`${this.brand} ${this.model} is stopping...`);    
    }
}


