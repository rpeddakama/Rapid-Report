import { config } from "dotenv"
config()
import { TwitterApi } from "twitter-api-v2"

// Instanciate with desired auth type (here's Bearer v2 auth)
const client = new TwitterApi(process.env.twitter_bearer_token)

export const getTweetCountV2 = async (keyword) => {
  var params = {}
  let res = []
  const recentTweetsWithNode = await client.v2.tweetCountRecent(keyword)
  console.log(recentTweetsWithNode)
}
