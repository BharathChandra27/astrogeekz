import React from "react"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"

export default class Articles extends React.Component {
  render() {
    return (
      <div className="main-container">
        <SEO title="AstroGeekz | Articles" />
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 m-4 col-sm-12">
              <div className="card">
                <Image />
                <div className="card-body">
                  <h5 className="card-title">Expanding Universe</h5>
                  <p className="card-text">
                    The Universe, one of the grandest designs is full of
                    mystories. The discovery of expanding universe....
                  </p>
                  <a href="/expanding-universe" className="btn btn-dark">
                    Continue reading..
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 m-4">
              <div className="card" style={{ width: "18rem" }}>
                <Image />
                <div className="card-body">
                  <h5 className="card-title">Dark Matter</h5>
                  <p className="card-text">
                    As most of you known the dark matter makes about 80% mass of
                    the universe that we see today...
                  </p>
                  <a href="/dark-matter/" className="btn btn-dark">
                    Continue reading..
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 m-4">
              <div className="card" style={{ width: "18rem" }}>
                <Image />
                <div className="card-body">
                  <h5 className="card-title">Einstein Equations</h5>
                  <p className="card-text">
                    Here in this article I'll try explain the theories and
                    equations given by an outstanding genius....
                  </p>
                  <a href="/einstein-equations/" className="btn btn-dark">
                    Continue reading..
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
