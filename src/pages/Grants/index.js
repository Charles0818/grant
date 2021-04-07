import React from "react"
import Sidebar from "react-sidebar"
import ShopSidebar from "./Sidebar"
import ShopContent from "./ShopContent"
import Breacrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import { data } from './shopData';
import "../../assets/scss/pages/app-ecommerce-shop.scss"

const mql = window.matchMedia(`(min-width: 992px)`)
class Grants extends React.Component {
  state = {
    sidebarDocked: mql.matches,
    sidebarOpen: false,
    institutions: data,
  }

  UNSAFE_componentWillMount() {
    mql.addEventListener("change", this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeEventListener("change", this.mediaQueryChanged)
  }

  onSetSidebarOpen = open => {
    this.setState({ sidebarOpen: open })
  }

  mediaQueryChanged = () => {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false })
  }
  filterGrants = (data) => {
    this.setState({ institutions: data })
  }
  render() {
    return (
      <React.Fragment>
        <Breacrumbs
          breadCrumbTitle="Portal"
          breadCrumbParent="Grants"
          breadCrumbActive="All Grants"
        />
        <div className="ecommerce-application">
          <div
            className={`shop-content-overlay ${
              this.state.sidebarOpen ? "show" : ""
            }`}
            onClick={() => this.onSetSidebarOpen(false)}></div>
          <div className="sidebar-section">
            <Sidebar
              sidebar={
                <ShopSidebar
                filterGrants={this.filterGrants}
                  data={this.state.institutions}
                />
              }
              docked={this.state.sidebarDocked}
              open={this.state.sidebarOpen}
              sidebarClassName="sidebar-shop"
              touch={true}
              contentClassName="sidebar-children d-none">
              ""
            </Sidebar>
          </div>
          <ShopContent
            mainSidebar={this.onSetSidebarOpen}
            sidebar={this.state.sidebarOpen}
            data={this.state.institutions}
          />
        </div>
      </React.Fragment>
    )
  }
}
export default Grants
