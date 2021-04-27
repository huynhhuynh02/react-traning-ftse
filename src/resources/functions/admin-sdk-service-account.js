import * as admin from 'firebase-admin';

var serviceAccount = require("./nista-7d773-firebase-adminsdk-tidcd-f642cc481a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nista-7d773-default-rtdb.europe-west1.firebasedatabase.app"
});

export default admin;