import React, { Component } from 'react'
import Newitem from './Newitem'

export default class News extends Component {
  render() {
   
    return (
      <div className='container my-3'>
        <h2>Aesthetic Newspapers</h2>
        <div className="row">
          <div className="col-md-4">
        <Newitem title="first title" description="first desc" imageUrl="https://www.news24.com/sport/cricket/proteas/mike-procter-sa-cricket-legend-and-proteas-first-post-isolation-coach-dies-at-77-20240217"></Newitem>
        </div>
        <div className="col-md-4">
        <Newitem title="first title" description="first desc"></Newitem>
        </div>
        <div className="col-md-4">
        <Newitem title="first title" description="first desc"></Newitem>
        </div>
           </div>
      </div>
    )
  }
}

