import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import NewsSearch from "./components/NewsSearch"
import TopicSearch from "./components/TopicSearch"
import TopicPage from "./components/TopicPage"
import useStyles from "./styles"

const App = () => {
  const [data, setData] = useState({})
  const classes = useStyles()

  useEffect(() => {
    handleSubmit()
  }, [])

  const getData = async () => {
    let data = await fetch("http://localhost:10000").then((data) => data.json())
    console.log("get data", data)
    return data
  }

  const handleSubmit = async (twitter, reddit, google, input) => {
    console.log("handlesubmit")
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        twitter: twitter,
        reddit: reddit,
        google: google,
        input: input,
      }),
    }
    await fetch("http://localhost:10000", requestOptions)
      .then((data) => data.json())
      .then((res) => {
        // console.log(res)
        setData(res)
      })
  }

  return (
    <div className={classes.container}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <Sidebar handleSubmit={handleSubmit} />
              <NewsSearch data={data} getData={getData} />
            </div>
          </Route>
          <Route exact path="/topicSearch">
            <TopicSearch></TopicSearch>
          </Route>
          <Route exact path="/topicPage/:topic">
            <TopicPage></TopicPage>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
