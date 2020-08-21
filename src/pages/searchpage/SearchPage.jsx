import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../../stateProvider';
import useGoogleSearch from '../../useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from '../../components/search/Search'
//Material UI
import Grid  from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from "@material-ui/icons/Image";
import DescriptionIcon from "@material-ui/icons/Description";
import LocalOffer from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";



function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    
    return (
        <div className="search-page">
            <Grid container className="searchPage-header">
                <Grid item md={2}>
                    <Link to="/">
                        <img
                            src="https://pngimg.com/uploads/google/google_PNG19631.png"
                            alt="Google Logo"
                            className="search-logo"
                        />
                    </Link>
                </Grid>
                <Grid item md={6} className="searchPage-headerBody">
                    <Search hideButtons/>
                </Grid>
                <Grid container className="searchPage_options" justify="center">
                    <Grid item md={6}>
                        <Grid container className="searchPage_optionsLeft" spacing={3}>
                            <Grid item className="searchPage_tab">
                                <SearchIcon fontSize="small" />
                                <Link to="/all">All</Link>
                            </Grid>
                            <Grid item className="searchPage_tab">
                                <ImageIcon fontSize="small" />
                                <Link to="/images">Images</Link>
                            </Grid>
                            <Grid item className="searchPage_tab">
                                <DescriptionIcon fontSize="small"/>
                                <Link to="/news">News</Link>
                            </Grid>
                            <Grid item className="searchPage_tab">
                                <LocalOffer fontSize="small"/>
                                <Link to="/shopping">Shopping</Link>
                            </Grid>
                            <Grid item className="searchPage_tab">
                                <RoomIcon fontSize="small"/>
                                <Link to="/maps">Maps</Link>
                            </Grid>
                            <Grid item className="searchPage_tab">
                                <MoreVertIcon fontSize="small"/>
                                <Link to="/more">More</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={2} >
                        <Grid container className="searchPage_optionsRight" spacing={2}>
                            <Grid item className="searchPage_tab">
                                <Link to="/settings">Settings</Link>
                            </Grid>
                            <Grid item className="searchPage_tab">
                                <Link to="/tools">Tools</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={1} />
                </Grid>
            </Grid>
            <Grid container className="searchPage-results">
                {true && (
                    <Grid container className="searchPage-resultCount">
                        About {data?.searchInformation.formattedTotalResults} results({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </Grid>
                )}
                {data?.items.map(item => (
                    <div className="searchPage-result">
                        <a href={item.link} className="searchPage-displaylink">
                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src &&(
                                <img className="searchPage-Image" src={
                                    item.pagemap?.cse_image?.length > 0 &&item.pagemap?.cse_image[0]?.src
                                }
                                alt="" />
                            )}
                            {item.displayLink}
                        </a>
                        <a href={item.link} className="searchPage-title">
                            <h2>{item.title}</h2>
                        </a>
                        <p className="searchPage-resultSnippet">
                            {item.snippet}
                        </p>
                    </div>

                ))}
            </Grid>
        </div>
    )
}

export default SearchPage

//     < IconButton
// edge = "start"
// className = { classes.menuButton }
// color = "inherit"
// aria - label="open drawer"
//     >
//     <SearchIcon />
//                     </ >