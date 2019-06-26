import React from 'react'
import {Link} from 'react-router-dom';
import  {peopleLink,personFormLink,personViewFormLink} from './linkConstantsComopnent'
let MenuBarComponent=(props)=>
{
    return (<>
  <ul className="LinkUL">
      <li> <Link to="/">Home</Link> </li>
      <li> <Link to={peopleLink} >People</Link></li>
      <li>  <Link to={personFormLink}>Add Person</Link></li>
      <li> <Link to={personViewFormLink}>View Person</Link></li>
    </ul>
  </>)
}
export default MenuBarComponent
