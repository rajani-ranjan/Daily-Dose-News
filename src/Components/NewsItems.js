import React from 'react'
import ImageNotFound from '../image/image-not-found.jpeg'

export default function NewsItems(props) {
    let { title, discription, imageUrl, newsUrl, publishedAt, author, source } = props
    return (
        <>
            <div className="card" >
                <div className="position-relative" >
                    <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger" >
                        {source}
                    </span>
                </div>
                <img src={imageUrl ? imageUrl : ImageNotFound} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text my-0"><small className="text-muted">By: {author}</small></p>
                    <p className="card-text my-0"><small className="text-muted">Date: {new Date(publishedAt).toGMTString()}</small></p>
                    <p className="card-text">{discription}...</p>
                    <a href={newsUrl} className="btn btn-sm btn-dark" target='_blank' rel="noreferrer">Read more</a>
                </div>
            </div>
        </>
    )
}
