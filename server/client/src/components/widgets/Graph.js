import React, { useEffect, useState } from "react"
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
} from "recharts"
import useStyles from "../../styles"

const Graph = ({ topic }) => {
  const [vals, setVals] = useState()
  const [sentiments, setSentiments] = useState()
  const classes = useStyles()
  const URL = process.env.SERVER_URL

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: topic,
      }),
    }
    fetch(`${URL}/topicSearch`, requestOptions)
      .then((data) => data.json())
      .then((res) => {
        setVals(res)
        // console.log("RES", res)
        parseData(res)
      })
  }, [])

  const parseData = (values) => {
    var data2 = [],
      data3 = []
    if (!values) return
    console.log("PRE-PARSED", values)

    const past7Days = [6, 5, 4, 3, 2, 1, 0].map((index) => {
      let date = new Date()
      date.setDate(date.getDate() - index)
      var strDate = date.toLocaleDateString()
      return strDate
    })

    for (var i = 0; i < values.analysis.length; i++) {
      var x = 0.0
      values.analysis[i].forEach((element) => {
        x += element.score
      })
      x /= values.analysis[i].length
      data2.push({
        date: past7Days[i],
        Sentiment: x.toFixed(3),
        Volume: values.counts[i],
      })
    }
    console.log(data2)
    setSentiments(data2)
  }

  const testKey = [
    { date: 0, score: -0.7284 },
    { date: 1, score: -0.277 },
    { date: 2, score: 0.13288 },
    { date: 3, score: -0.05064 },
    { date: 4, score: -0.045139 },
    { date: 5, score: -0.045139 },
    { date: 6, score: -0.16502 },
  ]

  return (
    <div>
      <h1>{/* HELLO {data.length} and {vals[0].length} */}</h1>
      {sentiments && (
        <ComposedChart
          width={1200}
          height={600}
          data={sentiments}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" angle={-45} textAnchor="end" tick={false} />
          <YAxis
            yAxisId="left"
            domain={["dataMin - 0.5", "dataMax"]}
            label={{
              value: "Average Sentiment",
              angle: -90,
              position: "left",
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "Tweet Volume",
              angle: -90,
              position: "right",
            }}
          />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="Sentiment"
            stroke="#8884d8"
            activeDot={{ r: 10 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Volume"
            stroke="#82ca9d"
            activeDot={{ r: 10 }}
          />
        </ComposedChart>
      )}
    </div>
  )
}

export default Graph
