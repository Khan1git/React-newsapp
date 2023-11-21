import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './componets/Navbar';
import News from './componets/News';
import LoadingBar from 'react-top-loading-bar';

export default class extends Component {
  
  
  state={
    progress: 20
  }
  
  
  setProgress = (progress) =>{
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11949'
        progress={this.state.progress}
      />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} key="general" pageSize={9} country='us' category='general' />} />
            <Route exact path="/bussines" element={<News setProgress={this.setProgress} key="bussines" pageSize={9} country='us' category='bussines' />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="enter"pageSize={9} country='us' category='entertainment' />} />
            <Route exact path="/health" ement={<News setProgress={this.setProgress} key="health" pageSize={9} country='us' category='health' />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={9} country='us' category='science' />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={9} country='us' category='sports' />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key="tech" pageSize={9} country='us' category='technology' />} />

          </Routes>
        </Router>
      </div>
    )
  }
}
