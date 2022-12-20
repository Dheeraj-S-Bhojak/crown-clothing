import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1> hello i am sign in </h1>
      <button onClick={logGoogleUser}>Sign-in With Google</button>
    </div>
  );
};

export default SignIn;
