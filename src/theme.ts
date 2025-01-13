import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green} from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: "#00ff85",
    },
    secondary: {
      main: green[500],
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;