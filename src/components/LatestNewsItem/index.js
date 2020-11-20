import React from 'react';
import './index.css';

const LatestNewsItem = (props) => {
  const { data } = props;

  return (
    <article className='news-item-div'>
      <div className='news-thumbnail-div'>
        <img src={data.imgURL} alt='thumbnail' className='thumbnail'/>
      </div>
      <div className='news-info-div'>
        <p className='news-title'>{data.title}</p>
        <span className='news-text'>{data.author}</span>
        <span className='news-text'>&middot;</span>
        <span className='news-text'>{data.time}</span>
      </div>
    </article>
  );
}

export default LatestNewsItem;