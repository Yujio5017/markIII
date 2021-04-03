import React from 'react';
import './index.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
var style ={
    backgroundColor: "#c9b9ac",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "40px",
    height: "80px",
    width: "100%",
    paddingTop: "40px"
  }
  
//   var phantom = {
//   display: 'block',
//   padding: '10px',
//   height: '50px',
//   width: '100%',
//   }

function Footer() {
    return (
        <div className="pb-8"style={{backgroundColor: "#c9b9ac",
        marginTop:'auto'}}>
        {/* <div style={phantom} /> */}
        <div className="grid grid-cols-5 justify-center pb-8" style={style}>
            <div className="col-span-2"><img src="logo.png" alt="logo" width="300px"></img></div>
            <div className="col-start-4 col-span-2" style={{ color: '#80470e' }}>
                <a href="Youtube"><YouTubeIcon fontSize="large"/></a>
                <a href="Instagram" className="px-5"><InstagramIcon fontSize="large"/></a>
                <a href="Github"><GitHubIcon fontSize="large" /></a>
                <a href="Journal" className="px-5"><MailOutlineIcon fontSize="large"/> </a>
            </div>
        </div>
    </div>

    );
}

export default Footer;