import { LazyLoadImage } from "react-lazy-load-image-component";
import notFoundImage from "../img/not-found.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import * as classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className="container mt-5 p-5 text-center text-secondary fw-bold">
      <div className="row">
        <div className="col-lg-12">
          <div className={classes["notfound-image"]}>
            <LazyLoadImage
              src={notFoundImage}
              effect="blur"
              max-width="100%"
              height="auto"
              className="img-fluid"
            ></LazyLoadImage>
          </div>
          <p>The page you are looking for is not found!</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
