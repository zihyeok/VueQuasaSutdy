import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAuthStore } from 'src/stores/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDPihqYMjRryjnXyYpU_G-bnKUeWBv82G4',
  authDomain: 'jacecoding-vue3-firebase-app.firebaseapp.com',
  projectId: 'jacecoding-vue3-firebase-app',
  storageBucket: 'jacecoding-vue3-firebase-app.firebasestorage.app',
  messagingSenderId: '390639709159',
  appId: '1:390639709159:web:78a351e3d8c5d9d973eb42',
  measurementId: 'G-PHGXS1XX8C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

export default boot(async (/* { app, router, ... } */) => {
  const authStore = useAuthStore();
  onAuthStateChanged(auth, user => {
    console.log('### user: ', user);
    authStore.setUser(user);
  });
});
