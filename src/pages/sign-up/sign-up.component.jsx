import "./sign-up.styles.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../components/form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

/**
 * SignUp
 *  SignUp responsible for take object and return SignUp object jsx format
 *  @returns {object}
 */
const SignUp = () => {
  const [formFields, setFromFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log("form", formFields);

  //resetFormFields for clear the form fields
  const resetFormFields = () => {
    setFromFields(defaultFormFields);
  };

  // handleSubmit for submit the form and wait for result
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password not matched");
      return;
    }

    try {
      const user = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, Email is already In user");
      } else {
        console.log(`user creation encountered error: ${error}`);
      }
    }
  };

  // handleChange for set the state value from form data
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({
      ...formFields,
      [name]: value,
    });
  };
  return (
    <>
      <h1 className="headingCenter">CROWN CLOTHING</h1>
      <h6 className="headingCenter mb-5">sign up with email and password</h6>
      <hr className="signUpHR" />
      <div className="textBox">
        <form onSubmit={handleSubmit}>
          <p>
            <FormInput
              labelClassName="firstLabel"
              label="name"
              required
              type="text"
              placeholder="Display name"
              onChange={handleChange}
              name="displayName"
              value={displayName}
            />
          </p>
          <p>
            <FormInput
              labelClassName="secondLabel"
              label="Email"
              required
              type="email"
              placeholder="Type email"
              onChange={handleChange}
              name="email"
              value={email}
            />
          </p>
          <p>
            <FormInput
              labelClassName="thirdLabel"
              label="Password"
              required
              type="Password"
              placeholder="Type password"
              onChange={handleChange}
              name="password"
              value={password}
            />
          </p>
          <p>
            <FormInput
              labelClassName="fourthLabel"
              label="Password"
              required
              type="Password"
              placeholder="Confirm password"
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
            />
          </p>
          <p className=" text-color-2">
            Already Have An Account?{" "}
            <Link to="/sign-in">
              {" "}
              SIGN-IN <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>
          </p>
          <div className="buttons">
            <button type="submit" className="btn btn-secondary signUpCenter">
              SIGN-UP
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
