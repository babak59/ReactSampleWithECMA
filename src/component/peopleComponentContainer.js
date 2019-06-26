import {PeopleComponent} from './component/peapleComponent'
import context from './Context'

let peopleComopnentContainer=()=>
{
    let samplePerson=context.samplePerson;
  let peopleDic=new Map();
  peopleDic.set(1,samplePerson);
  peopleDic.set(2,samplePerson);
  peopleDic.set(3,samplePerson);
  let peopleList=[ ...peopleDic.values() ];
  //let keys = Array.from( myMap.keys() ); or let keys =[ ...myMap.keys() ];
    return (  <PeopleComponent  people={peopleList}></PeopleComponent>)
}