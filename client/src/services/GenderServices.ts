import AxiosInstance from "../AxiosInstance";

const GenderServices = {
  loadGenders: async () => {
    return AxiosInstance.get("/loadGenders")
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  },
  storeGender: async (data: any) => {
    return AxiosInstance.post("/storeGender", data)
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  },
};

export default GenderServices;
