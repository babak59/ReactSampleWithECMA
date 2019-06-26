import React from 'react';
import context from '../Context'
import { Person } from '../model/Person';
export default class PersonInputFormComponent extends React.Component{
    state={fields:{name:'',family:'',age:0,height:0}}
     handleChange=(event)=>{
        let target=event.target;
        let result=this.state.fields;
        result[target.name]=target.value;
       this.setState({fields:result});
     } 
     handleFormSubmit(event)
     {
        event.preventDefault();
        let name=event.state.name;
        let family=event.state.family;
        let age=event.state.age;
        context.samplePeople.push(new Person(22,name,family,180,age))
        if( context.peopleComponent)
        {
            context.peopleComponent.setState({people:context.samplePeople})
        }
     }
     render(){
        return(<form>
                 <input placeholder="Lastname" name="lastname" value={this.state.fields.lastname} onChange={this.handleChange}></input>
                 <input placeholder="Firstname" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange}></input>
                 <input placeholder="Age" name="age" value={this.state.fields.age} onChange={this.handleChange}></input>
                 <input type="submit" value="Create Person"/>
               </form>)
     }
} 