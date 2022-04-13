import useStyles from "../styles"
import TopicCard from "./widgets/TopicCard"

const TopicSearch = () => {
  const classes = useStyles()
  return (
    <div>
      <TopicCard topic="war"></TopicCard>
      <TopicCard topic="AI"></TopicCard>
      <TopicCard topic="politics"></TopicCard>
    </div>
  )
}

export default TopicSearch
