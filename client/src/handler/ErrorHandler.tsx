import { useNavigate } from "react-router-dom";

const ErrorHandler = (
  error: any,
  navigate: ReturnType<typeof useNavigate> | null
) => {
  if (navigate) {
    if (error.response.status === 401 || error === 401) {
      navigate("/");
    }
  } else {
    console.error("Unexpected server error: ", error);
  }
};

export default ErrorHandler;
