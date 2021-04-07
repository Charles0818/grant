import React, { useState } from "react"
import Select from "react-select"
import {
  Button,
  Row,
  Col,
  FormGroup,
  Input,
} from "reactstrap"
import {
  Grid,
  List,
  Search,
  Menu
} from "react-feather"
import { InstitutionCard } from '../../components';
import "../../assets/scss/plugins/forms/react-select/_react-select.scss"
const sortOptions = [
  {
    value: "featured",
    label: "Featured"
  },
  {
    value: "lowest",
    label: "Lowest"
  },
  {
    value: "highest",
    label: "Highest"
  }
]

const ShopContent = ({ data, mainSidebar, sidebar }) => {
  const [view, setView] = useState("grid-view");
    return (
      <div className="shop-content">
        <Row>
          <Col sm="12">
            <div className="ecommerce-header-items">
              <div className="result-toggler w-25 d-flex align-items-center">
                <div className="shop-sidebar-toggler d-block d-lg-none">
                  <Menu
                    size={26}
                    onClick={() => mainSidebar(true)}
                  />
                </div>
                <div className="search-results">{data.length === 0 ? 'No Result' : data.length === 1 ? `1 Result` : `${data.length} Results`} Found</div>
              </div>
              <div className="view-options d-flex justify-content-end w-75">
                <Select
                  className="React-Select"
                  classNamePrefix="select"
                  defaultValue={sortOptions[0]}
                  name="sort"
                  options={sortOptions}
                />
                <div className="view-btn-option">
                  <Button
                    color="white"
                    className={`view-btn ml-1 ${
                      view === "grid-view" ? "active" : ""
                    }`}
                    onClick={() => setView("grid-view")}
                  >
                    <Grid size={24} />
                  </Button>
                  <Button
                    color="white"
                    className={`view-btn ${
                      view === "list-view" ? "active" : ""
                    }`}
                    onClick={() => setView("list-view")}
                  >
                    <List size={24} />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12">
            <div className="ecommerce-searchbar mt-1">
              <FormGroup className="position-relative">
                <Input
                  className="search-product"
                  placeholder="Search for Grants"
                />
                <div className="form-control-position">
                  <Search size={22} />
                </div>
              </FormGroup>
            </div>
          </Col>
          <Col sm="12">
            <div id="ecommerce-products" className={view}>
              {data.map((institution, i) =>   <InstitutionCard {...institution} key={i} />)}
            </div>
          </Col>
          {/* <Col sm="12">
            <div className="ecommerce-pagination">
              <Pagination className="d-flex justify-content-center mt-2">
                <PaginationItem className="prev-item">
                  <PaginationLink href="#" first>
                    <ChevronLeft />
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">6</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">7</PaginationLink>
                </PaginationItem>
                <PaginationItem href="#" className="next-item">
                  <PaginationLink href="#" last>
                    <ChevronRight />
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </div>
          </Col> */}
        </Row>
      </div>
    )
}

export default ShopContent
