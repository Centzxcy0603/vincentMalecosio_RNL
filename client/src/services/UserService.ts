import AxiosInstance from "../AxiosInstance";

const UserService = {
  loadUsers: async () => {
    return AxiosInstance.get("/loadUsers")
      .then((respose) => respose)
      .catch((error) => {
        throw error;
      });
  },
  storeUser: async (data: any) => {
    return AxiosInstance.post("/storeUser", data)
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  },
};

export default UserService;
