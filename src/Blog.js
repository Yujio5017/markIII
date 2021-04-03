import React, { useState,useEffect} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import BlogCard from './BlogCard.js';
function Blog({item}) {
    useEffect(()=>{
        console.log(item);
    },[]);
    return (
        <div className="bg-indigo-50 h-full">
            <BlogCard title={item.title} thumbnail={item.thumbnail} pubDate={item.pubDate} content={item.content}></BlogCard>
        </div>
    ); };

export default Blog;