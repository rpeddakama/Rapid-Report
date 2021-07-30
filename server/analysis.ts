import { config } from "dotenv"
import {
  TextAnalyticsClient,
  AzureKeyCredential,
} from "@azure/ai-text-analytics"
config()

const key = process.env.key
const endpoint = process.env.endpoint

const textAnalyticsClient = new TextAnalyticsClient(
  endpoint,
  new AzureKeyCredential(key)
)

export async function sentimentAnalysis(sentimentInput) {
  const client = textAnalyticsClient
  let sentimentResult
  try {
    sentimentResult = await client.analyzeSentiment(sentimentInput)
  } catch (e) {
    console.log("analyze sentiment error", e)
  }
  let res
  sentimentResult.forEach((document) => {
    console.log(`ID: ${document.id}`)
    console.log(`\tDocument Sentiment: ${document.sentiment}`)
    console.log(`\tDocument Scores:`)
    console.log(
      `\t\tPositive: ${document.confidenceScores.positive.toFixed(
        2
      )} \tNegative: ${document.confidenceScores.negative.toFixed(
        2
      )} \tNeutral: ${document.confidenceScores.neutral.toFixed(2)}`
    )
    console.log(`\tSentences Sentiment(${document.sentences.length}):`)
    document.sentences.forEach((sentence) => {
      console.log(`\t\tSentence sentiment: ${sentence.sentiment}`)
      console.log(`\t\tSentences Scores:`)
      console.log(
        `\t\tPositive: ${sentence.confidenceScores.positive.toFixed(
          2
        )} \tNegative: ${sentence.confidenceScores.negative.toFixed(
          2
        )} \tNeutral: ${sentence.confidenceScores.neutral.toFixed(2)}`
      )
    })
    res = {
      sentiment: document.sentiment,
      score: document.confidenceScores[document.sentiment],
    }
  })
  return res
}
