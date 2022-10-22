import { getMessaging, getToken, onMessage } from "firebase/messaging";
import {initializeApp} from 'firebase/app';

// importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUrMCRpfnBXYNGBwrKPTjSzlN5f3bzzA8",
  authDomain: "react-push-7053f.firebaseapp.com",
  projectId: "react-push-7053f",
  storageBucket: "react-push-7053f.appspot.com",
  messagingSenderId: "217194859921",
  appId: "1:217194859921:web:f539f1239580741dcdde30"
};
// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);
getToken(messaging, { vapidKey: 'BIM-iH7Ure7AENDuK0aaQveD6HU0HT-PsCnH53BYADbqh7PE76BidlvXXNuJQ9DO45x69KyPqvGHgKs38-zTc1g' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    console.log('got token ', currentToken)
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});


function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    }
  });
}

requestPermission();


onMessage(messaging, console.log);