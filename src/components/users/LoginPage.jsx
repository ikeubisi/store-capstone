import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import DOMPurify from "dompurify";
import * as Yup from "yup";

// Components & Store
import { setUserName } from "../../store/userSlice";

// Styles
import "../../styles/users.css";

// Validation if a lot like the register page
// You can only purchase items if logged in or registered
export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Formik used for user feedback
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    // Yup used for validating objects entered
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: () => {
      // Update Header with user login username
      dispatch(setUserName(DOMPurify.sanitize(formik.values.userName)));
      // Redirect user to Product page
      navigate("/products");
    },
  });
  return (
    <>
      <h1>Login</h1>
      <hr />
      <div className="storeImageContainer">
        <img
          className="kitchenUtensils"
          src="/images/kitchen_utensils/kitchenUtensils5.jpg"
          alt="kitchen utensils"
          title="React Store Capstone Kitchen Utensils"
        />
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="column">
          <label htmlFor="lastName">Username</label>
          <input
            id="userName"
            name="userName"
            type="text"
            placeholder="Username"
            {...formik.getFieldProps("userName")}
            className="form-control m-2"
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className="fw-bold text-danger mb-1">
              {formik.errors.userName}
            </div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            {...formik.getFieldProps("password")}
            className="form-control m-2"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fw-bold text-danger mb-1">
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </>
  );
}
