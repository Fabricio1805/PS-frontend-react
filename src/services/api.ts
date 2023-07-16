import axios from "axios";


export const setupAPIClient = () => {
 
  const api = axios.create({
    baseURL: "http://localhost:8080/api/transaction",
  });

  return api;
};
