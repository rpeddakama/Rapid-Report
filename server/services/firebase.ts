import { v4 as uuidv4 } from "uuid"

const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app")
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore")

const serviceAccount = require("../constants/firebasekey.json")

initializeApp({
  credential: cert(serviceAccount),
})

const db = getFirestore()

export const addToNewsletter = async (name, email) => {
  console.log("I'm at add news letter")
  return await db
    .collection("users")
    .doc(uuidv4())
    .set({ name: name, email: email })
}

export const test = () => {
  console.log("test")
}
