import React from "react"

export default class Footer extends React.Component {
  render() {
    return (
      <div className="mt-3 pt-3 pb-3 footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2>About</h2>
              <p className="pr-5 text-white-50">
                I'm an MEARN Stack web developer who has interest in Astrophysics
                and cosmology.
              </p>
            </div>
            <div className="col-lg-3 col-xs-12 links"></div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Developer Address::</h4>
              <p>Bharath Chandra DM</p>
              <p>Dreamer | Developer</p>
              <p>Mumbai, India.</p>
              <p>bharathchandra426@gmail.com</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col copyright">
              <p className="">
                <small className="text-white-50">
                  © From now to eternity. Built with{" "}
                  <a href="https://www.gatsbyjs.org" target="blank">
                    Gatsby.
                  </a>{" "}
                  All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
