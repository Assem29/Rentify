import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWxF6Kx2902Nhq54fRy6vtuGpzSO6gR2Q",
    authDomain: "rentify-4f8d5.firebaseapp.com",
    projectId: "rentify-4f8d5",
    storageBucket: "rentify-4f8d5.appspot.com",
    messagingSenderId: "857098110722",
    appId: "1:857098110722:web:eb456b64791ef9a672241b",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
