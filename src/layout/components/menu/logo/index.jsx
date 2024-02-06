import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import logoSmall from "../../../../assets/images/logo/logo-small.svg";
import logoSmallDark from "../../../../assets/images/logo/logo-small-dark.svg";
import logo from "../../../../assets/images/logo/logo.svg";
import logoDark from "../../../../assets/images/logo/logo-dark.svg";
import logoRTL from "../../../../assets/images/logo/logo-rtl.svg";
import logoRTLDark from "../../../../assets/images/logo/logo-rtl-dark.svg";
import DMSLogo from "../../../../assets/images/logo/dms-logo.png";
import JobConnectLogo from "../../../../assets/images/logo/logo2.jpeg";

import themeConfig from "../../../../configs/themeConfig.jsx";

export default function MenuLogo(props) {
  const customise = useSelector((state) => state.customise);

  return (
    <div className="hp-header-logo hp-d-flex hp-align-items-center">
      <Link
        to="/"
        onClick={props.onClose}
        className="hp-position-relative hp-d-flex"
      >
        {/* {
          props.small ? (
            customise.theme == "light" ? (
              <img className="hp-logo" src={logoSmall} alt="logo" />
            ) : (
              <img className="hp-logo" src={logoSmallDark} alt="logo" />
            )
          ) : (
            customise.direction == "rtl" ? (
              customise.theme == "light" ? (
                <img className="hp-logo" src={logoRTL} alt="logo" />
              ) : (
                <img className="hp-logo" src={logoRTLDark} alt="logo" />
              )
            ) : (
              customise.theme == "light" ? (
                <img className="hp-logo" src={logoDark} alt="logo" />
              ) : (
                <img className="hp-logo" src={logoDark} alt="logo" />
              )
            )
          )
        } */}

        <img className="hp-logo" src={DMSLogo} alt="logo" />
        {/* <h3>Job Connect</h3> */}
      </Link>
    </div>
  );
}
