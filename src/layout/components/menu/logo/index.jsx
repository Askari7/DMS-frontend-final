import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DMSLogo from "../../../../assets/images/logo/Logo-01.png";

export default function MenuLogo(props) {


  return (
    <div className="hp-header-logo hp-d-flex hp-align-items-center">
      <Link
        to="/"
        onClick={props.onClose}
        className="hp-position-relative hp-d-flex"
        style={{
          animation: `moveUpDown 4s ease-in-out infinite`, // Apply animation for moving up and down
        }}
      >
        <img
          className="hp-logo"
          src={DMSLogo}
          style={{
            width: "160px",
            height: "120px",
            background: "transparent",
          }}
          alt="logo"
        />
      </Link>
    </div>
  );
}

const styles = `
  @keyframes moveUpDown {
    0% {
      transform: translateY(15px); /* Move to original position */
    }
    50% {
      transform: translateY(-15px); /* Move up */
    }
    100% {
      transform: translateY(15px); /* Move down to original position */
    }
  }
`;

// Injecting the styles into the document head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
