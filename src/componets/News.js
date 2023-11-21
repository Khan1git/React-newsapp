import React, { Component } from 'react'
import NewsItem from './NewsItem'
import propTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country: "us",
    pageSize: 6,
    category: "general",

  }
  static propTypes={
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
  }


  articles = []
  async componentDidMount() {
    this.props.setProgress(15);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=364536e31b904767b7625ea9812c72a4&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    this.props.setProgress(40);
    let show = await data.json()
    this.props.setProgress(70);
    console.log(show)
    this.setState({
      articles: show.articles,
      totalResult: show.totalResults
    })
    this.props.setProgress(100);

  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=364536e31b904767b7625ea9812c72a4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      let data = await fetch(url)
      let show = await data.json()
      console.log(show)
      this.setState({
        page: this.state.page + 1,
        articles: show.articles
      })
    }

  }
  handlePrevClick = async () => {
    console.log("Previous page")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=364536e31b904767b7625ea9812c72a4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let show = await data.json()
    console.log(show)
    this.setState({
      page: this.state.page - 1,
      articles: show.articles,
    })
  }

  constructor() {
    super();
    console.log("Every Thing is fine in NewsItems")
    this.state = {
      articles: this.articles,
      page: 1
    }
  }
  render() {
    return (
      <div>
        <div className='container my-3'>
          <h1 className='text-center'>NewsWorld -Daily Top HeadLines</h1>
          <spinner/>
          <div className='row'>
            {this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 44) : " "} discription={element.description ? element.description.slice(0, 44) : ""}
                  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
            })}
          </div>
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark mx-2">&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark mx-2">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News