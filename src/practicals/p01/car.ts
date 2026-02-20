export class Car {

     brand: string ;
    model: string ;

    en(brand: string, model: string){
        this.brand = brand;
        this.model = model;
    }

   

    start():string{
       
       return console.log(`${this.brand} ${this.model} is starting...`);
    }

    accelerate():string{
       
        return console.log(`${this.brand} ${this.model} is accelerating...`);
    }
    

    brake():string{
       
        return console.log(`${this.brand} ${this.model} is braking...`);
    }
        
    stop(){
       
        return console.log(`${this.brand} ${this.model} is stopping...`);    
    }
}


