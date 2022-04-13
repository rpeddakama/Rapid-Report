import { useParams } from "react-router"

const TopicPage = () => {
  const { topic } = useParams()
  console.log("CURRENT TOPIC IS: " + topic)
  return (
    <div>
      <h1>topic page test</h1>
    </div>
  )
}

export default TopicPage
