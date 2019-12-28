import React from "react"
import Home from "../components/home"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="AstroGeekz" description="An Astrophysics website" />
    <NavBar />
    <div className="main-container">
      <Home />
    </div>
    <Footer />
  </div>
)

export default IndexPage
