import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
    const pageSize = 9
    const apiKey = process.env.REACT_APP_NEWS_API;
    const [progress, setProgress] = useState(0);

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <LoadingBar
                    color='#f11946'
                    progress={progress}
                />
                <Routes>
                    <Route exact path='/' element={<News apiKey={apiKey} setProgress={setProgress} key='general' pageSize={pageSize} heading="General" category='general' />}></Route>
                    <Route exact path='/business' element={<News apiKey={apiKey} setProgress={setProgress} key='business' pageSize={pageSize} heading="Business" category='business' />}></Route>
                    <Route exact path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key='entertainment' pageSize={pageSize} heading="Entertainment" category='entertainment' />}></Route>
                    {/* <Route exact path='/general' element={<News apiKey={apiKey} setProgress={setProgress} key='general' pageSize={pageSize} heading="General" category='general'/>}></Route> */}
                    <Route exact path='/health' element={<News apiKey={apiKey} setProgress={setProgress} key='health' pageSize={pageSize} heading="Health" category='health' />}></Route>
                    <Route exact path='/science' element={<News apiKey={apiKey} setProgress={setProgress} key='science' pageSize={pageSize} heading="Science" category='science' />}></Route>
                    <Route exact path='/sports' element={<News apiKey={apiKey} setProgress={setProgress} key='sports' pageSize={pageSize} heading="Sports" category='sports' />}></Route>
                    <Route exact path='/technology' element={<News apiKey={apiKey} setProgress={setProgress} key='technology' pageSize={pageSize} heading="Technology" category='technology' />}></Route>
                </Routes>
            </BrowserRouter>
            {/* <News setProgress={setProgress} pageSize={pageSize} category='general'/> */}
        </>
    )
}
export default App;