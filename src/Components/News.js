import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
export default function News(props) {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        props.setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);

        // console.log(articles.length);
    }
    useEffect(() => {
        
        document.title = `${props.heading} News-DailyDose`;
        updateNews();
        // eslint-disable-next-line
    },[])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page+1}`;
        setPage(page + 1);
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }
    return (
        <>
            <h1 className='text-center'>Daily Dose of News - {props.heading} Headlines</h1>
            {loading && <Loading />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}
                scrollableTarget="scrollableDiv"
            >
                <div className='container my-3'>
                    <div className="row">
                        {articles.map((element) => {
                            return (
                                <div className="col-md-4 my-2 px-1" key={element.url}>
                                    <NewsItems title={element.title ? element.title.slice(0, 45) : ''} publishedAt={element.publishedAt ? element.publishedAt : 'NA'} discription={element.description ? element.description.slice(0, 85) : ''} author={element.author ? element.author : 'Unknown'} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </InfiniteScroll>

        </>
    )
}
