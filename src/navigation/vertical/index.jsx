import dashboards from "./dashboards";
import apps from "./apps";
import pages from "./pages";
import userInterface from "./user-interface";
import pages_lead from "./pages_lead";
import pages_clients from "./pages_clients";

const user = JSON.parse(localStorage?.getItem("user"));
if (user?.user.roleId == 2 || 3 || 4 || 5
) {
  navigation = [...dashboards, ...apps, ...pages_lead, ...userInterface];
}
if (user?.user.roleId == 6
) {
  navigation = [...dashboards, ...apps, ...pages_clients, ...userInterface];
}
if(user?.user.roleId == 1)
{
  navigation = [...dashboards, ...apps, ...pages, ...userInterface];

}

export default navigation;
