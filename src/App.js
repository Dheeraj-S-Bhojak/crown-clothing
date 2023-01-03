import { Route, Routes } from "react-router-dom";
import Directory from "./components/directory/directory.component.jsx";
import NavigationBar from "./components/navigation/navigation.component.jsx";
import Shop from "./pages/shop/shop.component.jsx";
import SignIn from "./pages/sign-in/sign-in.component.jsx";
import SignUp from "./pages/sign-up/sign-up.component.jsx";
import Checkout from "./pages/checkout/checkout.component.jsx";

/**
 * App
 * it is giving the Route of Our App 
 */
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Directory />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
