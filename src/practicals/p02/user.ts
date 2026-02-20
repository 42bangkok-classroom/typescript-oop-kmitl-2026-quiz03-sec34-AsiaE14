export class User {

    public firstname: string ="";
    public lastname: string ="";
    private age: number = 0;

    static BIRTH_YEAR = 2000;

    setFirstname(firstname: string){
        this.firstname = firstname;
    }

    setLastname(lastname: string){
        this.lastname = lastname;
    }

    setAge(age: number){
        this.age = age;
    }

    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }

    getAge(){
        return this.age;
    }       
}
