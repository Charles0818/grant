import React from "react"
import { Card, CardBody, Row, Col, Button } from "reactstrap"
import {
Star,
ShoppingCart,
} from "react-feather"
import Breacrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
import "../../assets/scss/pages/app-ecommerce-shop.scss"
import { data } from "../FinancialInstitutions/shopData"
import { useHistory } from "react-router-dom"
import { RelatedGrandCard } from '../../components';
const swiperParams = {
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
},
breakpoints: {
  1600: {
    slidesPerView: 5,
    spaceBetween: 55
  },
  1300: {
    slidesPerView: 4,
    spaceBetween: 55
  },
  1260: {
    slidesPerView: 4,
    spaceBetween: 55
  },
  900: {
    slidesPerView: 3,
    spaceBetween: 55
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 55
  },
  375: {
    slidesPerView: 1,
    spaceBetween: 55
  }
}
}
const DetailPage = ({ match: { params } }) => {
  const selectedGrand = data.find((grand) => +grand.id === +params.id);
  const { push } = useHistory();
  return (
    <React.Fragment>
      <Breacrumbs
        breadCrumbTitle="Grand Detail"
        breadCrumbParent="Grands"
        breadCrumbActive="Grand Detail"
      />
      <Card className="overflow-hidden app-ecommerce-details">
        <CardBody className="pb-0">
          <Row className="mb-5 mt-2">
            <Col
              className="d-flex align-items-center justify-content-center mb-2 mb-md-0"
              sm="12"
              md="5"
            >
              <img src={selectedGrand.img} alt="Google Home" height="130" width="250" />
            </Col>
            <Col md="7" sm="12">
              <h3>{selectedGrand.name}</h3>
              <p className="text-muted">by {selectedGrand.by}</p>
              <div className="d-flex flex-wrap">
                <h3 className="text-primary">up to ₦{`${selectedGrand.price}`}</h3>
                {/* <div className="ratings border-left ml-1 pl-1">
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#ff9f43" stroke="#ff9f43" />
                  <Star size={20} fill="#fff" stroke="#b8c2cc" />
                  <span className="ml-1 font-medium-1 text-dark align-middle">
                    424 Ratings
                  </span>
                </div> */}
              </div>
              <hr />
              <p>
                {selectedGrand.desc}
              </p>
              <div className="action-btns">
                <Button.Ripple className="mr-1 mb-1" color="primary" onClick={() => push('/apply', {grand: selectedGrand})}>
                  <ShoppingCart size={15} />
                  <span className="align-middle ml-50">APPLY NOW</span>
                </Button.Ripple>
              </div>
            </Col>
          </Row>
        </CardBody>
        <CardBody>
          <Row>
            <Col className="details-page-swiper text-center mt-5" sm="12">
              <div className="heading-section mb-3">
                <h2 className="text-uppercase mb-50">Related Grands</h2>
                <p>People also showed interest to these grands</p>
              </div>
              <Swiper {...swiperParams}>
                {data.filter((grand) => +grand.id !== +params.id).map((grand) => <RelatedGrandCard key={grand.id} {...grand} />)}
              </Swiper>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}
export default DetailPage
