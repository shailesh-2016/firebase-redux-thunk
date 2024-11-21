import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, viewUser } from "../Layout/UserSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Update = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const { userList } = useSelector((state) => state.users);
  const singleUser = userList.find((user) => {
    return user.id === id;
  });

  useEffect(() => {
    dispatch(viewUser());
    reset(singleUser);
  }, [dispatch]);

  function updateData(data) {
    dispatch(editUser(data))
    .then(() => {
      toast.warn("🦄 Data Updated!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setTimeout(() => {
        redirect("/View");
      }, 2000);
    })
    .catch(() => {
      toast.error("❌ Error submitting data!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    });
  }

  return (
    <>
     <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow-lg mt-5 border-0">
        <div className="card-header text-center bg-gradient-warning text-dark">
          <h3>Update User Data</h3>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit(updateData)}>
            {/* Username Field */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control shadow-sm"
                id="username"
                placeholder="Enter Username"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Enter username",
                  },
                  minLength: {
                    value: 3,
                    message: "Enter min 3 characters",
                  },
                  maxLength: {
                    value: 10,
                    message: "Enter max 15 characters",
                  },
                 
                })}
              />
              <label htmlFor="username">
                <i className="fa-solid fa-user me-2"></i>Username
              </label>
              <p className="text-danger text-center">{errors?.username?.message}</p>
            </div>

            {/* Email Field */}
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control shadow-sm"
                id="email"
                placeholder="Enter Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Enter email",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              <label htmlFor="email">
                <i className="fa-solid fa-envelope me-2"></i>Email
              </label>
              <p className="text-danger text-center">{errors?.email?.message}</p>
            </div>

            {/* Mobile Field */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control shadow-sm"
                id="mobile"
                placeholder="Enter Mobile"
                {...register("mobile", {
                  required: {
                    value: true,
                    message: "Enter mobile number",
                  },
                  minLength: {
                    value: 10,
                    message: "Enter exactly 10 digits",
                  },
                  maxLength: {
                    value: 10,
                    message: "Enter exactly 10 digits",
                  },
                  pattern: {
                    value: /^[0-9]{10}$/, // Only 10 digits allowed
                    message: "Enter a valid mobile number",
                  },
                })}
              />
              <label htmlFor="mobile">
                <i className="fa-solid fa-phone me-2"></i>Mobile
              </label>
              <p className="text-danger text-center">{errors?.mobile?.message}</p>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between mt-4">
              <button
                type="submit"
                className="btn btn-gradient-warning px-4"
              >
                <i className="fa-solid fa-pencil me-2"></i> Update Data
              </button>
              <button
                type="button"
                className="btn btn-gradient-secondary px-4"
                onClick={() => redirect(-1)}
              >
                <i className="fa-solid fa-arrow-left me-2"></i> Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<ToastContainer/>

    </>
  );
};

export default Update;
