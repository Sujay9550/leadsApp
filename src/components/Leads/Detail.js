import { LazyLoadImage } from "react-lazy-load-image-component";
import leadIcon from "../../icons/lead.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import * as classes from "./Detail.module.css";

const Detail = (props) => {
  let statusClass;
  const status = `${props.status}`;

  switch (status) {
    case "Prospect":
      statusClass = `${classes["status-prospect"]}`;
      break;

    case "Pipeline":
      statusClass = `${classes["status-pipeline"]}`;
      break;

    case "Shortlisted":
      statusClass = `${classes["status-shortlisted"]}`;
      break;

    case "Converted":
      statusClass = `${classes["status-converted"]}`;
      break;

    case "Closed Lost":
      statusClass = `${classes["status-closed-lost"]}`;
      break;
  }

  return (
    <div className={`container mt-5 p-5 ${classes["detail-container"]}`}>
      <div className="row p-2">
        <div className="col-lg-4 d-flex justify-content-center align-items-center">
          <div className={classes["detail-image"]}>
            <LazyLoadImage
              src={leadIcon}
              effect="blur"
              max-width="100%"
              height="auto"
              className="img-fluid"
            ></LazyLoadImage>
          </div>
        </div>
        <div className="col-lg-8 d-flex justify-content-center align-items-center">
          <div className="container">
            <div className={`row p-2 ${classes["slide-right"]}`}>
              <div className="col-lg-4">
                <div className={`card text-center ${classes["info-item"]}`}>
                  <div className="card-body">
                    <h5>Name</h5>
                    <p>{props.name}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={`card text-center ${classes["info-item"]}`}>
                  <div className="card-body">
                    <h5>Email</h5>
                    <p>{props.email}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={`card text-center ${classes["info-item"]}`}>
                  <div className="card-body">
                    <h5>Phone</h5>
                    <p>{props.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`row p-2 ${classes["slide-left"]}`}>
              <div className="col-lg-4">
                <div className={`card text-center ${classes["info-item"]}`}>
                  <div className="card-body">
                    <h5>Organization</h5>
                    <p>{props.organization}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className={`card text-center ${classes["info-item"]} ${statusClass}`}
                >
                  <div className="card-body">
                    <h5>Status</h5>
                    <p>{props.status}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className={`card text-center ${classes["info-item"]} ${classes.owner}`}
                >
                  <div className="card-body">
                    <h5>Owner</h5>
                    <p>{props.owner}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
