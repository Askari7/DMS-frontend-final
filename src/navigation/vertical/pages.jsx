import { ShopAdd, Profile, Bill, Document, DocumentFilter, Personalcard, Task, Home3, HomeHashtag, UserMinus, TaskSquare, Health } from "iconsax-react";

import { Award, Home,FolderCloud,FolderOpen } from "iconsax-react";

import IntlMessages from "../../layout/components/lang/IntlMessages";
import { AddTask, AddTaskSharp, Analytics, AnalyticsOutlined, AnalyticsRounded, AnalyticsSharp, AnalyticsTwoTone, LocalFireDepartmentSharp, TaskAltSharp, TaskSharp } from "@mui/icons-material";
import { RiCustomerServiceLine, RiHomeOfficeLine, RiTaskLine } from "react-icons/ri";
import { Work } from "react-iconly";

const pages = [
  {
      header: <IntlMessages id="Dashboards" />,
  },
  // {
  //     id: "user-interface-typography",
  //     title: <IntlMessages id="sidebar-user-interface-typography" />,
  //     icon: <Grid5 size={30} />,
  //     navLink: "/components/general/style-guide",
  // },
  // {
  //     id: "authentication",
  //     title: <IntlMessages id="sidebar-pages-authentication" />,
  //     icon: <Award size={30} />,
  //     children: [
  //         {
  //             id: "login-v1-page",
  //             title: <IntlMessages id="sidebar-pages-login-v1" />,
  //             navLink: "/pages/authentication/login",
  //         },
  //         {
  //             id: "login-v2-page",
  //             title: <IntlMessages id="sidebar-pages-login-v2" />,
  //             navLink: "/pages/authentication-modern/login",
  //         },
  //         {
  //             id: "register-v1-page",
  //             title: <IntlMessages id="sidebar-pages-register-v1" />,
  //             navLink: "/pages/authentication/register",
  //         },
  //         {
  //             id: "register-v2-page",
  //             title: <IntlMessages id="sidebar-pages-register-v2" />,
  //             navLink: "/pages/authentication-modern/register",
  //         },
  //         {
  //             id: "recover-v1-password",
  //             title: <IntlMessages id="sidebar-pages-recover-password-v1" />,
  //             navLink: "/pages/authentication/recover-password",
  //         },
  //         {
  //             id: "recover-v2-password",
  //             title: <IntlMessages id="sidebar-pages-recover-password-v2" />,
  //             navLink: "/pages/authentication-modern/recover-password",
  //         },
  //         {
  //             id: "reset-v1-password",
  //             title: <IntlMessages id="sidebar-pages-reset-password-v1" />,
  //             navLink: "/pages/authentication/reset-password",
  //         },
  //         {
  //             id: "reset-v2-password",
  //             title: <IntlMessages id="sidebar-pages-reset-password-v2" />,
  //             navLink: "/pages/authentication-modern/reset-password",
  //         },
  //     ],
  // },
  // {
  //     id: "errors",
  //     title: <IntlMessages id="sidebar-pages-error" />,
  //     icon: <Award size={30} />,
  //     children: [
  //         {
  //             id: "error-404",
  //             title: "404",
  //             navLink: "/pages/error-404",
  //         },
  //         {
  //             id: "error-403",
  //             title: "403",
  //             navLink: "/pages/error-403",
  //         },
  //         {
  //             id: "error-500",
  //             title: "500",
  //             navLink: "/pages/error-500",
  //         },
  //         {
  //             id: "error-503",
  //             title: "503",
  //             navLink: "/pages/error-503",
  //         },
  //         {
  //             id: "error-502",
  //             title: "502",
  //             navLink: "/pages/error-502",
  //         },
  //         {
  //             id: "maintenance",
  //             title: <IntlMessages id="sidebar-pages-error-maintenance" />,
  //             navLink: "/pages/maintenance",
  //         },
  //         {
  //             id: "comming-soon",
  //             title: <IntlMessages id="sidebar-pages-error-coming-soon" />,
  //             navLink: "/pages/coming-soon",
  //         },
  //     ],
  // },
  // {
  //     id: "profile",
  //     title: <IntlMessages id="sidebar-pages-profile" />,
  //     icon: <Award size={30} />,
  //     children: [
  //         {
  //             id: "profile-personel-information",
  //             title: <IntlMessages id="sidebar-pages-profile-personel-information" />,
  //             navLink: "/pages/profile/personel-information",
  //         },
  //         {
  //             id: "profile-notifications",
  //             title: <IntlMessages id="sidebar-pages-profile-notifications" />,
  //             navLink: "/pages/profile/notifications",
  //         },
  //         {
  //             id: "profile-activity",
  //             title: <IntlMessages id="sidebar-pages-profile-activity-Novaconor" />,
  //             navLink: "/pages/profile/activity",
  //         },
  //         {
  //             id: "profile-security",
  //             title: <IntlMessages id="sidebar-pages-profile-security-settings" />,
  //             navLink: "/pages/profile/security",
  //         },
  //         {
  //             id: "profile-password-change",
  //             title: <IntlMessages id="sidebar-pages-profile-password-change" />,
  //             navLink: "/pages/profile/password-change",
  //         },
  //         {
  //             id: "profile-connect-with-social",
  //             title: <IntlMessages id="sidebar-pages-profile-connect-with-social" />,
  //             navLink: "/pages/profile/connect-with-social",
  //         },
  //     ],
  // },
  // {
  //     id: "email",
  //     title: <IntlMessages id="sidebar-pages-email-templates" />,
  //     icon: <Award size={30} />,
  //     children: [
  //         {
  //             id: "email-hello",
  //             title: <IntlMessages id="sidebar-pages-email-hello" />,
  //             navLink: "https://yoda.jobconnect.studio/yoda-email-template/hello.html",
  //         },
  //         {
  //             id: "email-promotional",
  //             title: <IntlMessages id="sidebar-pages-email-promotional" />,
  //             navLink: "https://yoda.jobconnect.studio/yoda-email-template/promotional.html",
  //         },
  //         {
  //             id: "email-verify",
  //             title: <IntlMessages id="sidebar-pages-email-verify" />,
  //             navLink: "https://yoda.jobconnect.studio/yoda-email-template/verify.html",
  //         },
  //         {
  //             id: "email-reset-password",
  //             title: <IntlMessages id="sidebar-pages-email-reset-password" />,
  //             navLink: "https://yoda.jobconnect.studio/yoda-email-template/reset-password.html",
  //         },
  //         {
  //             id: "email-term",
  //             title: <IntlMessages id="sidebar-pages-email-term" />,
  //             navLink: "https://yoda.jobconnect.studio/yoda-email-template/term.html",
  //         },
  //         {
  //             id: "email-deactive-account",
  //             title: <IntlMessages id="sidebar-pages-email-deactive-account" />,
  //             navLink: "https://yoda.jobconnect.studio/yoda-email-template/deactive-account.html",
  //         },
  //     ],
  // },
  // {
  //     id: "lock-page",
  //     title: <IntlMessages id="sidebar-pages-lock-screen" />,
  //     icon: <Award size={30} />,
  //     children: [
  //         {
  //             id: "welcome",
  //             title: <IntlMessages id="sidebar-pages-welcome" />,
  //             navLink: "/pages/welcome",
  //         },
  //         {
  //             id: "password-is-changed",
  //             title: <IntlMessages id="sidebar-pages-password-is-changed" />,
  //             navLink: "/pages/password-is-changed",
  //         },
  //         {
  //             id: "deactivated",
  //             title: <IntlMessages id="sidebar-pages-deactivated" />,
  //             navLink: "/pages/deactivated",
  //         },
  //         {
  //             id: "lock",
  //             title: <IntlMessages id="sidebar-pages-lock" />,
  //             navLink: "/pages/lock",
  //         },
  //     ],
  // },
  //   {
  // id: "landing",
  // title: <IntlMessages id="sidebar-pages-landing" />,
  // icon: <Award size={30} />,
  // navLink: "/pages/landing",
    // },
  {
  id: "home-workspace",
  title: <IntlMessages id="sidebar-pages-home" />,
  icon: <HomeHashtag size={30} />,
  navLink: "/pages/workspace",
  },

  // {
  //     id: "workspace",
  //     title: <IntlMessages id="sidebar-pages-workspace" />,
  //     icon: <ShopAdd size={30} />,
  //     children: [
  //         {
  //             id: "create-workspace",
  //             title: <IntlMessages id="sidebar-pages-generate-workspace" />,
  //             navLink: "/pages/workspace",
  //         },
  //         {
  //             id: "workspace-history",
  //             title: <IntlMessages id="sidebar-pages-workspace-history" />,
  //             icon: <HistoryToggleOffIcon sx={{fontSize:'5px'}} />,
  //             navLink: "/pages/workspace-history",
  //         }
  //     ]
  // },
  // {
  //     id: "credits",
  //     title: <IntlMessages id="sidebar-pages-credits" />,
  //     icon: <ShopAdd size={30} />,
  //     children: [
  //         {
  //             id: "purchases-token",
  //             title: <IntlMessages id="sidebar-pages-purchases-token" />,
  //             navLink: "/pages/pricing",
  //         },
  //     ]
  // },
  // {
  //     id: "purchases-token",
  //     title: <IntlMessages id="sidebar-pages-purchases-token" />,
  //     icon: <Bill size={30} />,
  //     navLink: "/pages/pricing",
  // },

  {
    id: "analytics",
    title: <IntlMessages id="sidebar-pages-analytics" />,
    icon: <Health size={30} />,
    navLink: "/pages/analytics",
  },
  {
    header: <IntlMessages id="Company" />,
},
  {
    id: "users",
    title: <IntlMessages id="sidebar-pages-users" />,
    icon: <Profile size={30} />,
    navLink: "/pages/users",
  },
  {
    id: "departments",
    title: <IntlMessages id="sidebar-pages-departments" />,
    icon: <RiHomeOfficeLine size={30} />,
    navLink: "/pages/departments",
  },
  {
    header: <IntlMessages id="Create Client Project"/>,
},
  {
    id: "clients",
    title: <IntlMessages id="sidebar-pages-clients" />,
    icon: <UserMinus size={30} />,
    navLink: "/pages/clients",
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
    id: "document-number",
    title: <IntlMessages id="Numbering" />,
    icon: <Document size={30} />,
    navLink: "/pages/document-number",
  },
  // {
  //   id: "timeline",
  //   title: <IntlMessages id="sidebar-pages-timeline" />,
  //   icon: <Health size={30} />,
  //   navLink: "/pages/timeline",
  // },
  {
    id: "documents-permissions",
    title: <IntlMessages id="sidebar-pages-document-permissions" />,
    icon: <DocumentFilter size={30} />,
    navLink: "/pages/document-permissions",
  },
  // {
  //   id: "clients",
  //   title: <IntlMessages id="sidebar-pages-clients" />,
  //   icon: <Profile size={30} />,
  //   navLink: "/pages/profile/personel-information",
  // },
//   {
//     header: <IntlMessages id="Settings" />,
// },
//   {
//     id: "profile-personel-information",
//     title: <IntlMessages id="sidebar-pages-profile-personel-information" />,
//     icon: <Personalcard size={30} />,
//     navLink: "/pages/profile/personel-information",
//   },
  // {
  //     id: "invoice",
  //     title: <IntlMessages id="sidebar-pages-invoice" />,
  //     icon: <Award size={30} />,
  //     navLink: "/pages/invoice",
  // },
  // {
  //     id: "faq",
  //     title: <IntlMessages id="sidebar-pages-faq" />,
  //     icon: <Award size={30} />,
  //     navLink: "/pages/faq",
  // },
  // {
  //     id: "blank-page",
  //     title: <IntlMessages id="sidebar-pages-blank-page" />,
  //     icon: <Award size={30} />,
  //     navLink: "/pages/blank-page",
  // },
];

export default pages;
