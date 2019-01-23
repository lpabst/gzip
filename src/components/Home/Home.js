import React, { Component } from 'react';

import './Home.css';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    }
  }

  componentDidMount(){
    console.log('something ')
  }

  render() {
    return (
      <div className="home">

        <h1>Home Page</h1>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>

      </div>
    );
  }
}


export default Home;