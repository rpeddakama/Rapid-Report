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
    <Link to={`/topicPage/${topic}`}>
      <Card className={classes.topicCard}>
        {/* <Link to={`/problems/${file}`}> */}
        <CardActionArea>
          <CardContent>
            <Typography
              color="primary"
              gutterBottom
              variant="h5"
              component="h2"
            ></Typography>
            <Typography
              variant="body1"
              color="primary"
              component="p"
            ></Typography>
          </CardContent>
        </CardActionArea>
        {/* </Link> */}
      </Card>
    </Link>
  )
}

export default TopicCard
