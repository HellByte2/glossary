import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{  marginLeft: "2.5em" }}>
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">Глоссарий</Link>
          </Typography>
		  <Typography variant="h5" sx={{  marginLeft: "5em" }}>
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/mindmap">Mindmap</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}