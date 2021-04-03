import React, { useState,useEffect} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import BlogCard from './BlogCard.js';
function Blogs({item}) {
    useEffect(()=>{
        console.log(item);
    },[]);
    return (
        <div className="p-10 h-full">
            <div className="px-10">
                <h1 className="text-center">Blogs</h1>  
                <p>this is currently in progress huehue</p>
            </div>  
        </div>
    ); };

export default Blogs;