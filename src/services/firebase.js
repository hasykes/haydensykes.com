// ./src/services/firebase.js
import * as firebase from "firebase/app"
import "firebase/database"

const config = {
apiKey: "AIzaSyCy66ge5qWg5xhWo6qGjrD-bRtI_VIMxhg",
authDomain: "haydensykes-personalsite.firebaseapp.com",
databaseURL: "https://haydensykes-personalsite.firebaseio.com",
projectId: "haydensykes-personalsite",
storageBucket: "haydensykes-personalsite.appspot.com",
messagingSenderId: "1093445041995",
//appId: "1:1093445041995:web:c86851f9e86220c5c4f2ce",
//measurementId: "G-57CTY5JCX8"
}


firebase.initializeApp(config);
const database = firebase.database()

export const countersRef = database.ref('/counters/')
