import express from "express"
import cors from "cors"
import { sentimentAnalysis } from "./analysis"
import { getTweetsByKeyword, getTweetsByUser } from "./twitter"
import { NewReleasesSharp } from "@material-ui/icons"
import { getNews } from "./news"
import { vaderSentimentAnalysis } from "./vader"
import jsonDataImport from "./topicWords.json"

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

  console.log("INPUT", input)
  if (input === "" || input === undefined) input = "POTUS"

  let date = new Date()
  date.setDate(date.getDate())
  var strDate = date.toISOString().split("T")[0]

  const output = await getTweetsByKeyword(input, strDate, 50)

  // console.log("TWEETS", output["tweets"])
  const analysis = await sentimentAnalysis(output.slice(0, 10))
  // console.log("ANALYSIS", analysis)

  // await getNews()

  res.json(analysis)
})

app.post("/topicSearch", async (req, res) => {
  let { input } = req.body
  const past7Days = [0, 1, 2, 3, 4, 5, 6].map((index) => {
    let date = new Date()
    date.setDate(date.getDate() - index)
    var strDate = date.toISOString().split("T")[0]
    return strDate
  })

  let output = [],
    analysis = []
  for (var i = 0; i < past7Days.length; i++) {
    output.push(await getTweetsByKeyword(input, past7Days[i], 5))
    analysis.push(await vaderSentimentAnalysis(output[i]))
  }

  // analysis = await vaderSentimentAnalysis(output["tweets"])
  console.log("DATESDATES", past7Days)
  // const analysis = await sentimentAnalysis(output["tweets"].slice(0, 10))
  res.json(analysis)
})

app.post("/topicWordSearch", async (req, res) => {
  let { input } = req.body

  let analysis = []

  let date = new Date()
  date.setDate(date.getDate())
  var strDate = date.toISOString().split("T")[0]

  // let output = await getTweetsByKeyword(input, strDate, 5)
  // analysis.push(await vaderSentimentAnalysis(output))
  console.log("HERE YO", input)

  res.json(input)
})

app.listen(10000, () => console.log("server runing on 10000"))
