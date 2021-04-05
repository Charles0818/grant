import React from "react"
// import * as Icon from "react-feather";
import { AiOutlineBank } from 'react-icons/ai';
const navigationConfig = [
  {
    type: "groupHeader",
    groupTitle: "Pages"
  },
  {
    id: "Financial-Institutions",
    title: "Financial Institutions",
    type: "item",
    icon: <AiOutlineBank size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  }
]

export default navigationConfig
