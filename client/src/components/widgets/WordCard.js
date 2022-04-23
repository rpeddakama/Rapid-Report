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

  const getColor = () => {
    if (sentiment === undefined) return "#fff"
    if (sentiment > 0.2) return "#5ce805"
    if (sentiment < -0.2) return "#f02416"
    else return "#ffdd00"
  }

  return <Card className={classes.wordCard}>{word.toUpperCase()}</Card>
}

export default WordCard
