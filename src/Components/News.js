import React, { Component } from 'react'
import Newitem from './Newitem'

export default class News extends Component {
  render() {
   
    return (
      <div>
        this is a news 
        <Newitem title="first title" description="first desc"></Newitem>
        <Newitem></Newitem>
        <Newitem></Newitem>
        <Newitem></Newitem>
        <Newitem></Newitem>
        <Newitem></Newitem>
    
      </div>
    )
  }
}

