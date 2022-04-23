import useStyles from "../styles"
import { AppBar, Typography, Toolbar } from "@material-ui/core"
import { Link } from "react-router-dom"

const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.appBar} elevation={0}>
      <Toolbar>
        <Typography
          variant="h6"
          className={classes.navText}
          style={{ flex: 1 }}
        >
          Title
        </Typography>
        <Link to={"/"}>
          <Typography variant="h6" className={classes.navText}>
            News Search
          </Typography>
        </Link>
        <Link to={"/topicSearch"}>
          <Typography
            variant="h6"
            className={classes.navText}
            style={{ marginLeft: 50 }}
          >
            Topic Search
          </Typography>
        </Link>
        <Typography
          variant="h6"
          className={classes.navText}
          style={{ marginLeft: 50 }}
        >
          Newsletter
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
