import React from 'react';

const FeaturedItem = (props) => {
  const { data } = props;

  return (
    <div className='featured-item-container'>
      <div className='featured-item-info-div'>
        <p>{data.category}</p>
        <h3>{data.title}</h3>
        <div className='misc-info-div'>
          <span>{`by ${data.author}`}</span>
          <span>{data.time}</span>
          <span>{data.shared}</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedItem;