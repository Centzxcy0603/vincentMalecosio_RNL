import { Link } from "react-router-dom";

const EditGenderForm = () => {
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
          />
        </div>
        <div className="d-flex justify-content-end">
          <Link to={"/"} className="btn btn-secondary me-1">
            Back
          </Link>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default EditGenderForm;
