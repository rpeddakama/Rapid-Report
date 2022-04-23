import { makeStyles } from "@material-ui/core/styles"
const drawerWidth = 300
const appBarHeight = 70

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
    },
    container: {
      margin: 0,
      padding: 0,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "#F5F2E7",
    },
    navText: {
      color: "#000000",
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
    card: {
      background: "white",
      padding: 10,
      display: "flex",
      margin: 10,
    },
    topicContainer: {
      display: "flex",
    },
    topicPage: {
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      alignItems: "center",
    },
    topicCard: {
      background: "#395B64",
      padding: 10,
      display: "flex",
      flexDirection: "column",
      margin: 10,
      width: 200,
      height: 120,
    },
    topicCardTitle: {
      fontSize: 20,
      textDecoration: "none",
    },
    topicCardFirstRow: {
      display: "flex",
      justifyContent: "space-between",
    },
    map: {
      width: "80%",
    },
    wordCardRow: {
      marginTop: 50,
      display: "flex",
    },
    wordCard: {
      color: "white",
      padding: 10,
      display: "flex",
      margin: 10,
    },
  }),
  { index: 1 }
)

export default useStyles
