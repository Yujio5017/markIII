import React, { useState,useEffect} from 'react';
import './index.css';
import {Link} from 'react-router-dom';

function Item() {

    useEffect(()=>{
    },[]);

    const [item,setItem]=useState({});

    const fetchItem=async () =>{
        
    };
    return (
        <div class="p-10 text-center">
            <h1>Item</h1>
        </div>
    ); };

export default Item;