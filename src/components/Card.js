import React from 'react';

import moment from 'moment';
import 'moment/locale/id';

function Card({
  image,
  title,
  author,
  description,
  published,
}) {
  return (
    <div className="card mt-5">
      <img
        src={image}
        className="card-image-top"
        style={{
          height: '250px',
          objectFit: 'cover',
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle text-muted">
          {author}
        </h6>
        <p className="card-text">
          {description}
        </p>
        <p>
          <small className="text-muted">
            {moment(published).fromNow()}
          </small>
        </p>
      </div>
    </div>
  )
}

export default Card;
