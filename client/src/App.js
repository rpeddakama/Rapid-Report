import React, { useEffect, useState } from "react"
import useStyles from "./styles"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Home from "./components/Home"

const App = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    handleSubmit()
  }, [])

  const getData = async () => {
    let data = await fetch("http://localhost:10000").then((data) => data.json())
    console.log("get data", data)
    return data
  }

  const handleSubmit = async (twitter, reddit, google) => {
    console.log("handlesubmit")
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        twitter: twitter,
        reddit: reddit,
        google: google,
      }),
    }
    await fetch("http://localhost:10000", requestOptions)
      .then((data) => data.json())
      .then((res) => setData(res))
  }

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Navbar />
      <Sidebar handleSubmit={handleSubmit} />
      <Home data={data} getData={getData} />
      <Router>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
