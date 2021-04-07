import React from 'react';
import { Star } from 'react-feather';

const RelatedGrandCard = (props) => {
  return (
    <div>
      <div className="title mb-1">
        <p className="font-medium-1 text-bold-600 truncate mb-0">
          {props.name}
        </p>
        <small>{props.by}</small>
      </div>
      <div className="img-container">
        <img src={props.img} alt={props.name} />
      </div>
      {/* <div className="ratings  ml-1">
        {Array(5).fill(Star).map((Star, index) => (
        <Star
          size={15}
          fill={props.rating <= index + 1 ? "#ff9f43" : "#fff"}
          stroke={props.rating <= index + 1 ? "#ff9f43" : "#b8c2cc"} />
        ))}
      </div> */}
      <p className="text-bold-500 font-medium-2 text-primary mt-50">
        up to ₦{`${props.price}`}
      </p>
    </div>
  )
}

export default RelatedGrandCard;
