
import {visitorDataRef} from '../services/firebase'

const Analytics = () => {
    //get visitor IP info 
    fetch('https://ipinfo.io/json')
        .then(res => res.json())
        .then(data => {
            const visitorDataObj = {};
            //set visitor IP as key and all data as value
            visitorDataObj[data.ip] = data;
            
            visitorDataRef.set(visitorDataObj);
        });
    

    //return nothing to the page
    return null;
}

export default Analytics