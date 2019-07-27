import * as fb from 'firebase/app';

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyB204G8DaD_54MBOrd2Z4H1EEVP-ugehms",
    authDomain: "repro-b32d1.firebaseapp.com",
    databaseURL: "https://repro-b32d1.firebaseio.com",
    projectId: "repro-b32d1",
    storageBucket: "",
    messagingSenderId: "76908591774",
    appId: "1:76908591774:web:e363d9dc05527092"
  }
};

fb.initializeApp(environment.firebase);

