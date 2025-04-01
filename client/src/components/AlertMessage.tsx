import { useEffect } from "react";

interface AlertMessageProps {
  message: string;
  isSuccess: boolean;
  isVisible: boolean;
  onClose: () => void;
}

const AlertMessage = ({
  message,
  isSuccess,
  isVisible,
  onClose,
}: AlertMessageProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <>
      <div
        className={`alert ${isSuccess ? "alert-success" : "alert-danger"} ${
          isVisible ? "show" : "d-none"
        }`}
        role="alert"
      >
        {message}
      </div>
    </>
  );
};

export default AlertMessage;
