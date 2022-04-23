import React, { useEffect, useState } from "react"
import {
  Typography,
  Container,
  Toolbar,
  Divider,
  List,
  ListItem,
  Drawer,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
  TextField,
  ListItemText,
} from "@material-ui/core"
import useStyles from "../styles"
import MediaCard from "./widgets/MediaCard"
import Sidebar from "./Sidebar"

const NewsSearch = ({ data, getData }) => {
  const classes = useStyles()

  useEffect(() => {
    console.log("Home data", data.length)
    if (data.length === undefined) console.log("yes")
  }, [data])

  return (
    <div style={{ marginTop: 20 }}>
      {data.length !== undefined && data.map((dat) => <MediaCard data={dat} />)}
      {data.length === undefined && <h1>Fetching data</h1>}
    </div>
  )
}

export default NewsSearch
