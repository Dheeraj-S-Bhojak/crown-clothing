import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

import "./navigation.styles.scss";

const NavigationBar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default NavigationBar;
