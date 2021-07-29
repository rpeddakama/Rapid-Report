import useStyles from "../styles"
import { AppBar, Typography, Toolbar } from "@material-ui/core"

const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Title
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
