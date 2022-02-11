
import React, { Component } from 'react';
import Header from "./Components/Header";
import NewsComponent from "./Components/NewsComponent";
import './App.css';

export default class App extends Component {
  render() {
    return (
     <>
     <Header heading="News-app"/>
     <NewsComponent />
     </>
    );
  }
}

