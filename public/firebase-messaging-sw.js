

importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = self.firebase.initializeApp({
  apiKey: "AIzaSyBUrMCRpfnBXYNGBwrKPTjSzlN5f3bzzA8",
  authDomain: "react-push-7053f.firebaseapp.com",
  projectId: "react-push-7053f",
  storageBucket: "react-push-7053f.appspot.com",
  messagingSenderId: "217194859921",
  appId: "1:217194859921:web:f539f1239580741dcdde30"
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

console.log(self.firebase);
const messaging = self.firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});