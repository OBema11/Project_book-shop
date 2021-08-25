import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCRWPt3n0ZktnK3dS0MdEq_L4wUJCPWFPQ",
    authDomain: "user-login11.firebaseapp.com",
    projectId: "user-login11",
    storageBucket: "user-login11.appspot.com",
    messagingSenderId: "299309107345",
    appId: "1:299309107345:web:e68f53ebf0cf5d08965730",
    measurementId: "G-VM1HN3DQYM"
})

export const auth = app.auth()
export default app