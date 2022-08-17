import * as classes from "./LeadSummary.module.css";

const LeadSummary = (props) => {
  const leads = props.leads;

  const totalLeads = leads.length;

  const totalPipeline = leads.filter((lead) => {
    return lead.status === "Pipeline";
  }).length;

  const totalShortlisted = leads.filter((lead) => {
    return lead.status === "Shortlisted";
  }).length;

  const totalConverted = leads.filter((lead) => {
    return lead.status === "Converted";
  }).length;

  return (
    <div className={`row ${classes["summary-container"]} p-4`}>
      <div className="col-lg-3 col-md-6 p-0">
        <div className={`m-3 p-4 ${classes.total}`}>
          <p>{totalLeads}</p>
          <h5>Total</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 p-0">
        <div className={`m-3 p-4 ${classes.pipeline}`}>
          <p>{totalPipeline}</p>
          <h5>Pipeline</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 p-0">
        <div className={`m-3 p-4 ${classes.shortlisted}`}>
          <p>{totalShortlisted}</p>
          <h5>Shortlisted</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 p-0">
        <div className={`m-3 p-4 ${classes.converted}`}>
          <p>{totalConverted}</p>
          <h5>Converted</h5>
        </div>
      </div>
    </div>
  );
};

export default LeadSummary;
