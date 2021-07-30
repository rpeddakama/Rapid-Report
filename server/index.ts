import express from "express"
import cors from "cors"
import { sentimentAnalysis } from "./analysis"
import { getTweetsByUser } from "./twitter"

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
  const { twitter, reddit, google, input } = req.body
  console.log("INPUT", input)
  const tweets = await getTweetsByUser("POTUS")
  const analysis = await sentimentAnalysis(["mike goat"])
  res.json({ sentiment: analysis.sentiment, score: analysis.score })
})

app.listen(10000, () => console.log("server runing on 10000"))
