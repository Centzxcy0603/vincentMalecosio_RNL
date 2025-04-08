import { useEffect, useState } from "react";
import { Users } from "../../../interfaces/Users";
import UserService from "../../../services/UserService";
import ErrorHandler from "../../../handler/ErrorHandler";
import Spinner from "../../Spinner";

interface UsersTableProps {
  refreshUsers: boolean;
  onEditUser: (user: Users) => void;
  onDeleteUser: (user: Users) => void;
}

const UsersTable = ({
  refreshUsers,
  onEditUser,
  onDeleteUser,
}: UsersTableProps) => {
  const [state, setState] = useState({
    loadingUsers: true,
    users: [] as Users[],
  });

  const handleLoadUsers = () => {
    UserService.loadUsers()
      .then((res) => {
        if (res.status === 200) {
          setState((prevState) => ({
            ...prevState,
            users: res.data.users,
          }));
        } else {
          console.error(
            "Unexpected status error while loading users: ",
            res.status
          );
        }
      })
      .catch((error) => {
        ErrorHandler(error, null);
      })
      .finally(() => {
        setState((prevState) => ({
          ...prevState,
          loadingUsers: false,
        }));
      });
  };

  const handleUsersFullName = (user: Users) => {
    let fullName = "";

    if (user.middle_name) {
      fullName = `${user.last_name}, ${
        user.first_name
      } ${user.middle_name.charAt(0)}.`;
    } else {
      fullName = `${user.last_name}, ${user.first_name}`;
    }

    if (user.suffix_name) {
      fullName += ` ${user.suffix_name}`;
    }

    return fullName;
  };

  useEffect(() => {
    handleLoadUsers();
  }, [refreshUsers]);

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Birthdate</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.loadingUsers ? (
            <tr className="align-middle">
              <td colSpan={8} className="text-center">
                <Spinner />
              </td>
            </tr>
          ) : state.users.length > 0 ? (
            state.users.map((user, index) => (
              <tr className="align-middle" key={index}>
                <td>{index + 1}</td>
                <td>{handleUsersFullName(user)}</td>
                <td>{user.gender.gender}</td>
                <td>{user.birth_date}</td>
                <td>{user.address}</td>
                <td>{user.contact_number}</td>
                <td>{user.email}</td>
                <td>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => onEditUser(user)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => onDeleteUser(user)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="align-middle">
              <td colSpan={8} className="text-center">
                No Users Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default UsersTable;
