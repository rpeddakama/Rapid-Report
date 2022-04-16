import { config } from "dotenv"
config()
import twitter from "twitter"
var Twitter = twitter

var client = new Twitter({
  consumer_key: process.env.twitter_key,
  consumer_secret: process.env.twitter_secret_key,
  access_token_key: process.env.twitter_access_token,
  access_token_secret: process.env.twitter_access_token_secret,
})

export const getTweetsByKeyword = (keyword, date, count) => {
  console.log("at keywords", keyword)
  var params = {
    q: `${keyword}`,
    lang: "en",
    result_type: "popular",
    count: count,
    until: date,
    after: date,
  }
  let texts = [],
    dates = []
  return new Promise<string[]>((resolve, reject) => {
    client.get("search/tweets", params, (error, tweets, response) => {
      console.log(error)
      if (!error) {
        for (var i = 0; i < tweets.statuses.length; i++) {
          console.log(
            "LOC: ",
            tweets.statuses[i].user.location,
            tweets.statuses[i].text
          )
          if (tweets.statuses[i].text.substring(0, 2) !== "RT") {
            dates.push(tweets.statuses[i].created_at)
            texts.push(tweets.statuses[i].text)
          }
        }
      }
      console.log("RES has a length", texts.length)
      resolve(texts)
    })
  })
}

export const getTweetsByUser = async (keyword) => {
  if (keyword === null) keyword = "POTUS"
  var params = { screen_name: keyword }
  let res = []
  return new Promise<string[]>((resolve, reject) => {
    client.get("statuses/user_timeline", params, (error, tweets, response) => {
      console.log("THERE IS AN ERROR", error)
      if (!error) {
        for (var i = 0; i < tweets.length; i++) {
          if (tweets[i].text.substring(0, 2) !== "RT") {
            res.push(tweets[i].text)
          }
        }
      }
      console.log("RES has a length", res.length)
      resolve(res)
    })
  })
}
