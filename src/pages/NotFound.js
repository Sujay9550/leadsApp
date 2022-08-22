import { LazyLoadImage } from "react-lazy-load-image-component";
import notFoundImage from "../img/not-found.png";
import "react-lazy-load-image-component/src/effects/blur.css";

const NotFound = () => {
  return (
    <div className="container mt-5 p-5 text-center text-secondary fw-bold">
      <div className="row">
        <div className="col-lg-12">
          <LazyLoadImage
            src={notFoundImage}
            effect="blur"
            height="400px"
            className="img-fluid"
          ></LazyLoadImage>
          <p>The page you are looking for is not found!</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
