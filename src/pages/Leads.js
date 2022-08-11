import { useEffect } from "react";
import List from "../components/Leads/List";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Error from "../components/UI/Error";
import NoLeadsFound from "../components/Leads/NoLeadsFound";
import useHttp from "../hooks/use-http";
import { getAllLeads } from "../lib/api";

const Leads = () => {
  const {
    sendRequest,
    status,
    data: loadedLeads,
    error,
  } = useHttp(getAllLeads, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (error) {
    return <Error error={error}></Error>;
  }

  if (status === "completed" && (!loadedLeads || loadedLeads.length === 0)) {
    return <NoLeadsFound></NoLeadsFound>;
  }

  return <List leads={loadedLeads}></List>;
};

export default Leads;
