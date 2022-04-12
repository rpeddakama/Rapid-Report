import express from "express"
import cors from "cors"
import { sentimentAnalysis } from "./analysis"
import { getTweetsByKeyword, getTweetsByUser } from "./twitter"
import { NewReleasesSharp } from "@material-ui/icons"
import { getNews } from "./news"

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
  let { twitter, reddit, google, input } = req.body

  // console.log("INPUT", input)
  // if (input === "" || input === undefined) input = "POTUS"
  // const tweets = await getTweetsByKeyword(input)
  // console.log("TWEETS", tweets)
  // const analysis = await sentimentAnalysis(tweets.slice(0, 10))
  // console.log("ANALYSIS", analysis)

  await getNews()

  // res.json(analysis)
})

app.listen(10000, () => console.log("server runing on 10000"))
