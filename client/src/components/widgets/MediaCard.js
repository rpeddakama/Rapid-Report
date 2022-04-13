import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core"
import useStyles from "../../styles"

const MediaCard = ({ data }) => {
  const classes = useStyles()

  const getColor = () => {
    return data["sentiment"] === "negative"
      ? "#eb4034"
      : data["sentiment"] === "positive"
      ? "#13d40d"
      : "#deda14"
  }

  return (
    <Card className={classes.card} bgcolor="black">
      <Box bgcolor={getColor()}>
        <CardActionArea>
          <CardContent>
            <Typography>{data["text"]}</Typography>
          </CardContent>
        </CardActionArea>
      </Box>
    </Card>
  )
}

export default MediaCard
