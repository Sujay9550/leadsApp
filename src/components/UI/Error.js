import { LazyLoadImage } from "react-lazy-load-image-component";
import errorImage from "../../img/error.png";
import "react-lazy-load-image-component/src/effects/blur.css";

const Error = (props) => {
  return (
    <div className="container mt-5 p-5 text-center text-secondary fw-bold">
      <div className="row">
        <div className="col-lg-12">
          <LazyLoadImage
            src={errorImage}
            effect="blur"
            width="400px"
            height="400px"
            className="img-fluid"
          ></LazyLoadImage>
          <p>{props.error}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
