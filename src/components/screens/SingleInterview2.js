import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navigation from '../Navigation';
import './learn.css'
import Footer2 from '../Footer2';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }}

function SingleInterview2(){

    return(

        <div id="page-container">
        <Navigation />
        <div className="learn-container">
        <div className="learn-containerChild">

    
    <div className="TitleFormat">
    Singly-Linked lists: Interview problem 2: Reverse a Sub List in Python
    </div>


    <div className="learn-body">
    <YouTube videoId="Y-AVdR0yxL4" opts={opts}/>
    </div>


    </div>
    </div>
    <Footer2/>
    </div>
    )
}

export default SingleInterview2;
