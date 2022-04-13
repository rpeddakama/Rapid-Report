import useStyles from "../styles"
import TopicCard from "./widgets/TopicCard"

const TopicSearch = () => {
  const classes = useStyles()
  return (
    <div>
      <TopicCard></TopicCard>
      <TopicCard></TopicCard>
      <TopicCard></TopicCard>
    </div>
  )
}

export default TopicSearch
