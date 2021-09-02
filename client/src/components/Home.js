import React, { useEffect, useState } from "react"
import { Typography, Container, Toolbar } from "@material-ui/core"
import useStyles from "../styles"
import MediaCard from "./MediaCard"

const Home = ({ data, getData }) => {
  const classes = useStyles()

  useEffect(() => {
    console.log("Home data", data.length)
    if (data.length === undefined) console.log("yes")
  }, [data])

  return (
    <div className={`root ${classes.content}`}>
      <main className={classes.content}>
        <Toolbar />
        {data.length !== undefined &&
          data.map((dat) => <MediaCard data={dat} />)}
        {data.length === undefined && (
          <h1>Please do something to get stuff yo</h1>
        )}
        {/* {Object.keys(data).map((name, index) =>
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
        )} */}
      </main>
    </div>
  )
}

export default Home
