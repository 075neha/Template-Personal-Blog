// firebase configuration for the web app
let firebaseConfig = {
    apiKey: "AIzaSyCKwyE6vq727ZKIN0PEboLAF4Bmr1e0Liw",
    authDomain: "personal-blogging-website.firebaseapp.com",
    projectId: "personal-blogging-website",
    storageBucket: "personal-blogging-website.appspot.com",
    messagingSenderId: "117779579910",
    appId: "1:117779579910:web:9ba5ff8f2513fd2256ef87"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
let db=firebase.firestore();
let auth=firebase.auth();