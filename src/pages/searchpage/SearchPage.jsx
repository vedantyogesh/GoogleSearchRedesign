import React, { useState } from "react";
import "./SearchPage.css";
import { useStateValue } from "../../stateProvider";
import useGoogleSearch from "../../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../../components/search/Search";

//Material UI
import Grid from "@material-ui/core/Grid";
import SettingIcons from "@material-ui/icons/Settings";
import Avatar from "@material-ui/core/Avatar";
import AppIcon from "@material-ui/icons/Apps";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Box, IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const useStyles = makeStyles((theme) => ({
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: theme.spacing(2),
  },
  drawer: {
    backgroundColor: theme.palette.secondary.main,
  },
  drawerItem: {
    ...theme.typography.tab,
    color : '#fff'
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function SearchPage() {
  const theme = useTheme();
  const classes = useStyles();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  const [openDrawer, setopenDrawer] = useState(false);
  const [{ term }, dispatch] = useStateValue();
  const [value, setValue] = useState(0);

  const { data } = useGoogleSearch(term);

  const handleTabChange = (e, value) => {
    setValue(value);
  };

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleTabChange}
        className='tab-container'
        indicatorColor='secondary'
      >
        <Tab
          className={classes.tab}
          component={Link}
          to='/search'
          label='All'
        />
        <Tab className={classes.tab} component={Link} to='/' label='Images' />
        <Tab className={classes.tab} component={Link} to='/' label='Videos' />
        <Tab className={classes.tab} component={Link} to='/' label='News' />
        <Tab className={classes.tab} component={Link} to='/' label='Shopping' />
      </Tabs>
      <IconButton>
        <SettingIcons color='primary' />
      </IconButton>
      
      <Avatar
        src='https://images.unsplash.com/photo-1547147607-6eab7b49f3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
        alt='Remmy'
        className='search-iconButtons'
      />
    </>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        onOpen={() => setopenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <List>
          <ListItem  component={Link} to='/'>
            <Link to='/'>
              <img
                src='https://uploads-ssl.webflow.com/5b72c51b79ce4e086b722f7e/5b7323e0578e6e6e19263608_Google_logo_white_2015.png'
                alt='Google Logo'
                className='search-logo-drawer'
              />
            </Link>
          </ListItem>
          <ListItem divider button onClick={() => setopenDrawer(false)} component={Link} to='/'>
            <ListItemText className={classes.drawerItem} >Home</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setopenDrawer(false)} component={Link} to='/'>
            <ListItemText className={classes.drawerItem} >images</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setopenDrawer(false)} component={Link} to='/'>
            <ListItemText className={classes.drawerItem} >Videos</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setopenDrawer(false)} component={Link} to='/'>
            <ListItemText className={classes.drawerItem} >News</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => setopenDrawer(false)} component={Link} to='/'>
            <ListItemText className={classes.drawerItem} >Settings</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setopenDrawer(!openDrawer)}>
        <AppIcon color='primary' />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <Box className='searchPage'>
        <ElevationScroll>
          <AppBar position='fixed' color='secondary'>
            <Toolbar>
              <Link to='/'>
                <img
                  src='https://uploads-ssl.webflow.com/5b72c51b79ce4e086b722f7e/5b7323e0578e6e6e19263608_Google_logo_white_2015.png'
                  alt='Google Logo'
                  className='search-logo'
                />
              </Link>
              <Box className='searchPage-headerBody'>
                <Search hideButtons className='searchPage-Input' />
              </Box>
              {matches ? drawer : tabs}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </Box>
      <Grid container className='searchPage-body'>
        <Grid item md={8}>
          {true && (
            <Grid container className='searchPage-resultCount'>
              About <span>{data?.searchInformation.formattedTotalResults}</span>{" "}
              results(
              {data?.searchInformation.formattedSearchTime} seconds) for {term}
            </Grid>
          )}
        </Grid>
        <Grid item md={11}>
          <Grid
            container
            className='searchPage-results'
            justify='space-between'
          >
            {data?.items.map((item) => (
              <Grid item md={4}>
                <div className='searchPage-result'>
                  <Divider
                    style={{
                      backgroundColor: "#008af4",
                      marginBottom: "1.5rem",
                    }}
                  />
                  <a href={item.link} className='searchPage-title'>
                    <h2>{item.title}</h2>
                  </a>
                  <a href={item.link} className='searchPage-displaylink'>
                    {item.displayLink}
                  </a>
                  <p className='searchPage-resultSnippet'>{item.snippet}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default SearchPage;


//     <Grid container className="searchPage-results">
        // {
        //   data?.items.map((item) => (
            // <div className='searchPage-result'>
            //   <a href={item.link} className='searchPage-displaylink'>
            //     {item.pagemap?.cse_image?.length > 0 &&
            //       item.pagemap?.cse_image[0]?.src && (
            //         <img
            //           className='searchPage-Image'
            //           src={
            //             item.pagemap?.cse_image?.length > 0 &&
            //             item.pagemap?.cse_image[0]?.src
            //           }
            //           alt=''
            //         />
            //       )}
            //     {item.displayLink}
            //   </a>
            //   <a href={item.link} className='searchPage-title'>
            //     <h2>{item.title}</h2>
            //   </a>
            //   <p className='searchPage-resultSnippet'>{item.snippet}</p>
            // </div>
        //   ));
        // }
        
//     </Grid>
// </div>
