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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]
var data2 = []

const Graph = ({ topic }) => {
  const [vals, setVals] = useState()

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
    // .then(() => console.log("finished"))
    // .then(() => parseData())
  }, [])

  const parseData = (values) => {
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
    console.log(data2[0]["score"])
  }

  //   console.log("VALUES", values, data[0].name)
  //   if (values) {
  // console.log(values.output)
  // data[0].name = values.output.dates[0]
  // console.log(data)
  //   }
  const testKey = [
    { keys: "a", score: 2 },
    { keys: "x", score: 4 },
    { keys: "y", score: 5 },
  ]
  return (
    <div>
      <ComposedChart
        width={500}
        height={300}
        data={testKey}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="keys" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="score"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        {/* <Bar dataKey="pv" barSize={10} fill="#413ea0" /> */}
      </ComposedChart>
      {/* <h1>{vals && data2[0]["score"]}</h1> */}
    </div>
    // <ComposedChart
    //   width={500}
    //   height={300}
    //   data={data}
    //   margin={{
    //     top: 5,
    //     right: 30,
    //     left: 20,
    //     bottom: 5,
    //   }}
    // >
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="name" />
    //   <YAxis />
    //   <Tooltip />
    //   <Legend />
    //   <Line
    //     type="monotone"
    //     dataKey="pv"
    //     stroke="#8884d8"
    //     activeDot={{ r: 8 }}
    //   />
    //   {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    //   <Bar dataKey="pv" barSize={10} fill="#413ea0" />
    // </ComposedChart>
  )
}

export default Graph
