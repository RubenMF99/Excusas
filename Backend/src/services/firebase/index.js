const {
    getStorage,
    ref,
    uploadString,
    getDownloadURL,
     } = require("firebase/storage");

//gs://excusasunimag.appspot.com/soportes
module.exports.firebaseConfig = {
  apiKey: "AIzaSyAioKTczp1XF1RR7VRcnjB5xTATBbf3qZQ",
  authDomain: "excusasunimag.firebaseapp.com",
  projectId: "excusasunimag",
  storageBucket: "excusasunimag.appspot.com",
  messagingSenderId: "947871497620",
  appId: "1:947871497620:web:2b725d8977e62f8b2e6381",
};


module.exports.uploadSupport = async (file, path) => {
  const storage = getStorage();
  const metadata = {
    contentType: "pdf",
  };

  try {
    const storageRef = ref(storage, path);
    await uploadString(storageRef, file.split(",")[1], "base64", metadata);

    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.log(error);
  }
};
