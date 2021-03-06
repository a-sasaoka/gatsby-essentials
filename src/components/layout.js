import React from "react"
import { config } from "@fortawesome/fontawesome-svg-core"

import Header from "../components/header"
import Footer from "../components/footer"

import "./layout.css"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
