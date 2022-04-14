import { useParams } from "react-router"
import Graph from "./widgets/Graph"

const TopicPage = () => {
  const { topic } = useParams()
  console.log("CURRENT TOPIC IS: " + topic)
  return (
    <div>
      <Graph topic={topic} />
    </div>
  )
}

export default TopicPage
