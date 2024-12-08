import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { addUser } from "../Layout/UserSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const redirect = useNavigate();

  function form(data) {
    dispatch(addUser({ ...data }))
      .then(() => {
        toast.success("🦄 Data successfully submitted!", {
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



<div className="form-bg">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow-lg mt-5 border-0 rounded-3">
          <div className="card-header text-center bg-gradient-primary text-white py-4 rounded-top">
            <h3>Add User Data</h3>
          </div>
          <div className="card-body p-4">
            <form onSubmit={handleSubmit(form)}>
              {/* Username Field */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Enter Username",
                    },
                    minLength: {
                      value: 3,
                      message: "Enter min 3 characters",
                    },
                    maxLength: {
                      value: 15,
                      message: "Enter max 15 characters",
                    },
                    
                  })}
                />
                <label htmlFor="username">
                  <i className="fa-solid fa-user me-2"></i> Username
                </label>
                <p className="text-danger text-center">{errors?.username?.message}</p>
              </div>

              {/* Email Field */}
              <div className="form-floating mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
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
                  <i className="fa-solid fa-envelope me-2"></i> Email
                </label>
                <p className="text-danger text-center">{errors?.email?.message}</p>
              </div>

              {/* Mobile Field */}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  placeholder="Mobile"
                  className="form-control"
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
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid mobile number",
                    },
                  })}
                />
                <label htmlFor="mobile">
                  <i className="fa-solid fa-phone me-2"></i> Mobile
                </label>
                <p className="text-danger text-center">{errors?.mobile?.message}</p>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <button type="submit" className="btn btn-outline-primary px-4">
                  <i className="fa-solid fa-check me-2"></i> Submit
                </button>

                <NavLink to="/View" className="btn btn-outline-dark">
                  <i className="fa-solid fa-users-viewfinder"></i> View Data
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <ToastContainer />
    </>
  );
};

export default Create;
