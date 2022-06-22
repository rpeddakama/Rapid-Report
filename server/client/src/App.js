import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import NewsSearch from "./components/NewsSearch"
import TopicSearch from "./components/TopicSearch"
import TopicPage from "./components/TopicPage"
import useStyles from "./styles"
import NewsletterModal from "./components/widgets/NewsletterModal"
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  const [data, setData] = useState({})
  const classes = useStyles()

  const URL = process.env.SERVER_URL

  useEffect(() => {
    handleSubmit()
  }, [])

  const getData = async () => {
    let data = await fetch(`${URL}`).then((data) => data.json())
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
    await fetch(`${URL}`, requestOptions)
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
          <Route exact path="/newsletter">
            <NewsletterModal></NewsletterModal>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
