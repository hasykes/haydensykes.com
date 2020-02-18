import React from 'react'
import PropTypes from 'prop-types'

import {countersRef} from '../services/firebase'

class PageVisits extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            foundWaterBottle:`???`,
        }
    }

    componentDidMount(){
        const page = this.props.pageName

        //read current number of pagevies and add one before setting state
        countersRef.once("value").then(snapshot => {  

            const pageViews = snapshot.val()[page]+1

            this.setState({foundWaterBottle:pageViews})

            //write new number to the database
            countersRef.set({foundWaterBottle:pageViews});
        });

        //TODO use sessionstate or cookies to prevent the weird load in of the number
        
    }
    

    render() {
    
    return (
        <span>
            {`${this.state.foundWaterBottle}`}
        </span>
        )
}
}

PageVisits.propTypes = {
    pageName: PropTypes.string,
  }

export default PageVisits
