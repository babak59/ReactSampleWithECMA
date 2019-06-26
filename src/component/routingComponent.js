import React from 'react'
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import PersonComponent from './personComponent'
import {PeopleComponent} from './peapleComponent'
import PersonInputFormComponent from './personFormComponent'
import PersonEditComponent from './personEditComponent'
import MenuBarComponent from './menuBarComponent'
import  {peopleLink,personFormLink,personViewFormLink,personEditFormLink} from './linkConstantsComopnent'
const RoutingComponent=(props)=>{
return (<BrowserRouter>
  <MenuBarComponent></MenuBarComponent>
<Switch>
    <Route exact  path={peopleLink} component={PeopleComponent} ></Route>
    <Route exact  path={personFormLink} component={PersonInputFormComponent} ></Route>
    <Route exact  path={personViewFormLink} component={PersonComponent} ></Route>
    <Route exact  path={personEditFormLink} component={PersonEditComponent} ></Route> 
</Switch>
</BrowserRouter>)
}
export default RoutingComponent