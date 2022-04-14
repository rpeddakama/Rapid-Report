import { useParams } from "react-router"
import Graph from "./widgets/Graph"

const TopicPage = () => {
  const { topic } = useParams()
  console.log("CURRENT TOPIC IS: " + topic)
  return (
    <div width="500">
      <Graph></Graph>
    </div>
  )
}

export default TopicPage
