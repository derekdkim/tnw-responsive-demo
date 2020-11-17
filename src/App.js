import React from 'react';
import './App.css';

/* Component Modules */
import Header from './components/Header';
import FeaturedItem from './components/FeaturedItem';
import LatestNewsItem from './components/LatestNewsItem';

/* Article Data */
import featuredArticles from './data/featuredArticles.js';
import latestNews from './data/latestNews.js';

function App() {
  const featArticles = [...featuredArticles];
  const newsArticles = [...latestNews];

  return (
    <div className="App">
      <Header />
      <div className='featured-div'>
        {featArticles.map((entry, index) => 
          <FeaturedItem key={index} data={entry} />
        )}
      </div>
      <div className='latest-news-div'>
        <h1 className='section-header'>Latest News</h1>
        <div className='latest-news-grid'>
          {newsArticles.map((entry, index) => 
            <LatestNewsItem key={index} data={entry} />
          )}
        </div>
      </div>


    </div>
  );
}

export default App;
