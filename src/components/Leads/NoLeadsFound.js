import { LazyLoadImage } from "react-lazy-load-image-component";
import noLeadsIcon from "../../icons/no-leads.png";
import "react-lazy-load-image-component/src/effects/blur.css";

const NoLeadsFound = () => {
  return (
    <div className="container mt-5 p-5 text-center fw-bold">
      <div className="row">
        <div className="col-lg-12">
          <LazyLoadImage
            src={noLeadsIcon}
            effect="blur"
            height="64px"
            className="img-fluid"
          ></LazyLoadImage>
          <p>No leads found! Create a new one.</p>
        </div>
      </div>
    </div>
  );
};

export default NoLeadsFound;
