class Person
{
    constructor(id,name,lastname,height,age)
    {
        this.id=id;
        this.name=name;
        this.lastname=lastname;
        this.height=height;  
        this.age=age;  
        this.gender=''        
    }
    
    getIntro(){
        return `${this.name}-${this.lastname}`
    }

    //Object.freez(this); //will freez the object from dynamic adding properties
}
class PeopleData
{
    constructor()
    {
        this.peaple=new Map();
    }
   savePeople(person)
   {
    const personId=Math.random();
    this.peaple.set(personId, person);
   }
   getPerson(id)
   {
       return 
   }

}


export {Person,PeopleData}