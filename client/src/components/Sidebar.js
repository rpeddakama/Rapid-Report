import { useState, useEffect } from "react"
import useStyles from "../styles"
import {
  Drawer,
  Toolbar,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  Button,
  TextField,
} from "@material-ui/core"

const Sidebar = ({ handleSubmit }) => {
  const [input, setInput] = useState("")
  const [twitter, setTwitter] = useState(false)
  const [reddit, setReddit] = useState(false)
  const [google, setGoogle] = useState(false)
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <FormControl>
          <Typography>Platforms</Typography>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={twitter}
                  onChange={() => setTwitter(!twitter)}
                  value="twitter"
                />
              }
              label="Twitter"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={reddit}
                  onChange={() => setReddit(!reddit)}
                  value="twitter"
                />
              }
              label="Reddit"
            />
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={google}
                  onChange={() => setGoogle(!google)}
                  value="google"
                />
              }
              label="Google"
            />
          </FormGroup>

          <TextField
            onChange={(e) => setInput(e.target.value)}
            value={input}
            margin="normal"
            id="outlined-basic"
            label="Hashtag"
            variant="outlined"
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => handleSubmit(twitter, reddit, google, input)}
          >
            Submit
          </Button>
        </FormControl>
      </div>
    </Drawer>
  )
}

export default Sidebar
