import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.component.jsx";
import NavigationBar from "./components/navigation/navigation.component.jsx";
import Shop from "./pages/shop/shop.component.jsx";
import SignIn from "./pages/sign-in/sign-in.component.jsx";
import SignUp from "./pages/sign-up/sign-up.component.jsx";
import Checkout from "./pages/checkout/checkout.component.jsx";
import Footer from "./components/footer/footer.component.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils.js";
import { setCurrentUser } from "./utils/actions/user.action.js";
import { setIsCartOpen } from "./utils/actions/cart.action.js";
/**
 * App
 * it is giving the Route of Our App
 */
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
