import express from "express"
import cors from "cors"
import path from "path"
import { config } from "dotenv"
import { sentimentAnalysis } from "./analysis"
import {
  generateSentimentByStateData,
  getTweetsByKeyword,
  getTweetsByUser,
  getTwitterPlaceIds,
} from "./twitter"
import { NewReleasesSharp } from "@material-ui/icons"
import { getNews } from "./news"
import { vaderSentimentAnalysis } from "./vader"
import fs from "fs"
import { getTweetCountV2 } from "./twitter2"
import { addToNewsletter } from "./services/firebase"

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

  if (input === "" || input === undefined) input = "biden"

  let date = new Date()
  date.setDate(date.getDate())
  var strDate = date.toISOString().split("T")[0]

  var output, analysis
  try {
    output = await getTweetsByKeyword(input, strDate, 50)
    analysis = await vaderSentimentAnalysis(output.slice(0, 10))
  } catch (e) {
    console.log(e)
    analysis = "ERROR"
  }
  // console.log("TWEETS", output["tweets"])
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

  try {
    for (var i = 0; i < past7Days.length; i++) {
      output.push(await getTweetsByKeyword(input, past7Days[i], 5))
      counts.push(
        await getTweetCountV2(input, past7Days[i], i === 0 ? "" : past7Days[i])
      )
      analysis.push(await vaderSentimentAnalysis(output[i]))
    }
  } catch (e) {
    console.log(e)
    res.json("ERROR")
  }

  // analysis = await vaderSentimentAnalysis(output["tweets"])
  // console.log("DATESDATES", past7Days)
  // const analysis = await sentimentAnalysis(output["tweets"].slice(0, 10))
  res.json({ analysis: analysis, counts: counts })
})

app.post("/topicWordSearch", async (req, res) => {
  let { input } = req.body

  let date = new Date()
  date.setDate(date.getDate())
  var strDate = date.toISOString().split("T")[0]

  const jsonData = require("./constants/topicWords.json")
  let wordArr = jsonData["Topics"][input]["words"]
  let wordAnalysis = []

  try {
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
  } catch (e) {
    console.log(e)
    res.json("ERROR")
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
    let id = ""
    try {
      id = await getTwitterPlaceIds(lat, long)
    } catch (e) {
      console.log(e)
    }
    console.log("-----------")
    obj[states[i]] = id
  }

  const j = JSON.stringify(obj)
  fs.writeFile("./constants/statePlaceIds.json", j, (err) => {
    if (err) throw err
  })

  res.json("complete")
})

app.post("/generateSentimentByState", async (req, res) => {
  const stateJsonData = require("./constants/statePlaceIds.json"),
    { input } = req.body
  const states = Object.keys(stateJsonData)

  let averageSentiment = {}
  var obj = require("./constants/stateSentimentByTopic.json")

  try {
    for (let i = 0; i < states.length; i++) {
      let output = await generateSentimentByStateData(
        input,
        stateJsonData[states[i]]
      )
      let analysis = await vaderSentimentAnalysis(output)
      let sum = 0.0
      for (let j = 0; j < analysis.length; j++) sum += analysis[j].score
      sum /= analysis.length

      averageSentiment[states[i]] = sum
      obj[input] = averageSentiment
    }
  } catch (e) {
    console.log(e)
  }

  const j = JSON.stringify(obj)
  fs.writeFile("./constants/stateSentimentByTopic.json", j, (err) => {
    if (err) throw err
  })

  res.json(averageSentiment)
})

app.post("/getStateSentiments", async (req, res) => {
  const { input } = req.body
  console.log("STATE INPUT", input)
  var obj = require("./constants/stateSentimentByTopic.json")

  console.log(obj[input])
  res.json(obj[input])
})

app.post("/signupNewsletter", async (req, res) => {
  const { name, email } = req.body
  console.log("at newslettersignup", name, email)

  await addToNewsletter(name, email)

  res.json("done")
})

app.use(express.static(path.join(__dirname, "/client/build")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"))
})

app.listen(process.env.PORT || 8000, () => console.log("server running"))
