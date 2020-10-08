import React, { Component} from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import featured_art1 from './screens/images/featured_art1.png'
import featured_art2 from './screens/images/featured_art2.png'

import ScrollMenu from 'react-horizontal-scrolling-menu';
import './App.css';
import Picture from './scrollscreen'
import './screens/learn.css'
import './screens/mainpage.css'


export default () => {

return (
<div id="page-container">

    <head> <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script> </head>
    <div className="learn-container">
        <div className="learn-containerChild">
      </div>
    </div>

    <div className="mainContainerchild">
     Study Music Playlist of the Week:
    </div>
    
    <div className="mainContainerchildYoutube">
    <iframe width="468" height="300" src="https://www.youtube.com/embed/?listType=playlist&list=PLbqMZ__ZCwUVvPaB5mg5oDZeIp61Ae6Uk" frameborder="0" allowfullscreen></iframe>
    </div>

    <div className="mainContainerchildleft">
     What developers are talking about right now:
    </div>
    
    <div className="mainContainerchildTwitter">
    
    <TwitterTimelineEmbed
    sourceType="likes"
    screenName="bot_sili"
    theme="dark"
    options={{height: 550, width: 450}}
    />
    
    </div>

    <div className="mainContainerchildFeatured">

    <div className="mainContainerchildFeaturedtitle">
    Featured DataFlow Articles:   
    </div>

    <a href="https://www.datafloww.online/singleinterview1">
    <img className="mainfeatured1" src={featured_art1} alt="featured_article_1"/> 
    </a>
    <a href="https://www.datafloww.online/intrographql">
    <img className="mainfeatured2" src={featured_art2} alt="featured_article_2"/> 
    </a>      
    </div>

    <div className="mainpic">
                  Autumn Vibez
    </div>
    <div className="mainpiccollection">
    <Picture/>
    </div>
  </div>
  )
} 






