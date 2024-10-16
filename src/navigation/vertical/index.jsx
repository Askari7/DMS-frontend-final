import dashboards from "./dashboards";
import apps from "./apps";
import pages from "./pages";
import userInterface from "./user-interface";
import pages_lead from "./pages_lead";
import pages_client from "./pages_client";

// Function to return navigation based on user role
const getNavigation = () => {
  const user = JSON.parse(localStorage?.getItem("user"));
  let navigation = [];

  if (user?.user?.roleId) {
    switch (user.user.roleId) {
      case 6:
        navigation = [...dashboards, ...apps, ...pages_lead, ...userInterface];
        break;
      case 2:
      case 3:
      case 4:
      case 5:
        navigation = [...dashboards, ...apps, ...pages_client, ...userInterface];
        break;
      default:
        navigation = [...dashboards, ...apps, ...pages, ...userInterface];
    }
  } else {
    navigation = [...dashboards, ...apps, ...pages, ...userInterface];
  }

  return navigation;
};

// Export the computed navigation
const navigation = getNavigation();
export default navigation;
