import LeadSummary from "./LeadSummary";
import LeadItem from "./LeadItem";

import classes from "./List.module.css";

const List = (props) => {
  return (
    <div className={`container ${classes["list-container"]} mt-5`}>
      <LeadSummary leads={props.leads}></LeadSummary>
      <div className="row">
        <div className="col-lg-12 p-5">
          <div className="table-responsive-lg">
            <table
              className={`table caption-top table-sm ${classes["lead-table"]}`}
            >
              <caption>Your Lead List</caption>
              <thead className="border-0">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Organization</th>
                  <th scope="col">Status</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {props.leads.map((lead) => {
                  return (
                    <LeadItem
                      key={lead.id}
                      id={lead.id}
                      name={lead.name}
                      email={lead.email}
                      phone={lead.phone}
                      organization={lead.organization}
                      status={lead.status}
                      owner={lead.owner}
                    ></LeadItem>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
