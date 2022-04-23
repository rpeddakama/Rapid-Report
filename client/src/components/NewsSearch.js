import React, { useEffect, useState } from "react"
import {
  Typography,
  Container,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import useStyles from "../styles"
import MediaCard from "./widgets/MediaCard"

const NewsSearch = ({ data, getData }) => {
  const classes = useStyles()

  useEffect(() => {
    console.log("Home data", data.length)
    if (data.length === undefined) console.log("yes")
  }, [data])

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: 100 }}>
        <Toolbar />
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon> */}
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {/* </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon> */}
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {/* </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
      {data.length !== undefined && data.map((dat) => <MediaCard data={dat} />)}
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
    </div>
  )
}

export default NewsSearch
