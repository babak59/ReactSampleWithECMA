import {Person,PeopleData} from './Person';

describe('person class tests', () => {
  it('test person add ', () => {
    let personToSave=new Person(1,"babak","moosavi",180);
    let personCrud=new PeopleData();
    personCrud.savePeople(personToSave);
     personToSave=new Person(1,"babak","moosavi",180);
     personCrud.savePeople(personToSave);
       expect(personCrud.peaple.size).toBe(1);//to.have.length(1);
  });
});