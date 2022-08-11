import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Detail from "../components/Leads/Detail";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Error from "../components/UI/Error";
import LeadNotFound from "../components/Leads/LeadNotFound";
import useHttp from "../hooks/use-http";
import { getSingleLead } from "../lib/api";

const LeadDetail = () => {
  const params = useParams();
  const { leadId } = params;

  const {
    sendRequest,
    status,
    data: loadedLead,
    error,
  } = useHttp(getSingleLead, true);

  useEffect(() => {
    sendRequest(leadId);
  }, [sendRequest, leadId]);

  if (status === "pending") {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (error) {
    return <Error error={error}></Error>;
  }

  if (!loadedLead.name) {
    return <LeadNotFound></LeadNotFound>;
  }

  return (
    <Detail
      id={loadedLead.id}
      name={loadedLead.name}
      email={loadedLead.email}
      phone={loadedLead.phone}
      organization={loadedLead.organization}
      status={loadedLead.status}
      owner={loadedLead.owner}
    ></Detail>
  );
};

export default LeadDetail;
