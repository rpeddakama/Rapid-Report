import { config } from "dotenv"
config()
import { TwitterApi } from "twitter-api-v2"

// Instanciate with desired auth type (here's Bearer v2 auth)
const client = new TwitterApi(process.env.twitter_bearer_token)

export const getTweetCountV2 = async (keyword, start, end) => {
  let start_time = `${start}T00:00:00Z`,
    end_time = ""
  if (end === "") {
    console.log("WE ARE HERE, ", start)
    end_time = new Date(Date.now() - 30000).toISOString()
    console.log(end_time)
  } else end_time = `${end}T23:59:59Z`

  console.log(start_time, end_time)
  var params = {
    start_time: start_time,
    end_time: end_time,
  }

  const recentTweetsWithNode = await client.v2.tweetCountRecent(keyword, params)
  console.log(recentTweetsWithNode.meta)

  return recentTweetsWithNode.meta.total_tweet_count
}
