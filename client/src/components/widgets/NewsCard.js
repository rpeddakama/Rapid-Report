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
    var sent = data["score"]

    var col
    if (sent < -0.1) col = `rgb(${255 * -1 * sent + 60}, 0, 0)`
    else if (sent > 0.1) col = `rgb(0, ${255 * 1 * sent + 60}, 0)`
    else col = `rgb(255, 255, 40)`

    console.log("COL", col)
    return col
  }

  return (
    <Card className={classes.card} bgcolor="black">
      <Box bgcolor={getColor()}>
        {/* <CardActionArea> */}
        <CardContent>
          <Typography>{data["text"]}</Typography>
        </CardContent>
        {/* </CardActionArea> */}
      </Box>
    </Card>
  )
}

export default MediaCard
