const vader = require("vader-sentiment")

export async function vaderSentimentAnalysis(sentimentInput: string[]) {
  let res = []
  for (var inp in sentimentInput) {
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(inp)
    res.push({
      text: inp,
      sentiment:
        intensity.compound > 0.5
          ? "positive"
          : intensity.compound < 0.5
          ? "negative"
          : "neutral",
      score: intensity.compound,
    })
  }
  return res
}

// const input = 'VADER is very smart, handsome, and funny';
// const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
// console.log(intensity);
// {neg: 0.0, neu: 0.299, pos: 0.701, compound: 0.8545}
