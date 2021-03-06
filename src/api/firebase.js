import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCBDzLLy4-cpG6DLENLtmiXzQDGNaJC3ss',
  authDomain: 'todolist-1088f.firebaseapp.com',
  projectId: 'todolist-1088f',
  storageBucket: 'todolist-1088f.appspot.com',
  messagingSenderId: '1040553208124',
  appId: '1:1040553208124:web:5b06a685d7383787911639',
};

const app = initializeApp(firebaseConfig);

export const authService = getAuth(app);
export const firestore = getFirestore();
