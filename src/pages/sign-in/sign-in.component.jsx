import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";

import "./sign-in.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

/**
 * SignIn
 *  SignIn responsible for take object and return SignIn object jsx format
 *  @returns {object}
 */
const SignIn = () => {
  const [formFields, setFromFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //resetFormFields for clear the form fields
  const resetFormFields = () => {
    setFromFields(defaultFormFields);
  };

  // handleSubmit for submit the form and wait for result
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log(`user creation encountered error: ${error}`);
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

  // logGoogleUser for login the user from google pop up
  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    <>
      <h1 className="headingCenter">CROWN CLOTHING</h1>
      <h6 className="headingCenter mb-5">sign in with email and password</h6>
      <hr className="signUpHR" />

      <div className="textBox">
        <form onSubmit={handleSubmit}>
          <p>
            <FormInput
              labelClassName="firstLabel"
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
              labelClassName="secondLabel"
              label="Password"
              required
              type="Password"
              placeholder="Type password"
              onChange={handleChange}
              name="password"
              value={password}
            />
          </p>

          <p className=" text-color-2">
            New to CRWN CLOTHING?{" "}
            <Link to="/sign-up">
              {" "}
              SIGN-UP <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>
          </p>
          <div className="buttons">
            <button type="submit" className="btn btn-secondary signInCenter">
              SIGN-IN
            </button>
            <button
              type="button"
              className="btn btn-secondary signInGoogleCenter"
              onClick={logGoogleUser}
            >
              <i className="fa-brands fa-google" id="icon" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
