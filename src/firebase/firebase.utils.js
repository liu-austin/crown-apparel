import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCeYvh5XuIvP4OScCZCrNDl_412lNtMO7s",
    authDomain: "crown-db-de817.firebaseapp.com",
    databaseURL: "https://crown-db-de817.firebaseio.com",
    projectId: "crown-db-de817",
    storageBucket: "",
    messagingSenderId: "874302249230",
    appId: "1:874302249230:web:25b1aed13844e7fd"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;