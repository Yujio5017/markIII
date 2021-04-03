import React, {component,useState,useEffect} from 'react'
import './index.css';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import Blog from './Blog';
import Create from './Create';
import About from './About';
import Projects from './Projects';
import BlogHome from './BlogHome'
import BlogInfo from './BlogInfo';
import NoMatch from './NoMatch';
import Scroller from './Scroller';
import News from './News';
import ScrollToTop from './ScrollToTop';
import Blogs from './Blogs';
import {BrowserRouter as Router, Switch,Link, Route} from 'react-router-dom';



function App() {
  const [previous,setPrev]=useState('@ghaxhaj');
  // const [query,setQuery]=useState(false);
  const [items,setItems]=useState([]);
  const [search,setSearch]=useState('');
  const [blogger,setBlogger]=useState('@ghaxhaj');
  

  useEffect(()=>{
    fetchItems();
},[blogger]);

const fetchItems=async () =>{
  const data= await fetch(
  `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${blogger}`
  );

  const items = await data.json();
  console.log(items);
  if (items.status!='error'){
    setPrev(blogger);
    setItems(items.items);
  } else {
    setBlogger(previous);
    // setQuery(true);
    //alert('Not found');
    const data= await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${blogger}`
      );
    
      const items = await data.json();
  }

};

  const updateSearch = e =>{
    setSearch(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    
    //alert(e.target.value);
    setBlogger(search);
  }


    // setBlogger('@ghaxhaj');
    // var blogger='@ghaxhaj';
    function findItem(items,match){
      
  console.log(match);
      for (var i=0;i<items.length;i++){
        if (items[i].pubDate===match.params.id){
          console.log(items[i]);
          return <Blog item ={items[i]}/>;
        }
      }
      return null;
    }



  return(

      

    <Router>
    <Nav/>
    
    <Scroller/>
    <Root>
    <Route path="/mblog" render={({match})=>(
        <Sidebar>
        <form className="p-4 bg-grey-300" onSubmit={getSearch}>
      <h1 style={{fontSize:'2vw'}}>Blogger search</h1>
      <p style={{fontSize:'1.2vw'}}>Enter a Medium Bloggers username: eg (@ghaxhaj, @anthonyjyeung, @who)</p>
    
      <input
        type='text'
        value={search}
        onChange={updateSearch}
        placeholder='Enter Username'
        className='border-rounded py-2'
      />
      <button type='submit' className='px-5 bg-blue-300'>
        Search
      </button>
      </form>
            {items&&(<ul>
            {items.map(post =>(
                <li key={post.title}>
                <Link to={`/mblog/${post.pubDate}`}>
                <SidebarItem > {post.title}</SidebarItem> 
                </Link>
                </li>
            ))}
            </ul>
            )}
            
        </Sidebar>
        )}/>

        <Main>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/create" component={Create}/>
            <Route path="/blog" component={Blogs}/>
            <Route path="/news" component={News}/>
            <Route path="/projects" component={Projects}/>
            {items &&(<Route path="/mblog/:id" render={({match})=>(
              <h1>{findItem(items,match)}</h1>
            )}/>
            )}
            <Route path="/mblog" exact component={BlogHome}/>
            <Route component={NoMatch} />
          </Switch>
          <Footer/>
          </Main>
      
    </Root>
    </Router>
  );
  
}


const Root= (props) => (
  <div style={{
    display:'flex',
    height:'100vh',
    width:'100%',
    paddingTop:'10vh'
}} {...props}/>
)

const Sidebar = (props) => (
    <div style={{
        width:'33vw',
        height:'100vh',
        overflow:'auto',
        background:'#eee'
    }} {...props}/>
    
)

const SidebarItem = (props) => (
    <div style={{
        whiteSpace:'nowrap',
        textOverflow:'ellipsis',
        overflow:'hidden',
        padding:'5px 20px',
        fontSize:'1vw'
    }} {...props}/>
)
const Main = (props) => (
  <div style={{
      flex:1,
      height:'100vh-60px',
      overflow:'auto',
      background: '#ded3c9'
  }}>
    <div  {...props}/>
    </div>
)

export default App;
