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

  console.log("WORD CARD ANALYSIS: ", Object.keys(analysis))

  const getColor = () => {
    if (sentiment === undefined) return "#fff"
    if (sentiment > 0.5) return "#5ce805"
    if (sentiment < -0.5) return "#f02416"
    else return "#ffdd00"
  }

  //   setWord(Object.keys(analysis)[0])
  //   setSentiment(analysis[word])
  return (
    // <div>
    //   <h1>
    //     {word} has a sentiment of
    //     {sentiment}
    //   </h1>
    //   <h1>hello</h1>
    // </div>
    <Card>
      <Link to={`/problems/${file}`}>
        <CardActionArea>
          <CardContent>
            <Typography ent="p">
              <Box bgcolor="#000">{getDifficulty(file)}</Box>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default WordCard
