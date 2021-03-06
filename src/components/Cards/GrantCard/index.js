import React from 'react';
import {
  Card,
  CardBody,
  Badge,
} from "reactstrap"
import {
  Star,
  ShoppingCart,
} from "react-feather"
import { Link, useHistory } from "react-router-dom"

const GrantCard = (props) => {
  const { push } = useHistory();
  return (
    <Card className="ecommerce-card">
          <div className="card-content">
            {/* <div className="item-img text-center"> */}
              <Link to={`/grant/${props.id}`} className="item-img text-center">
                <img
                  className="img-fluid"
                  src={props.img}
                  alt={props.name}
                />
              </Link>
            {/* </div> */}
            <CardBody>
              <div className="item-wrapper d-flex justify-content-end">
                {/* <div className="item-rating">
                  <Badge color="primary" className="badge-md">
                    <span className="mr-50 align-middle">4</span>
                    <Star size={14} />
                  </Badge>
                </div> */}
                <div className="product-price">
                  <h6 className="item-price">up to ₦{props.price}</h6>
                </div>
              </div>
              <div className="item-name">
                <Link to="/ecommerce/product-detail">
                  {" "}
                  <span>{props.name}</span>
                </Link>
                <p className="item-company">
                  By <span className="company-name">{props.by}</span>
                </p>
              </div>
              <div className="item-desc">
                <p className="item-description">{props.desc}</p>
              </div>
            </CardBody>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-rating">
                  <Badge color="primary" className="badge-md">
                    <span className="mr-50 align-middle">4</span>
                    <Star size={14} />
                  </Badge>
                </div>
                <div className="product-price">
                  <h6 className="item-price">up to ₦{props.price}</h6>
                </div>
              </div>
              <div className="cart" onClick={() => push('/apply', {grant: props})}>
                <span className="align-middle ml-50">
                  Apply Now
                </span>
              </div>
            </div>
          </div>
        </Card>
  )
}

export default GrantCard;
