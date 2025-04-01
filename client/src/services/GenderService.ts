import AxiosInstance from "../AxiosInstance";

const GenderService = {
  loadGenders: async () => {
    return AxiosInstance.get("/loadGenders")
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  },
  getGender: async (genderId: number) => {
    return AxiosInstance.get(`/getGender/${genderId}`)
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
  updateGender: async (genderId: number, data: any) => {
    return AxiosInstance.put(`/updateGender/${genderId}`, data)
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  },
  destroyGender: async (genderId: number) => {
    return AxiosInstance.put(`/destroyGender/${genderId}`)
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  },
};

export default GenderService;
