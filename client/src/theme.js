import { createTheme } from "@material-ui/core"

const theme = createTheme({
  palette: {
    primary: {
      main: "#4287f5",
    },
    background: {
      default: "#F5F2E7",
    },
  },
  overrides: {
    MuiTouchRipple: {
      child: {
        //button ripple color
        // backgroundColor: "#3500D3",
      },
    },
  },
})

export default theme
