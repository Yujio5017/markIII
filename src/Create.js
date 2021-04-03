
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '',
        list:[""],
        value:'' ,
        count:0};
  }

  printSearch = e => {
    e.preventDefault();
    this.setState(state => {
        const list = state.list.concat(this.state.username);
   
        return {
          list,
          value: '',
        };
      });
      this.setState({username: ''});
      this.setState({count: this.state.count+1});
      e.target.reset();
      console.log(this.state.count);
  }

  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.printSearch}>
      <h1 className="font-bold mb-6" style={{color:'#80470e',fontSize:'2.5vw'}}>CREATE YOUR BLOG</h1>
      <p >So this form goes nowhere but its just something you can write with react and javascript in under 100 lines!</p>
      
      {this.state.list.map(item => {
          console.log(this.state.list);
          if(this.state.list===""||!item){
              return
          }
          console.log(item);
          for (var i=0;i<this.state.list.length;i++){
                console.log(this.state.list[i]);
            if (this.state.list[i]===item&&i%2===0){
                return <p className="font-semibold">{item}</p>
            } else{
                return<p className>{item}</p>
            }
        
  }
  return {item}
  })}
      <p>{this.state.username}</p>
      <input
        className="p-2 mt-10"
        type='text'
        onChange={this.myChangeHandler}
        placeholder="Enter your Blog body"
      />
    <button type='submit' className='px-5 bg-blue-300'>
        Submit
      </button>
      </form>
      
    );
  }
}

function Create(){

    return(
      <div className="h-screen p-4">
        <MyForm/>
      </div>
    );
}


export default Create