import { Link } from "react-router-dom"
import { Image } from "@material-ui/icons"
import {
  Card,
  Typography,
  CardContent,
  CardActionArea,
} from "@material-ui/core"

import useStyles from "../../styles"
import logo from "../constants/imgs/war.png"

const TopicCard = ({ topic }) => {
  const classes = useStyles()

  let topicPic = require(`../constants/imgs/${topic}.png`).default
  return (
    <Link to={`/topicPage/${topic}`}>
      <Card className={classes.topicCard}>
        {/* <CardActionArea> */}
        {/* <CardContent> */}
        <div className={classes.topicCardFirstRow}>
          <Typography className={classes.topicCardTitle}>
            {topic.toUpperCase()}
          </Typography>
        </div>
        <img src={topicPic} />
        {/* </CardContent> */}
        {/* </CardActionArea> */}
      </Card>
    </Link>
  )
}

export default TopicCard
