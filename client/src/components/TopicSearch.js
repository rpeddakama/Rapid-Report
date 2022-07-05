import useStyles from "../styles"
import TopicCard from "./widgets/TopicCard"
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Box,
} from "@material-ui/core"

const TopicSearch = () => {
  const classes = useStyles()
  return (
    <div className={classes.topicContainer}>
      <TopicCard topic="war"></TopicCard>
      <TopicCard topic="education"></TopicCard>
      <TopicCard topic="guns"></TopicCard>
      <TopicCard topic="politics"></TopicCard>
      <TopicCard topic="environment"></TopicCard>
      <TopicCard topic="economy"></TopicCard>
      <TopicCard topic="activism"></TopicCard>
      <TopicCard topic="foreign policy"></TopicCard>
    </div>
  )
}

export default TopicSearch
