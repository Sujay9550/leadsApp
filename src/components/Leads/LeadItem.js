import { Link } from "react-router-dom";
import deleteIcon from "../../icons/delete.png";

import * as classes from "./LeadItem.module.css";

const LeadItem = (props) => {
  let statusBadge = `badge rounded-pill`;
  const status = `${props.status}`;

  switch (status) {
    case "Prospect":
      statusBadge = `badge ${classes["primary-badge"]} rounded-pill`;
      break;

    case "Pipeline":
      statusBadge = `badge ${classes["warning-badge"]} rounded-pill`;
      break;

    case "Shortlisted":
      statusBadge = `badge ${classes["secondary-badge"]} rounded-pill`;
      break;

    case "Converted":
      statusBadge = `badge ${classes["success-badge"]} rounded-pill`;
      break;

    case "Closed Lost":
      statusBadge = `badge ${classes["danger-badge"]} rounded-pill`;
      break;
  }

  return (
    <tr key={props.id}>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.organization}</td>
      <td>
        <span className={statusBadge}>{props.status}</span>
      </td>
      <td>{props.owner}</td>
      <td>
        <div className="d-flex justify-content-evenly align-items-center">
          <Link
            className={`${classes["view-button"]}`}
            to={`/leads/${props.id}`}
          >
            View
          </Link>
          <img className={classes["delete-icon"]} src={deleteIcon} />
        </div>
      </td>
    </tr>
  );
};

export default LeadItem;
