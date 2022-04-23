import useStyles from "../styles"
import { AppBar, Typography, Toolbar } from "@material-ui/core"

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
        <Typography variant="h6" className={classes.navText}>
          News Search
        </Typography>
        <Typography
          variant="h6"
          className={classes.navText}
          style={{ marginLeft: 50 }}
        >
          Topic Search
        </Typography>
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
