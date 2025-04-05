// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDU4XAn8ODvpgcOsU6gRD5G6-jdF8EnvI0",
    authDomain: "interntask-21f38.firebaseapp.com",
    projectId: "interntask-21f38",
    storageBucket: "interntask-21f38.firebasestorage.app",
    messagingSenderId: "817141843980",
    appId: "1:817141843980:web:92fc736680d58b18550629",
    measurementId: "G-XG0GE876EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
