import { makeStyles } from "@material-ui/core/styles"
const drawerWidth = 300
const appBarHeight = 70

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      margin: 20,
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    card: {
      background: "white",
      padding: 10,
      display: "flex",
      margin: 10,
    },
    topicCard: {
      background: "gray",
      padding: 10,
      display: "flex",
      margin: 10,
    },
  }),
  { index: 1 }
)

export default useStyles
