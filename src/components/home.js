import React from "react"

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-12"></div>
            <div className="col-lg-10 col-md-10 col-sm-12">
              <div className="jumbotron">
                <h1 className="display-4">Hello world!</h1>
                <p className="lead">
                  This is a grand welcome to all the AstroGeeks who are
                  intrested in AstroPhysics and cosmology fields. My name is{" "}
                  <span style={{ color: " #5d6d7e " }}>
                    Bharath Chandra DM{" "}
                  </span>
                  and I'm the author of this website. Here I will post articles
                  about most intriguing topics in cosmology and about recent
                  invenctions/discoveries.
                </p>
                <hr className="my-4" />
                <p>
                  If you agree or not, we all are part of the universe.The
                  Universe is everything we can touch, feel, sense, measure or
                  detect. It includes every living things, planets, stars,
                  galaxies, dust clouds, light, and even time. And most of the
                  people don't know any thing about it. So the main aim of this
                  website is to familiarize universe to you, so that you'll
                  understand the grandest design of every thing that ever
                  existed. Happy reading to every one.
                </p>
                <p className="my-quote">
                  Many people believe that the universe is so big and it's the
                  same if we ever existed or not. But not me because to me the
                  "universe lives within my self".
                </p>
                <a
                  className="btn btn-success btn-lg"
                  href="/articles/"
                  role="button"
                >
                  Let's read!!
                </a>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12"></div>
          </div>
        </div>
      </div>
    )
  }
}
