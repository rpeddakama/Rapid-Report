import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core"
import useStyles from "../../styles"

const WordCard = ({ analysis }) => {
  const sentiment = analysis[Object.keys(analysis)[0]]
  const word = Object.keys(analysis)[0]
  const classes = useStyles()

  console.log("WORD CARD ANALYSIS: ", word, sentiment)

  // const getColor = () => {
  //   if (sentiment === undefined) return "#fff"
  //   if (sentiment > 0.2) return "#5ce805"
  //   if (sentiment < -0.2) return "#f02416"
  //   else return "#ffdd00"
  // }

  const getColor = () => {
    var sent = sentiment

    var col
    if (sent < -0.1) col = `rgb(${255 * -1 * sent + 60}, 0, 0)`
    else if (sent > 0.1) col = `rgb(0, ${255 * 1 * sent + 60}, 0)`
    else col = `rgb(255, 255, 40)`

    console.log("COL", col)
    return col
  }

  return (
    <Card className={classes.wordCard} style={{ backgroundColor: getColor() }}>
      {word.toUpperCase()}
    </Card>
  )
}

export default WordCard
