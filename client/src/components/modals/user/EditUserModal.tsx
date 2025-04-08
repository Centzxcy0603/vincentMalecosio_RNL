import { useRef, useState } from "react";
import { Users } from "../../../interfaces/Users";
import EditUserForm from "../../forms/user/EditUserForm";
import AlertMessage from "../../AlertMessage";
import SpinnerSmall from "../../SpinnerSmall";

interface EditUserModalProps {
  showModal: boolean;
  user: Users | null;
  onRefreshUsers: (refresh: boolean) => void;
  onClose: () => void;
}

const EditUserModal = ({
  showModal,
  user,
  onRefreshUsers,
  onClose,
}: EditUserModalProps) => {
  const submitFormRef = useRef<() => void | null>(null);

  const [refreshUsers, setRefreshUsers] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleShowAlertMessage = (
    message: string,
    isSuccess: boolean,
    isVisible: boolean
  ) => {
    setMessage(message);
    setIsSuccess(isSuccess);
    setIsVisible(isVisible);
  };

  const handleCloseAlertMessage = () => {
    setMessage("");
    setIsSuccess(false);
    setIsVisible(false);
  };

  return (
    <>
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Edit User</h1>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <AlertMessage
                  message={message}
                  isSuccess={isSuccess}
                  isVisible={isVisible}
                  onClose={handleCloseAlertMessage}
                />
              </div>
              <EditUserForm
                user={user}
                setSubmitForm={submitFormRef}
                setLoadingUpdate={setLoadingUpdate}
                onUserUpdated={(message) => {
                  handleShowAlertMessage(message, true, true);
                  setRefreshUsers(!refreshUsers);
                  onRefreshUsers(refreshUsers);
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                disabled={loadingUpdate}
                onClick={onClose}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loadingUpdate}
                onClick={() => submitFormRef.current?.()}
              >
                {loadingUpdate ? (
                  <>
                    <SpinnerSmall /> Updating User...
                  </>
                ) : (
                  "Save User"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUserModal;
