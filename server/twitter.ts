import { config } from "dotenv"
import axios from "axios"
config()
import twitter from "twitter"
var Twitter = twitter

var client = new Twitter({
  consumer_key: process.env.twitter_key,
  consumer_secret: process.env.twitter_secret_key,
  access_token_key: process.env.twitter_access_token,
  access_token_secret: process.env.twitter_access_token_secret,
})

export const getTweetsByKeyword = (keyword) => {
  var params = { q: keyword, lang: "en", result_type: "mixed", count: 5 }
  let res = []
  client.get("search/tweets", params, (error, tweets, response) => {
    console.log(error)
    if (!error) {
      for (var i = 0; i < tweets.statuses.length; i++) {
        if (tweets.statuses[i].text.substring(0, 2) !== "RT") {
          res.push(tweets.statuses[i].text)
          console.log(tweets.statuses[i].user.name)
          console.log(tweets.statuses[i].text)
          console.log(
            "\n<------------------------------NEXT ONE---------------------------->\n"
          )
        }
      }
    }
  })
  return res
}

export const getTweetsByUser = async (keyword) => {
  if (keyword === null) keyword = "POTUS"
  var params = { screen_name: keyword }
  let res = ["?"]
  await client.get(
    "statuses/user_timeline",
    params,
    (error, tweets, response) => {
      console.log("THERE IS AN ERROR", error)
      if (!error) {
        for (var i = 0; i < tweets.length; i++) {
          if (tweets[i].text.substring(0, 2) !== "RT") {
            res.push(tweets[i].text)
            // console.log(tweets[i].user. name)
            console.log(tweets[i].text)
            // console.log(
            //   "\n<------------------------------NEXT ONE---------------------------->\n"
            // )
          }
        }
      }
    }
  )
  console.log("RES", res)
  return res
}

//getTweetsByKeyword("charles leclerc")
//getTweetsByUser("charles")
