import dashboards from "./dashboards";
import apps from "./apps";
import pages from "./pages";
import userInterface from "./user-interface";
import pages_lead from "./pages_lead";
import pages_client from "./pages_client";


let navigation = [...dashboards, ...apps, ...pages, ...userInterface];

const user = JSON.parse(localStorage?.getItem("user"));
if (user?.user.roleId === 6) {
  navigation = [...dashboards, ...apps, ...pages_lead, ...userInterface];
}
if (user?.user.roleId === 2||user?.user.roleId === 3||user?.user.roleId === 4||user?.user.roleId === 5) {
  navigation = [...dashboards, ...apps, ...pages_client, ...userInterface];
}

export default navigation;
