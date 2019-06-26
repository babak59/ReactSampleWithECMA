import React from 'react'
import PropTypes from 'prop-types'
import {Person} from '../model/Person'
import  {personEditFormLink} from './linkConstantsComopnent'
let PersonComponent=(props)=>{
    // PersonComponent.propTypes=  {
    //     name:PropTypes.any.isRequired,
    //     lastName:PropTypes.any.isRequired,
    //     age:PropTypes.number.isRequired,
    // }
    let person=props.person;
    debugger;
   return (<><div>
           <ul>
               <li>Person Id:{person.id}</li>
               <li>Name:{person.firstname}</li>
               <li>Family:{person.lastname}</li>
               <li>gender:{person.gender}</li>
               <li>Height:{person.height} </li>
               <li><a href={personEditFormLink}>Edit</a></li>
               <li><a href="">Delete</a></li>
           </ul></div></>)
}
export  default PersonComponent