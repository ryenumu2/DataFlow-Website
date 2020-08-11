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

function Props(){

    return(

        <div id="page-container">
        <Navigation />
        <div className="learn-container">
        <div className="learn-containerChild">

    
    <div className="TitleFormat">
    Props
    </div>
{/*
    <div className="learn-body-bold">
        Some background
    </div>
*/}
    

    <div className="learn-body">
    </div>
    <div className="learn-body">
    </div>
    <div className="learn-body">
    </div>
    <div className="learn-body">
    </div>
    
    <div className="subsubTitleFormat">
    </div>

    <div className="learn-body">
    </div>


    <div className="learn-body"></div>
    <div className="learn-body"></div>
    <div className="learn-body"></div>
    <div className="learn-body"></div>
    <div className="learn-body"></div>
    
    <div className="learn-body-end"></div>
    </div>
    </div>
    <Footer2/>
    </div>
    )
}

export default Props;