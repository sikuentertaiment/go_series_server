const serverUrl = process.argv[2];
const adminfb = require("firebase-admin");
const { getDatabase } = require('firebase-admin/database');
const { getStorage, getDownloadURL, getFileBucket } = require('firebase-admin/storage');
const serviceAccount = require("../credentials/warungkuproject-45a28-firebase-adminsdk-ljd7p-fcc0c51c37.json");
adminfb.initializeApp({
  credential: adminfb.credential.cert(serviceAccount),
  databaseURL: "https://warungkuproject-45a28-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageUrl:"gs://warungkuproject-45a28.appspot.com"
});
const clicksflysign = 'afa975b031fbfba062d51e3efd3cca5344d14a14';

const db = getDatabase();

const set = async ()=>{
	await db.ref('server').set(serverUrl);
	console.log('server successfully setted to:',serverUrl);
	process.exit();
}

set();