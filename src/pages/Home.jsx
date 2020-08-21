import React from "react";

//Material UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";

import "./Home.css";
import Search from "../components/search/Search";

function Home() {
  return (
    <div className="home">
      <Grid container direction="column" alignItems="center">
        <Grid container className="home-header" alignItems="center">
          <Grid item md={1}>
            <Grid container className="home-header-left" spacing={3}>
              <Grid item>
                <Link to="/about">
                  <Typography gutterBottom>About</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/store">
                  <Typography gutterBottom>Store</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2}>
            <Grid
              container
              className="home-header-right"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <Link to="/gmail">
                  <Typography gutterBottom>Gmail</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/images">
                  <Typography gutterBottom>Images</Typography>
                </Link>
              </Grid>
              <Grid item>
                <AppsIcon fontSize="small" />
              </Grid>
              <Grid item>
                <Avatar />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="home-body" alignItems="center">
          <Grid item md={3}>
            <img
              src="https://pngimg.com/uploads/google/google_PNG19631.png"
              alt="Google Logo"
              className="home-logo"
            />
          </Grid>
          <Grid item>
            <Search />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
