import "./sign-up.styles.scss";

import { useState } from "react";

const SignUp = () => {
  const [formFields, setFromFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = formFields;
  console.log("form", formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({
      ...formFields,
      [name]: value,
    });
  };
  return (
    <>
      <h1>Sign Up</h1>
      <div className="textBox">
        <form onSubmit={() => {}}>
          <p>
            <input
              type="text"
              placeholder="Display name"
              onChange={handleChange}
              required
              name="displayName"
              value={displayName}
            />
            <label className="firstLabel">Name</label>
          </p>
          <p>
            <input
              required
              type="email"
              placeholder="Type email"
              onChange={handleChange}
              name="email"
              value={email}
            />
            <label className="secondLabel">Email</label>
          </p>
          <p>
            <input
              required
              type="password"
              placeholder="Type password"
              onChange={handleChange}
              name="password"
              value={password}
            />
            <label className="thirdLabel">Password</label>
          </p>
          <p>
            <input
              required
              type="password"
              placeholder="Confirm password"
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
            />
            <label className="fourthLabel">Re-Type</label>
          </p>
          <p> ALready </p>
          <div className="buttons">
            <button type="button" className="btn btn-secondary signUpCenter">
              SIGN-UP
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
