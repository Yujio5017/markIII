import React, { useState,useEffect} from 'react';
import './blog.css';
import {Link} from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";



function BlogCard({title,thumbnail,pubDate,content}) 
{
    return (
        <div key ={title} className="p-7">
        <h1 >{title}</h1>
        <p className = "cardText pb-5">Posted on: {pubDate}</p>
        {/* thumbnail
        <img src = {thumbnail} alt="" className = "Img max-w-xl  justify-center text-center"/>  
        */}
        <div>{ReactHtmlParser(content)}</div>
        </div>
    ); };

export default BlogCard;