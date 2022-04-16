const WordCard = ({ analysis }) => {
  const sentiment = analysis[Object.keys(analysis)[0]]
  const word = Object.keys(analysis)[0]

  console.log("WORD CARD ANALYSIS: ", Object.keys(analysis))

  //   setWord(Object.keys(analysis)[0])
  //   setSentiment(analysis[word])
  return (
    <div>
      <h1>
        {word} has a sentiment of
        {sentiment}
      </h1>
      <h1>hello</h1>
    </div>
  )
}

export default WordCard
