import React, { useState,useEffect} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import BlogCard from './BlogCard.js'
import ClassIcon from '@material-ui/icons/Class';
function BlogHome() {
    return (
        <div className="overflow-hidden" style={{minHeight:'100%'}}>
            <div className="font-semibold text-center m-auto justify-center"> 
                <div className="inline-block" style={{fontSize:'5vw'}}>Medium Blogs<ClassIcon color='#de5a24' fontSize="large"/></div> 
                <img width="70%"src="https://files.elfsight.com/storage/f7e9a9de-578a-404d-9755-29717c16030a/180206d4-75a2-4f82-81a9-212284cb083c.png" alt="hero"/>
            </div>
            <div className="px-10">
                <div className="px-10">
                    <p>This is a blog generator using Mediums API, you can write it for yourself!</p>
                </div>
            </div>
        </div>
    ); };

export default BlogHome;