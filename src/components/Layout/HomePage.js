import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import homeImage from "../../img/home.png";
import "react-lazy-load-image-component/src/effects/blur.css";

import * as classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="container mt-5 p-5 text-center">
      <div className="row">
        <div className="col-lg-12">
          <LazyLoadImage
            src={homeImage}
            effect="blur"
            width="100%"
            height="333px"
            className="img-fluid"
          ></LazyLoadImage>
          <div className={`${classes["home-content"]}`}>
            <h2>
              Win and retain more customers by optimizing the sales process
              through LeadsApp
            </h2>
            <Link className="btn btn-outline-primary btn-lg" to="/auth">
              Login or SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
