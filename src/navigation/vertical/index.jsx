import dashboards from "./dashboards";
import apps from "./apps";
import pages from "./pages";
import userInterface from "./user-interface";
import pages_lead from "./pages_lead";

let navigation = [...dashboards, ...apps, ...pages, ...userInterface];

const user = JSON.parse(localStorage?.getItem("user"));
if (user?.user.id === 2) {
  navigation = [...dashboards, ...apps, ...pages_lead, ...userInterface];
}

export default navigation;
