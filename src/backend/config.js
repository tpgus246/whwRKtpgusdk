import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyBuYme48T5D0h5N7DUtmDVqopVWfDdKHIM",
	authDomain: "sehyeon-aa902.firebaseapp.com",
	projectId: "sehyeon-aa902",
	storageBucket: "sehyeon-aa902.appspot.com",
	messagingSenderId: "438082997563",
	appId: "1:438082997563:web:b4608134bc000a60123b1e"
};

firebase.initializeApp(firebaseConfig);

export default firebase;