import React, { useState,useEffect} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import BlogCard from './BlogCard.js';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Split from './Split';
import About from './About';
function Projects() {
    const max={
        width:'80%'
    }
    return (
            <div>
            <section className="pt-10 h-full">
          
              <div className="font-semibold text-center pb-2 m-auto h-full flex justify-center" style={max}> 
                <div className="inline-block upp" style={{color:'#80470e'}}>YUJI</div> 
                <div className="inline-block text-8xl m-8 mb-20 uppp">x</div> 
                <div className="inline-block upp projects" >PROJECTS</div> 
              </div>
              <div>
                <h1 className="text-xl font-bold text-center" style={{color:'#80470e'}}> 
                    GRASPING MY PROJECTS AND UNCOVERING MY MALLOC'D ADDRESS
                </h1>
                <h1 className="text-xl font-semibold text-center" style={{color:'#de5a24'}}>
                プロジェクト
                </h1>
              </div>
            </section>
            <section>
                <div className="pb-5 text-center grid grid-cols-2">

                    <div className="px-10 py-5 inc col-span-2 rdy">
                      <Link className="navLinks" to='/mblog'>
                      <img width="80%" src="https://files.elfsight.com/storage/f7e9a9de-578a-404d-9755-29717c16030a/180206d4-75a2-4f82-81a9-212284cb083c.png" alt="hero"/>
                      </Link>
                      <h1 className="text-3xl">Medium Blog API </h1>
                    </div>
                    <div className="px-10 inc rdy">
                      <Link className="navLinks" to='/create'>
                      <img width="80%" src="https://files.elfsight.com/storage/f7e9a9de-578a-404d-9755-29717c16030a/27431267-be91-459e-916d-e8e03cb1d64d.png" alt="hero"/>
                      </Link>
                      <h1 className="text-3xl">Live Blog Creator </h1>
                    </div>
                    <div className="px-10 py-5 inc">
                      <img width="80%" src="https://files.elfsight.com/storage/f7e9a9de-578a-404d-9755-29717c16030a/840e284c-ee23-45de-aaea-0733319fbfc3.png" alt="hero"/>
                    <h1 className="text-3xl text-gray-500">Esport platform </h1>
                    </div>

                    <div className="px-10 py-5 inc">
                      <img width="80%" src="https://files.elfsight.com/storage/f7e9a9de-578a-404d-9755-29717c16030a/178b2e96-25d5-4c4f-ab5f-006c810553fe.png" alt="hero"/>
                    <h1 className="text-3xl text-gray-500">Podcast platform </h1>
                    </div>



                    <div className="px-10 py-5 inc">
                      <img width="80%" src="https://files.elfsight.com/storage/f7e9a9de-578a-404d-9755-29717c16030a/39bc58b9-4799-41f9-8d52-b61392b1bb4e.png" alt="hero"/>
                      <h1 className="text-3xl text-gray-500">Velocity </h1>
                    </div>
  

                </div>
                <div className=" px-10 text-center grid grid-cols-4 gap-4" style={{color:'#80470e'}}>
               
                    <div className="font-bold col-span-4 justify-items-bottom" style={{fontSize:'3.5vw'}}>8 Languages  <img width="150px"src="logo512.png"></img></div>
                    <div className="col-span-4"><p>Python, React, HTML, CSS, C, Java, php, JavaScript</p></div>
                </div>
            </section>
            <About/>
            </div>
    ); };

export default Projects;