import { Link } from "react-router-dom"
import {
  Card,
  Typography,
  CardContent,
  CardActionArea,
} from "@material-ui/core"
import useStyles from "../../styles"
const TopicCard = ({ topic }) => {
  const classes = useStyles()
  return (
    <Card className={classes.topicCard}>
      <Link to={`/topicPage/${topic}`}>
        <CardActionArea>
          <CardContent>
            <Typography
              color="primary"
              gutterBottom
              variant="h5"
              component="h2"
            >
              click me
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              component="p"
            ></Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default TopicCard
