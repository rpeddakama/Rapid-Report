import { useState, useEffect } from "react"
import { useParams } from "react-router"
import useStyles from "../styles"
import Graph from "./widgets/Graph"
import Map from "./widgets/Map"
import WordCard from "./widgets/WordCard"
import { Typography } from "@material-ui/core"

const TopicPage = () => {
  const { topic } = useParams()
  const [wordAnalysis, setWordAnalysis] = useState([])
  const classes = useStyles()
  const URL = process.env.SERVER_URL

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: topic,
      }),
    }
    fetch(`${URL}/topicWordSearch`, requestOptions)
      .then((data) => data.json())
      .then((res) => {
        setWordAnalysis(res)
        console.log("Word Analysis RES", res)
      })
  }, [])

  console.log("CURRENT TOPIC IS: " + topic)
  return (
    <div className={classes.topicPage}>
      <div style={{ display: "flex" }}>
        <Typography className={classes.topicPageTitle}>
          Sentiment Analysis for {topic.toUpperCase()}
        </Typography>
      </div>
      <Graph topic={topic} />
      <div className={classes.wordCardRow}>
        {wordAnalysis.map((analysis) => (
          <WordCard analysis={analysis} />
        ))}
      </div>
      <Map topic={topic} />
    </div>
  )
}

export default TopicPage
