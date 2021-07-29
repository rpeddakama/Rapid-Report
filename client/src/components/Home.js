import React, { useEffect, useState } from "react"
import { Typography, Container, Toolbar } from "@material-ui/core"
import useStyles from "../styles"

const Home = ({ data, getData }) => {
  const classes = useStyles()

  useEffect(() => {
    // async function fetchAPI() {
    //   const bruh = await getData()
    //   console.log("home", bruh)
    //   setTest(bruh.twit === false ? "TWITTER IS FALSE" : "TWITTER IS TRUE")
    //   console.log("TEST", test)
    // }
    // fetchAPI()
    console.log("Home data", data)
    //   Object.keys(data).map((name, index) => console.log("pls", name))
  }, [data])

  return (
    <div className={`root ${classes.content}`}>
      <main className={classes.content}>
        <Toolbar />
        {Object.keys(data).map((name, index) =>
          data[name] === false ? (
            <h1>{name} is FALSE</h1>
          ) : (
            <h1>{name} is TRUE</h1>
          )
        )}
        {Object.keys(data).length === 0 && (
          <Typography paragraph>
            Please submit a search to view results
          </Typography>
        )}
      </main>
    </div>
  )
}

export default Home
