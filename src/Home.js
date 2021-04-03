import React, { useState,useEffect} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import BlogCard from './BlogCard.js';
import Split from './Split';
import About from './About';
import FadeInAnimation from './FadeAni';
function Home() {
    const max={
        width:'80%'
    }
    return (
            <div>
            <section className="py-40 h-full">
          
              <div className="font-semibold text-center pb-20 m-auto h-full flex justify-center" style={max}> 
              <FadeInAnimation wrapperElement="div" direction="up" delay="0.5" distance="50">

                <div className="inline-block upp" style={{color:'#80470e'}}>YUJI</div> 
                <div className="inline-block text-8xl m-8 mb-20 uppp">x</div> 
                <div className="inline-block upp" style={{color:'#de5a24'}}>NOJIMA</div> 
              </FadeInAnimation>
              </div>
              <div>
                <h1 className="text-xl font-bold text-center" style={{color:'#80470e'}}> 
                    GRASPING MY ROOTS AND UNCOVERING MY OWN
                </h1>
                <h1 className="text-xl font-semibold text-center" style={{color:'#de5a24'}}>
                三つの基礎
                </h1>
              </div>
            </section>
            <section>
                <div className="pb-10 ">
                <img src="hero2.png" alt="hero" width="80%"></img>
                </div>
                <div className="pb-20 text-center grid grid-cols-8 gap-4 m-5" style={{color:'#80470e'}}>
                    <div className=" col-span-4 text-right" style={{color:'#de5a24', fontSize:'8vw'}}>三つの基礎</div>
                    <div className="  font-bold col-span-4 text-left mb-4  items-end bottom-0 justify-items-bottom mt-12" style={{fontSize:'3.5vw'}}>THREE MOTIVES</div>
                    <div className="col-span-3 text-center"> 
                    <h1 className="font-bold">Whats New</h1>
                    <ul className="text-left mx-5 listed" style={{fontSize:'2vw'}}>
                        <li> First page</li>
                        <li> Second page</li>
                        <li> Third page</li>
                        <li> Fourth page</li>
                    </ul>
                    </div>
                    <div className="justify-items-center" style={{height:'100%'}}><div style={{width:'2px',backgroundColor:'#80470e',height:'100%',right:'0'}}></div></div>
                    <div className="col-span-4 text-left"><p>Awenaobvwei ewoufheoah fhoewho fhewfhoawh efoi Awenaobvwei ewoufheoah fhoewho fhew Awenaobvwei ewoufheoah fhoewho fhewAwenaobvwei ewoufheoah fhoewho fhew</p></div>
                </div>
            </section>
            <About/>
            </div>
    ); };

export default Home;