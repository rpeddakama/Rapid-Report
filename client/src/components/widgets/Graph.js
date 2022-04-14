import React, { PureComponent, useEffect, useState } from "react"
import axios from "axios"
import {
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts"

const Graph = ({ topic }) => {
  const [vals, setVals] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: topic,
      }),
    }
    fetch("http://localhost:10000/topicSearch", requestOptions)
      .then((data) => data.json())
      .then((res) => {
        setVals(res)
        console.log("RES", res)
        parseData(res)
      })
  }, [])

  const parseData = (values) => {
    var data2 = []
    console.log("PARSED0", values)
    if (!values) return
    console.log("PARSED", values)
    for (var i = 0; i < values.length; i++) {
      var x = 0.0
      values[i].forEach((element) => {
        x += element.score
      })
      x /= values[i].length
      data2.push({ date: i, score: x })
    }
    console.log(data2)
    setData(data2)
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
      {data && (
        <ComposedChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </ComposedChart>
      )}
    </div>
  )
}

export default Graph
