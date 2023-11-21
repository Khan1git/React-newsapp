import React  from 'react'



// MY URL  https://newsapi.org/v2/top-headlines?country=us&apiKey=364536e31b904767b7625ea9812c72a4

const NewsItem = (props) =>{

            let { title, discription, imageUrl, newsUrl, author, date, source } = props
        return (
            <div>
                <div className="card mx-2 my-3">
                    <img src={!imageUrl ? "https://image.cnbcfm.com/api/v1/image/107215241-1679871828816-gettyimages-1240557511-GERMANY_DEUTSCHE.jpeg?v=1690348474&w=1920&h=1080" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...  <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex:'1'}}>
                            {source}
                            <span class="visually-hidden">unread messages</span>
                        </span> </h5>
                        <p className="card-text">{discription}...</p>
                        <p className="card-text"><small class="text-body-secondary">By {!author ? "Unknown" : author} on {date}</small></p>
                        <a rel='norefree' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">READ MORE</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem