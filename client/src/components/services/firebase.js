import "firebase/auth"
import "firebase/firestore"
import admin from "firebase-admin"
import { v4 as uuidv4 } from "uuid"

const serviceAccount = require("../constants/firebasekey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const auth = admin.auth()
const firestore = admin.firestore()

export const addToNewsletter = async (name, email) => {
  return await firestore
    .collection("users")
    .doc(uuidv4())
    .set({ name: name, email: email })
}
