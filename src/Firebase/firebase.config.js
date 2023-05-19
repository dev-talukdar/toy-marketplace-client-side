import { initializeApp } from "firebase/app";   

 
const firebaseConfig = {
  apiKey: "AIzaSyAWsnPUaZZXNihnse7JEJldXmTAJL8fuCk",
  authDomain: "wheels-ville.firebaseapp.com",
  projectId: "wheels-ville",
  storageBucket: "wheels-ville.appspot.com",
  messagingSenderId: "649940423446",
  appId: "1:649940423446:web:a9130bdaebbce09ee1f637"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;