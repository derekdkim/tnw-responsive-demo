import React from 'react';

const LatestNewsItem = (props) => {
  const { data } = props;

  return (
    <div className='news-item-div'>
      <div classname='news-thumbnail-div'>

      </div>
      <div className='news-info-div'>
        <p>{data.title}</p>
          <span>{data.author}</span>
          <span>{data.time}</span>
      </div>
    </div>
  );
}

export default LatestNewsItem;