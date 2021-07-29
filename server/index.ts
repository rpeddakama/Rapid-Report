import express from "express"
import cors from "cors"
import { sentimentAnalysis } from "./analysis"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", async (req, res) => {
  var twit, red, goog
  const temp = "yoyo"
  res.json({ twit, red, goog })
})

app.post("/", async (req, res) => {
  const { twitter, reddit, google } = req.body
  const ans = await sentimentAnalysis()
  res.json({ sentiment: ans.sentiment, score: ans.score })
})

app.listen(10000, () => console.log("server runing on 10000"))
