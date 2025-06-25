import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MovieIcon from "@mui/icons-material/Movie";
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MovieIcon />
            </IconButton>
            <Button color="inherit">
              <Link
                to="/addmovie"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Add Movie
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="/viewmovie"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                View Movie
              </Link>
            </Button>

            <Typography
              variant="h6"
              component="div"
              style={{ alignContent: "center" }}
              sx={{ flexGrow: 1 }}
            >
              MOVIES
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar