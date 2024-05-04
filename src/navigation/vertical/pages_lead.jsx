import { ShopAdd, Profile, Bill, Document, DocumentFilter, Personalcard, Task, Home3, HomeHashtag, UserMinus, TaskSquare, Health } from "iconsax-react";

import { Award, Home,FolderCloud,FolderOpen } from "iconsax-react";

import IntlMessages from "../../layout/components/lang/IntlMessages";
import { AddTask, AddTaskSharp, Analytics, AnalyticsOutlined, AnalyticsRounded, AnalyticsSharp, AnalyticsTwoTone, LocalFireDepartmentSharp, TaskAltSharp, TaskSharp } from "@mui/icons-material";
import { RiCustomerServiceLine, RiHomeOfficeLine, RiTaskLine } from "react-icons/ri";
import { Work } from "react-iconly";

const pages_lead = [
  {
      header: <IntlMessages id="Dashboards" />,
  },
  {
  id: "home-workspace",
  title: <IntlMessages id="sidebar-pages-home" />,
  icon: <HomeHashtag size={30} />,
  navLink: "/pages/workspace",
  },

  {
    id: "analytics",
    title: <IntlMessages id="s" />,
    icon: <Health size={30} />,
    navLink: "/pages/analytics",
  },
  // {
  //   id: "timeline",
  //   title: <IntlMessages id="sidebar-pages-timeline" />,
  //   icon: <Health size={30} />,
  //   navLink: "/pages/timeline",
  // },
  {
    header: <IntlMessages id="Department" />,
},
  {
    id: "users",
    title: <IntlMessages id="sidebar-pages-users" />,
    icon: <Profile size={30} />,
    navLink: "/pages/users",
  },

  {
    header: <IntlMessages id="Project Info"/>,
},

  {
    id: "projects",
    title: <IntlMessages id="sidebar-pages-projects" />,
    icon: <RiTaskLine size={30} />,
    navLink: "/pages/projects",
  },

  {
    id: "mdr",
    title: <IntlMessages id="sidebar-pages-mdr" />,
    icon: <Work size={30} />,
    navLink: "/pages/mdr",
  },
  {
    header: <IntlMessages id="Document Information" />,
},
  {
    id: "documents",
    title: <IntlMessages id="sidebar-pages-documents" />,
    icon: <FolderCloud size={30} />,
    navLink: "/pages/documents",
  },

  {
    id: "document-assessment",
    title: <IntlMessages id="Assessment" />,
    icon: <FolderOpen size={30} />,
    navLink: "/pages/document-assessment",
  },

  {
    id: "documents-permissions",
    title: <IntlMessages id="sidebar-pages-document-permissions" />,
    icon: <DocumentFilter size={30} />,
    navLink: "/pages/document-permissions",
  },
];

export default pages_lead;
