import React, { Component} from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import featured_art1 from './screens/images/featured_art1.png'
import featured_art2 from './screens/images/featured_art2.png'

import ScrollMenu from 'react-horizontal-scrolling-menu';
import './App.css';
import Picture from './scrollscreen'

export default () => {

return (

<body>
    <head> <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script> </head>
    <div style={{
                "position": "absolute",
                "textAlign": "center",
                "background-color": "#E0E0E0",
                "padding": "20px",
                "right": "250px",
                "width": "570px",
                "margin": "20px",
                }}>
     Study Music Playlist of the Week:
    </div>
    
    <div style={{
                "position": "absolute",
                "textAlign": "center",
                "background-color": "#E0E0E0",
                "padding": "20px",
                "right": "250px",
                "width": "570px",
                "top": "140px",
                "margin": "20px",
                }}>

    <iframe width="468" height="300" src="https://www.youtube.com/embed/?listType=playlist&list=PLbqMZ__ZCwUVvPaB5mg5oDZeIp61Ae6Uk" frameborder="0" allowfullscreen></iframe>
    </div>

    <div style={{
                "position": "absolute",
                "textAlign": "center",
                "background-color": "#E0E0E0",
                "padding": "20px",
                "float": "left",
                "width": "570px",
                "margin": "20px",
                }}>
     What developers are talking about right now:
    </div>
    
    <div style={{
                "position": "absolute",
                "textAlign": "center",
                "background-color": "#E0E0E0",
                "padding": "10px",
                "float": "left",
                "width": "570px",
                "top": "140px",
                "margin": "20px",
                }}>

<TwitterTimelineEmbed
  sourceType="likes"
  screenName="bot_sili"
  theme="dark"
  options={{height: 550, width: 450}}
/>

    </div>

    <div style={{
            "position": "absolute",
            "textAlign": "center",
            "background-color": "#E0E0E0",
            "padding": "10px",
            "right": "20px",
            "width": "800px",
            "height": "225px",
            "bottom": "65px",
            "margin": "20px",
            }}>
    <a href="https://www.datafloww.online/singleinterview1">
    <img style={{
        "position": "absolute",
        "width": "300px",
        "height": "170px",
        "right": "440px",
        "top": "50px"
    }}
    className="img" src={featured_art1} alt="featured_article_1"/> 
    </a>
    



    <a href="https://www.datafloww.online/intrographql">
    <img style={{
        "position": "absolute",
        "width": "300px",
        "height": "170px",
        "right": "70px",
        "top": "50px"
    }}
    className="img" src={featured_art2} alt="featured_article_2"/> 
    </a>      

    </div>


    <div style={{
            "position": "absolute",
            "textAlign": "center",
            "background-color": "#F1F1F1",
            "padding": "10px",
            "right": "20px",
            "width": "800px",
            "height": "45px",
            "top": "491px",
            "margin": "20px",
            }}>
    Featured DataFlow Articles:   

    

    </div>
    
    <div style={{
                "position": "absolute",
                "textAlign": "center",
                "background-color": "#E0E0E0",
                "padding": "20px",
                "right": "20px",
                "width": "220px",
                "height": "64px",
                "top": "72px",
                "margin": "20px",
                }}>
                  Autumn Vibez
                </div>

    <div style={{
                "position": "absolute",
                "textAlign": "center",
                "background-color": "#E0E0E0",
                "padding": "20px",
                "right": "20px",
                "width": "220px",
                "height": "347px",
                "top": "140px",
                
                "margin": "20px",
                }}>
    <Picture/>
    </div>
    


</body>
  )
} 






