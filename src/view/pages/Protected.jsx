import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const ProtectedAppPage = () => {
  const isLogIn = localStorage?.getItem("user");
  console.log(isLogIn, "loggin");
  if (!isLogIn) {
    return <Redirect to="/pages/authentication/login" />;
  }

  return null;
};
export default ProtectedAppPage;
