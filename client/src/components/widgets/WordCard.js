import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core"
const WordCard = ({ analysis }) => {
  const sentiment = analysis[Object.keys(analysis)[0]]
  const word = Object.keys(analysis)[0]

  console.log("WORD CARD ANALYSIS: ", word, sentiment)

  const getColor = () => {
    if (sentiment === undefined) return "#fff"
    if (sentiment > 0.2) return "#5ce805"
    if (sentiment < -0.2) return "#f02416"
    else return "#ffdd00"
  }

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography ent="p">
            <Box bgcolor={getColor()}>
              {word}; sentiment: {sentiment}
            </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default WordCard
