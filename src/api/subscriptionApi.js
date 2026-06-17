import API from "./scannerApi";

export const getSubscriptionStatus = async () => {
  const res = await API.get("/api/subscription/status");
  return res.data;
};

export const createSubscriptionOrder = async (data = {}) => {
  const res = await API.post("/api/subscription/create-order", data);
  return res.data;
};
