import React from 'react';
import './index.css';

import imageFilter from '../../img/image-gradient.png';

const FeaturedItem = (props) => {
  const { data, index } = props;

  return (
    <article className='featured-item-container'>
      <div 
        className='featured-item'
        style={{backgroundImage: `url(${data.imgURL})`}} 
      >
        <div className='background-gradient-filter'></div>
        { index === 0 && <div className='cover-logo'></div> }
        <header className={index === 0 ? 'featured-item-header main-article': 'featured-item-header'}>
          <span>{data.category}</span>
          <h3 className='title'>{data.title}</h3>
          <div className={index === 0 ? 'misc-info-div main-article' : 'misc-info-div'}>
            <span>{`by ${data.author}`}</span>
            <span>{data.time}</span>
            <span className='shared'>{`${data.shared} `}&#10282;</span>
          </div>
        </header>
      </div>
    </article>
  );
}

export default FeaturedItem;