import PubSub from 'pubsub-js'
import React from 'react'
class loggingComponent extends React.Component {
state={message:''}
constructor()
        {
             super();
             this.update=(action,createdId)=>{
                 this.setState({message:'Created Person with ...'});
             }

        }
        componentDidMount()
        {
            PubSub.subscribe('Created',this.update);
        }
        render()
        {
           
        }

}