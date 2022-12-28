import { useState } from "react";
import { Link } from "react-router-dom";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [formFields, setFromFields] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formFields;
  console.log("form", formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      console.log("hello", res);
    } catch (error) {
      console.log(`user creation encountered error: ${error}`);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({
      ...formFields,
      [name]: value,
    });
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
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
              type="password"
              placeholder="Type password"
              onChange={handleChange}
              name="password"
              value={password}
            />
          </p>

          <p className=" text-color-2">
            New to CRWN CLOTHING?{" "}
            <Link to="/log-in">
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
