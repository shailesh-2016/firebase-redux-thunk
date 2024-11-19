import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, viewUser } from "../Layout/UserSlice";

const View = () => {
  const { userList } = useSelector((state) => state.users);

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
        <table className="table table-stripped table-hover table-bordered table-success">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((blog, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{blog.username}</td>
                  <td>{blog.email}</td>
                  <td>{blog.mobile}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={()=> trash(blog.id)}
                    >
                      Delete
                    </button>
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default View;
