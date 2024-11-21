import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, viewUser } from "../Layout/UserSlice";
import { NavLink, useNavigate } from "react-router-dom";

const View = () => {
  const { userList } = useSelector((state) => state.users);
  const redirect=useNavigate()

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewUser());
  }, [dispatch]);
  console.log(userList);

  function trash(id) {
    dispatch(deleteUser(id));
  }

  return (
    <>
     <div className="container my-5">
  <h3 className="text-center mb-4">All User Datalist</h3>
  <div className="table-responsive">
    <table className="table table-hover table-bordered text-center align-middle">
      <thead className="bg-gradient-primary text-white">
        <tr>
          <th>S.No</th>
          <th>Username</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((blog, index) => (
          <tr key={blog.id} className="table-row-hover">
            <td>{index + 1}</td>
            <td>{blog.username}</td>
            <td>{blog.email}</td>
            <td>{blog.mobile}</td>
            <td>
              {/* <NavLink
                className="btn btn-gradient-info btn-sm me-2"
                to={`/View/${blog.id}`}
              >
                <i className="fa-solid fa-eye"></i>
              </NavLink> */}

              <NavLink
                className="btn btn-gradient-warning btn-sm me-2"
                to={`/update/${blog.id}`}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </NavLink>

              <button
                className="btn btn-gradient-danger btn-sm"
                onClick={() => trash(blog.id)}
              >
                <i className="fa-solid fa-user-minus"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="text-center mt-4">
      <button
        type="button"
        className="btn btn-gradient-secondary px-4"
        onClick={() => redirect(-1)}
      >
        <i className="fa-solid fa-arrow-left"></i> Back
      </button>
    </div>
  </div>
</div>
    </>
  );
};

export default View;
