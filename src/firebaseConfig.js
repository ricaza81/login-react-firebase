import * as firebase from "firebase";
import "firebase/auth";
//import dataConfig from './dataConfig'

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyBodfqZkHajV3w9Vb77c4xoF2GN75fPe3s",
  authDomain: "encampopusher.firebaseapp.com",
  databaseURL: "https://encampopusher.firebaseio.com",
  projectId: "encampopusher",
  storageBucket: "encampopusher.appspot.com",
  messagingSenderId: "941938176301",
  appId: "1:941938176301:web:d7b0610f787ad567ae23a4"
       // measurementId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
);

/*const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();*/

export default app;