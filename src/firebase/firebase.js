import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA8c8i1Dr7prMmpnxmbTA22t0QdWCzOuKE",
    authDomain: "user-management-app-e3489.firebaseapp.com",
    projectId: "user-management-app-e3489",
    storageBucket: "user-management-app-e3489.appspot.com",
    messagingSenderId: "632388225328",
    appId: "1:632388225328:web:b33928865e0d5c70d220f5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, db, storage, provider };