import express from "express"
import cors from "cors"
import { sentimentAnalysis } from "./analysis"
import {
  getTweetsByKeyword,
  getTweetsByUser,
  getTwitterPlaceIds,
} from "./twitter"
import { NewReleasesSharp } from "@material-ui/icons"
import { getNews } from "./news"
import { vaderSentimentAnalysis } from "./vader"
import fs from "fs"
import { getTweetCountV2 } from "./twitter2"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const jsonData = require("./constants/topicWords.json")

app.get("/", async (req, res) => {
  var twit, red, goog
  const temp = "yoyo"
  res.json({ twit, red, goog })
})

app.post("/", async (req, res) => {
  let { twitter, reddit, google, input } = req.body

  if (input === "" || input === undefined) input = "biden"

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
    analysis = [],
    counts = []
  for (var i = 0; i < past7Days.length; i++) {
    output.push(await getTweetsByKeyword(input, past7Days[i], 5))
    counts.push(
      await getTweetCountV2(input, past7Days[i], i === 0 ? "" : past7Days[i])
    )
    analysis.push(await vaderSentimentAnalysis(output[i]))
  }

  // analysis = await vaderSentimentAnalysis(output["tweets"])
  // console.log("DATESDATES", past7Days)
  // const analysis = await sentimentAnalysis(output["tweets"].slice(0, 10))
  res.json(analysis)
})

app.post("/topicWordSearch", async (req, res) => {
  let { input } = req.body

  let date = new Date()
  date.setDate(date.getDate())
  var strDate = date.toISOString().split("T")[0]

  let wordArr = jsonData["Topics"][input]["words"]
  let wordAnalysis = []

  for (var i = 0; i < wordArr.length; i++) {
    let output = await getTweetsByKeyword(wordArr[i], strDate, 5)
    let analysis = await vaderSentimentAnalysis(output)

    var x = 0.0
    analysis.forEach((element) => {
      x += element["score"]
    })
    x /= analysis.length

    wordAnalysis.push({ [wordArr[i]]: x })
  }

  res.json(wordAnalysis)
})

app.post("/getPlaceIds", async (req, res) => {
  // let { lat, long } = req.body
  let states = Object.keys(req.body)
  var obj = require("./constants/statePlaceIds.json")

  for (var i = 0; i < states.length; i++) {
    let lat = req.body[states[i]][0]
    let long = req.body[states[i]][1]
    // console.log("LAT LONG FOR: ", element, lat, long)
    console.log(states[i])
    let id = await getTwitterPlaceIds(lat, long)
    console.log("-----------")
    obj[states[i]] = id
  }

  const j = JSON.stringify(obj)
  fs.writeFile("./constants/statePlaceIds.json", j, (err) => {
    if (err) throw err
  })

  res.json("complete")
})

app.post("/v2Test", async (req, res) => {
  let { input } = req.body
  // await getTweetCountV2(input)
  res.json("done")
})

app.listen(10000, () => console.log("server runing on 10000"))
