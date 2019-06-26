import {PeopleData, Person} from './model/Person'
import FetchApi from './services/fetchApi'
let context={}
context.PeapleModel=new PeopleData();
context.samplePerson=new Person(2,"babak","moosavi",180,38);
context.samplePeople=[new Person(2,"babak","moosavi",180,38), new Person(3,"babak","moosavi",180,38)];
context.PeopleList=[context.samplePerson]
context.fetchApi=new FetchApi();
export default context