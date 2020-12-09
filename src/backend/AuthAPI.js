import firebase from './config';

const signUp = async (email, password, ca, privateKey) => {
	const data = await firebase.auth().createUserWithEmailAndPassword(email, password);
	await firebase.firestore().collection('users').doc(data.user.uid).set({
		email: email,
		uid: data.user.uid,
		ca: ca,
	});
}

const signIn = async (email, password) => {
	await firebase.auth().signInWithEmailAndPassword(email, password);
}

const getUserInfo = async () => {
	const userUid = await new Promise((resolve, reject) => {
		firebase.auth().onAuthStateChanged(res => {
			if (!res) {
				resolve(false);
			}
			resolve(res.uid);
		});
	});
	
	return await firebase.firestore().collection('users').doc(userUid).get();
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	signUp,
	signIn,
	getUserInfo
}