import React, { Component } from 'react'
import Newitem from './Newitem'
import { wait } from '@testing-library/user-event/dist/utils'

export default class News extends Component {
  articles =  [
    {
        "source": {
            "id": "news24",
            "name": "News24"
        },
        "author": null,
        "title": "News24 | Mike Procter, SA cricket legend and Proteas' first post-isolation coach, dies at 77",
        "description": "World cricketing great Mike Procter died in an Umhlanga private hospital on Saturday afternoon.",
        "url": "https://www.news24.com/sport/cricket/proteas/mike-procter-sa-cricket-legend-and-proteas-first-post-isolation-coach-dies-at-77-20240217",
        "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/10837/8d2eee4ec9cc469293a7bd95b035b0d2.jpg",
        "publishedAt": "2024-02-17T19:37:01",
        "content": "World cricketing great Mike Procter died in an Umhlanga private hospital on Saturday afternoon."
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
]
  constructor(){
    super()
    console.log("clear")
    this.state={
          articles :this.articles,
          loading : false

    }
  }
  async componentDidMount(){
    let url= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c8ae1b2a9168474a867134747ad1eb35"
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({articles : parseData.articles})
  }
  render() {
   
    return (
      <div className='container my-3'>
        <h2>Aesthetic Newspapers</h2>
        <div className="row">
        {this.state.articles.map( (element) =>{        
         return <div className="col-md-4" key={element.url}>
           <Newitem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newUrl={element.url}></Newitem>
        </div>  
          })}
</div>
      </div>
    )
  }
}

