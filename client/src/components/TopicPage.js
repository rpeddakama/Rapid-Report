import { useState, useEffect } from "react"
import { useParams } from "react-router"
import Graph from "./widgets/Graph"
import WordCard from "./widgets/WordCard"

const TopicPage = () => {
  const { topic } = useParams()

  const [wordAnalysis, setWordAnalysis] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: topic,
      }),
    }
    fetch("http://localhost:10000/topicWordSearch", requestOptions)
      .then((data) => data.json())
      .then((res) => {
        setWordAnalysis(res)
        console.log("Word Analysis RES", res)
      })
  }, [])

  console.log("CURRENT TOPIC IS: " + topic)
  return (
    <div>
      <Graph topic={topic} />
      {wordAnalysis.map((analysis) => (
        <WordCard analysis={analysis} />
      ))}
    </div>
  )
}

export default TopicPage
