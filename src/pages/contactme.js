import React from "react"
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import SEO from "../components/seo"

export default class ContactMe extends React.Component {
  render() {
    return (
      <div>
        <SEO title="AstroGeekz | How to reach me" />
        <NavBar />
        <div className=" container main-container">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-12"></div>
            <div className="col-lg-10 col-md-10 col-sm-12">
              <div className="jumbotron">
                <p>
                  Hi every one it's me again. I'm thankful since you've come
                  this far to read the things that I've written. If you want to
                  give suggestions on any thing, I'll always welcome those. You
                  can find my details in the bottom of every page.
                </p>
                <p>
                  Hope you have understand something about our existance. And
                  don't forget to look up in the sky and then you'll realise
                  that you're not alone, a part of you always stays there :)
                </p>
                <p>
                  The website is still in development. So you may experience
                  some UI issues. Sorry for that. I'm regularly resolving the
                  issues. If you come across any site malfunctions please send a
                  mail regarding to it, so that I'll resolve those things also.
                  Thank you.
                </p>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12"></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
