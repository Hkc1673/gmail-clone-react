

## To run this project 
You must create ``firebase.js`` files in ``src`` folder and then and add code below this line.

import firebase from "firebase";

const firebaseConfig = {</br>
    apiKey: ,</br>
    authDomain: ,</br>
    projectId: ,</br>
    storageBucket: ,</br>
    messagingSenderId: ,</br>
    appId: </br>
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)</br>
  const db = firebaseApp.firestore();</br>
  const auth = firebase.auth();</br>
  const provider = new firebase.auth.GoogleAuthProvider();</br>

  export { db, auth, provider };

  # You can review the project with this hosting URL: </br> https://clone-react-9a0d2.web.app
