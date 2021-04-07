import React, { useEffect, useState } from "react"
import { Card, CardBody, Button } from "reactstrap"
import { Check } from "react-feather"
import Radio from "../../components/@vuexy/radio/RadioVuexy"
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy"
// import "rc-slider/assets/index.css"
import { data as originalData } from './shopData';
// import "../../../../assets/scss/plugins/extensions/slider.scss"
const priceRanges = [
  { min: 10000, max: 50000 },
  { min: 51000, max: 150000 },
  { min: 151000, max: 500000 },
  { min: 501000 },
];

const ShopSidebar = ({ filterInstitutions, data }) => {
  let providers = {};
  originalData.forEach((institution) => {
    if(providers[institution.by]) {
      providers[institution.by] = providers[institution.by] + 1
    };
    providers[institution.by] = 1;
  }); 
  const [checkedProviders, setCheckedProviders] = useState([]);
  const [priceRange, setPriceRange]= useState()

  const handlePriceRangeChange = (e) => {
    if(e.target.value === 'all') {
      setPriceRange({ min: 0 });
      setCheckedProviders(Object.keys(providers));
      return;
    };
    setCheckedProviders(data.filter((grand) => +grand.price >= +e.target.value)?.map((grand) => grand.by));
    setPriceRange(priceRanges[+e.target.value])
  }
  const handleCheckedProviders = (e) => {
    if(checkedProviders.includes(e.target.value)) {
      setCheckedProviders((prev) => prev.filter((el) => el !== e.target.value))
    } else {
      setCheckedProviders((prev) => [...prev, e.target.value])
    }
  }
  useEffect(()=> {
    let result = data;
    data.forEach((institution) => {
      if(checkedProviders.includes(institution.by)) {
        result = [...result, institution]
      }
    })
    if(priceRange) {
      if(priceRange.max) {
        result = result.filter((institution) => institution.price >= priceRange.min && institution.price <= priceRange.max);
      } else {
        result = result.filter((institution) => institution.price >= priceRange.min);
      }
    }
  
    filterInstitutions(result);
  },[checkedProviders, filterInstitutions, priceRange]);
  return (
    <React.Fragment>
      <h6 className="filter-heading d-none d-lg-block">Filters</h6>
      <Card>
        <CardBody className="p-2">
          <div className="multi-range-price">
            <div className="multi-range-title pb-75">
              <h6 className="filter-title mb-0">Filter by Amount</h6>
            </div>
            <ul className="list-unstyled price-range">
              <li>
                <Radio
                  label="All"
                  defaultChecked={true}
                  name="shopRadio"
                  className="py-25"
                  value="all"
                  onChange={handlePriceRangeChange}
                />
              </li>
              {priceRanges.map((range, index) => (
                <li>
                  <Radio
                    label={`₦${range.min / 1000}K - ${range.max ? `${range.max / 1000}K` : '& above'}`}
                    defaultChecked={false}
                    name="shopRadio"
                    className="py-25"
                    value={index}
                    onChange={handlePriceRangeChange}
                  />
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="brands">
            <div className="brand-title mt-1 pb-1">
              <h6 className="filter-title mb-0">Providers</h6>
            </div>
            <div className="brand-list">
              <ul className="list-unstyled brand-list">
                {Object.keys(providers).map((provider) => (
                  <li key={provider} className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label={provider}
                      defaultChecked={false}
                      value={provider}
                      checked={checkedProviders.includes(provider)}
                      onChange={handleCheckedProviders}
                    />
                    <span>{providers[provider]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <div className="clear-filters">
            <Button.Ripple block className="btn-block" color="primary">
              CLEAR ALL FILTERS
            </Button.Ripple>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default ShopSidebar
