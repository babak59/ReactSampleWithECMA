import React,{Component} from 'react'

import context from '../Context'
import PersonComponent from './personComponent'
export class PeopleComponent extends Component{

    state={people: []}
    getPeaple=async ()=>
    {
     
     let peopleList=await this.fetchApiInstance.getApi(`people`)
     context.PeopleList=peopleList;
     debugger;
     this.setState({people:peopleList})
     setTimeout(()=>{
       this.setState({people:peopleList})
     },5000)
    
         
    }
    componentDidMount()
    {
      this.fetchApiInstance=context.fetchApi
      this.getPeaple();
      context.peopleComponent = this
    }
   
    render()
    {
    let peopleHtml=this.state.people.map((prs)=>{
   return  <PersonComponent key={prs.id} person={prs} ></PersonComponent>
  });
        return (<>
            <div> People List</div>
            <div className="divPeopleCenterContainer">
              {peopleHtml}
            </div></>)
    }
}
