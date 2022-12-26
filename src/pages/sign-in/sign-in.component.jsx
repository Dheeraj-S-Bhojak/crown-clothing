import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>Sign In</h1>
      <div className="textBox">
        <form>
          <p>
            <input required type="email" placeholder="Type email" />
            <label className="firstLabel">Email</label>
          </p>
          <p>
            <input required type="password" placeholder="Type password" />
            <label className="secondLabel">Password</label>
          </p>
          <p> new </p>
          <div className="buttons">
            <button type="button" className="btn btn-secondary signInCenter">
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
