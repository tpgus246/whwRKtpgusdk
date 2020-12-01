import firebase from './config';

export default {
	signUp: (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password),
	signIn: (email, password) => firebase.auth().signInWithEmailAndPassword(email, password),
}