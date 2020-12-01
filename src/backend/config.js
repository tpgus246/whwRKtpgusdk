import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyAGYofridJto9WmeOoB-mprYR49hQjo3qQ",
	authDomain: "rona-a30b2.firebaseapp.com",
	databaseURL: "https://rona-a30b2.firebaseio.com",
	projectId: "rona-a30b2",
	storageBucket: "rona-a30b2.appspot.com",
	messagingSenderId: "497020456434",
	appId: "1:497020456434:web:8a47339bcdb7b83e9a6f6b",
	measurementId: "G-DN6FCFJ757"
};

firebase.initializeApp(firebaseConfig);

export default firebase;