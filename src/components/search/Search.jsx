import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../stateProvider";
import { actionTypes } from "../../reducer";

//Material UI
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import "./Search.css";
import { IconButton } from "@material-ui/core";

function Search() {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    
    dispatch({
      type : actionTypes.SET_SEARCH_TERM,
      term : input
    })

    history.push("/search");
  };

  return (
    <form className='search'>
      <Box className='search-input' elevation={0}>
        <Input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Search'
          fullWidth
          className='search-inputField'
          endAdornment={
            <InputAdornment position='end'>
                <IconButton onClick={search} style={{ marginLeft: "0.8rem" }}>
                  <SearchIcon color='primary' />
                </IconButton>
            </InputAdornment>
          }
        />
      </Box>
      <Box className='search-buttons'>
        <Button
          type='submit'
          onClick={search}
          className='buttons-hidden'
        ></Button>
      </Box>
    </form>
  );
}

export default Search;