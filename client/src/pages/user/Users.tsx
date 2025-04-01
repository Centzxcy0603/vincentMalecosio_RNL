import { useState } from "react";
import AddUserModal from "../../components/modals/user/AddUserModal";
import MainLayout from "../layout/MainLayout";

const Users = () => {
  const [openAddUserModal, setOpenAddUserModal] = useState(false);

  const content = (
    <>
      <AddUserModal
        showModal={openAddUserModal}
        onClose={() => setOpenAddUserModal(false)}
      />
      <div className="d-flex justify-content-end mt-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setOpenAddUserModal(true)}
        >
          Add User
        </button>
      </div>
    </>
  );

  return <MainLayout content={content} />;
};

export default Users;
