import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

export default class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth;
    this.db = app.firestore();
  }

  isAuthenticated = async () => {
    const user = await this.auth().currentUser;
    return user == null ? false : true;
  };

  googleSignIn = async () => {
    try {
      const provider = new this.auth.GoogleAuthProvider();
      const result = await this.auth().signInWithPopup(provider);
      return result;
    } catch {
      console.log('auth error');
    }
  };

  signOut = async () => {
    this.auth().signOut();
  };

  authSubscriber = (callback) => {
    return this.auth().onAuthStateChanged(callback);
  };

  fetchUsers = async () => {
    const users = await this.db
      .collection('Users')
      .get()
      .then((querySnapshot) => {
        let usersSnapshot = querySnapshot.docs;
        usersSnapshot = usersSnapshot.map((userDoc) => {
          userDoc = userDoc.data();
          userDoc.lastUpload = userDoc.lastUpload.toDate().toDateString();
          return userDoc;
        });
        return usersSnapshot;
      });
    return users;
  };
}
