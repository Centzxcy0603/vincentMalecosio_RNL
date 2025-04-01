import AxiosInstance from "../AxiosInstance";

const UserService = {
  storeUser: async (data: any) => {
    return AxiosInstance.post("/storeUser", data)
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  },
};

export default UserService;
