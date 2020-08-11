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

function SingleInterview4(){

    return(

        <div id="page-container">
        <Navigation />
        <div className="learn-container">
        <div className="learn-containerChild">

    
    <div className="TitleFormat">
    Singly-Linked lists: Interview problem 4: Find Intersection of Two Linked Lists
    </div>


    <div className="learn-body">
    <YouTube videoId="bO8VRZlp_Qo" opts={opts}/>
    </div>


    </div>
    </div>
    <Footer2/>
    </div>
    )
}

export default SingleInterview4;