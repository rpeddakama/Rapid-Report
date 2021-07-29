import express from "express"
import cors from "cors"
import { promises as fs } from "fs"

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get("/", async (req, res) => {
  var twit, red, goog
  const temp = "yoyo"
  res.json({ twit, red, goog })
})

app.post("/", async (req, res) => {
  console.log("SERVER", req.body)
  const { twitter, reddit, google } = req.body
  res.json({ twitter: twitter, reddit: reddit, google: google })
})

app.listen(10000, () => console.log("server runing on 10000"))
