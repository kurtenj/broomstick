import{i as a,f as n,h as t,j as E}from"./firebase-vendor-DhlEE7UM.js";const f={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_FIREBASE_API_KEY:"AIzaSyCZR0wqP3ykQQ0oKvHe77_mKTc0Cpmf82c",VITE_FIREBASE_APP_ID:"1:623092716319:web:f19a71186f9b0f8bf1562a",VITE_FIREBASE_AUTH_DOMAIN:"broomstick-62142.firebaseapp.com",VITE_FIREBASE_MESSAGING_SENDER_ID:"623092716319",VITE_FIREBASE_PROJECT_ID:"broomstick-62142",VITE_FIREBASE_STORAGE_BUCKET:"broomstick-62142.firebasestorage.app"},_=[{name:"VITE_FIREBASE_API_KEY",required:!0},{name:"VITE_FIREBASE_AUTH_DOMAIN",required:!0},{name:"VITE_FIREBASE_PROJECT_ID",required:!0},{name:"VITE_FIREBASE_STORAGE_BUCKET",required:!0},{name:"VITE_FIREBASE_MESSAGING_SENDER_ID",required:!0},{name:"VITE_FIREBASE_APP_ID",required:!0},{name:"VITE_FIREBASE_MEASUREMENT_ID",required:!1}];function c(){const e=[];for(const r of _){const o=f[r.name];r.required&&(!o||o==="")&&e.push(r.name)}return{valid:e.length===0,missing:e}}const{valid:l,missing:I}=c();if(!l)throw new Error(`Firebase initialization failed: Missing environment variables: ${I.join(", ")}`);const d={apiKey:"AIzaSyCZR0wqP3ykQQ0oKvHe77_mKTc0Cpmf82c",authDomain:"broomstick-62142.firebaseapp.com",projectId:"broomstick-62142",storageBucket:"broomstick-62142.firebasestorage.app",messagingSenderId:"623092716319",appId:"1:623092716319:web:f19a71186f9b0f8bf1562a"};let i,s,m;try{i=a(d),s=n(i),m=t(i),E(s).then(()=>{}).catch(e=>{e.code==="failed-precondition"?console.error("Multiple tabs open, persistence can only be enabled in one tab at a time."):e.code==="unimplemented"?console.error("The current browser does not support all of the features required to enable persistence."):console.error("Error enabling Firestore persistence:",e)})}catch(e){throw console.error("Error initializing Firebase:",e),e instanceof Error&&(console.error("Error message:",e.message),"code"in e&&console.error("Error code:",e.code),"serverResponse"in e&&console.error("Server response:",e.serverResponse)),new Error("Firebase initialization failed. See console for details.")}export{s as d};
