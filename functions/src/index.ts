import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });
//

// テストとしてFirestoreにデータを入れてみた
// export const firestoreTest = functions.https.onRequest(async (req, res) => {
//   admin.initializeApp({
//     credential: admin.credential.applicationDefault(),
//     databaseURL: 'https://python-hackathon-635ec.firebaseio.com'
//   });
//   const fs = admin.firestore();
//   await fs.collection('hoge').doc('hoge').set({hoge: 'hoge'});
//   res.send("Update Firestore");
// });
