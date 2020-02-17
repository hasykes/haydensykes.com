import React from 'react'

import {countersRef} from '../services/firebase'

class PageVisits extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            foundWaterBottle:0,
        }
    }

    componentDidMount(){
        countersRef.once("value").then(snapshot => {
            
            return this.setState({foundWaterBottle:snapshot.val().foundWaterBottle})
        });
  
    }
    

    render() {
    
    return (
        <span>
            {`${this.state.foundWaterBottle}`}
        </span>
        )
}
}

//TODO add prop types

export default PageVisits
