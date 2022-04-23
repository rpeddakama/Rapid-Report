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
    <div className="">
      <TopicCard topic="war"></TopicCard>
      <TopicCard topic="AI"></TopicCard>
      <TopicCard topic="politics"></TopicCard>
    </div>
  )
}

export default TopicSearch
