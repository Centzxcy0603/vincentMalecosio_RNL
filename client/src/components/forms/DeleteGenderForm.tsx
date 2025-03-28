import { Link } from "react-router-dom";

const DeleteGenderForm = () => {
  return (
    <>
      <div className="form-group">
        <div className="mb-3">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            id="gender"
            readOnly
          />
        </div>
        <div className="d-flex justify-content-end">
          <Link to={"/"} className="btn btn-secondary me-1">
            NO
          </Link>
          <button type="submit" className="btn btn-danger">
            YES
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteGenderForm;
