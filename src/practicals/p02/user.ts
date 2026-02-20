export class User {

    firstname: string |""
    lastname: string |""
    age: number |""

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
