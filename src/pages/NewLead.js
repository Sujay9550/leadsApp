import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AddLead from "../components/Leads/AddLead";
import useHttp from "../hooks/use-http";
import { addLead } from "../lib/api";

const NewLead = () => {
  const { status, sendRequest } = useHttp(addLead);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/leads");
    }
  }, [status, history]);

  const addLeadHandler = (leadData) => {
    sendRequest(leadData);
  };
  return (
    <AddLead
      isLoading={status === "pending"}
      onAddLead={addLeadHandler}
    ></AddLead>
  );
};

export default NewLead;
