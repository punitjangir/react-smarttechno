import firebase from 'firebase';



const config = {
    apiKey: "AIzaSyAm7lHO2zJKLTARX-HOPLVzPE2PSUPMdpo",
    authDomain: "stechno-bce14.firebaseapp.com",
    databaseURL: "https://stechno-bce14.firebaseio.com",
    projectId: "stechno-bce14",
    storageBucket: "stechno-bce14.appspot.com",
    messagingSenderId: "470244238109"
  };
  const fire = firebase.initializeApp(config);
  export default fire;