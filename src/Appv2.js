import React from 'react'
import './index.css';
import Footer from './Footer';
import Nav from './Nav';
import Blog from './Blog';
import About from './About';
import BlogInfo from './BlogInfo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {

  return (
    <Router>
      <div className="cover">
        <Nav/>
        <div className="p-10">
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            
            <Route path="/blog" exact component={Blog}/>
            <Route path="/blog/:id" component={BlogInfo}/>
          </Switch>
          </div>
        <Footer/>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1> Home Page</h1>
  </div>
);

export default App;
