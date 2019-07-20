import * as firebase from "firebase";
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "smartphoneshop-ubt.appspot.com",
    messagingSenderId: ""
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
