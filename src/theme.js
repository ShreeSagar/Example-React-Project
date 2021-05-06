import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors';
import { blue} from '@material-ui/core/colors';

const theme=createMuiTheme({
  palette:
  {
      primary: purple,
      secondary: blue,
  },
});
export default theme;