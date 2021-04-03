import React, { useState,useEffect} from 'react';
import './test.css';
import { render } from "react-dom";
import { Example } from "./Example";
import { Refresh } from "./Refresh";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import {
    useViewportScroll,
    useSpring,
    useTransform
  } from "framer-motion";
  
function News({item}) {
    console.log(item);
    const [count, setCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  
    useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);
  
    return (
        
        <div>
            <motion.div animate={{x:100}}/>
            <motion.path style={{ pathLength: scrollYProgress }} >
            <div className="big"/>
            </motion.path>
        <div className="lite">
        <Refresh onClick={() => setCount(count + 1)} />
        <div className="example-container">
          <Example key={count} />
        </div>
    </div>
        <div className="lite">
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {items.map(item => (
          <Item key={item} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
    <svg className="progress-icon" viewBox="0 0 60 60">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1 // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>
      </div>
      
      </div>
    ); 
};
function Item() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
        <motion.div className="avatar" layout />
        <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </motion.li>
    );
  }
  
function Content() {
    return (
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="row" />
        <div className="row" />
        <div className="row" />
      </motion.div>
    );
  }
  
const items = [0, 1, 2];
export default News;