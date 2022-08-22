import { LazyLoadImage } from "react-lazy-load-image-component";
import warningIcon from "../../icons/warning.png";
import "react-lazy-load-image-component/src/effects/blur.css";

const LeadNotFound = () => {
  return (
    <div className="container mt-5 p-5 text-center text-secondary fw-bold">
      <div className="row">
        <div className="col-lg-12">
          <LazyLoadImage
            src={warningIcon}
            effect="blur"
            height="64px"
            className="img-fluid"
          ></LazyLoadImage>
          <p>Lead not found</p>
        </div>
      </div>
    </div>
  );
};

export default LeadNotFound;
