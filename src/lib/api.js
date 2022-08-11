const API_URL = process.env.API_URL;

const getAllLeads = async () => {
  const response = await fetch(`${API_URL}/leads.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch leads.");
  }

  const transformedLeads = [];

  for (const key in data) {
    const leadObj = {
      id: key,
      name: data[key].name,
      email: data[key].email,
      phone: data[key].phone,
      organization: data[key].organization,
      status: data[key].status,
      owner: data[key].owner,
    };

    transformedLeads.push(leadObj);
  }

  return transformedLeads;
};

const getSingleLead = async (leadId) => {
  const response = await fetch(`${API_URL}/leads/${leadId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch lead.");
  }

  const loadedLead = {
    id: leadId,
    ...data,
  };

  return loadedLead;
};

const addLead = async (leadData) => {
  const response = await fetch(`${API_URL}/leads.json`, {
    method: "POST",
    body: JSON.stringify(leadData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create lead.");
  }

  return null;
};

export { getAllLeads, getSingleLead, addLead };
