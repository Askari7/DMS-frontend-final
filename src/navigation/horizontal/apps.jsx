import { Calendar, Bookmark, Award, Messages1, Shop } from 'iconsax-react';

import IntlMessages from "../../layout/components/lang/IntlMessages";

const apps = [
    {
        id: "apps",
        header: <IntlMessages id="sidebar-apps" />,
        subMenu: [
            {
                id: "apps-calendar",
                title: <IntlMessages id="sidebar-apps-calendar" />,
                icon: <Calendar size={18} />,
                navLink: "/apps/calendar",
            },
            {
                id: "contact",
                title: <IntlMessages id="sidebar-apps-contact" />,
                icon: <Bookmark size={18} />,
                navLink: "/apps/contact",
            },
            {
                id: "ecommerce",
                title: <IntlMessages id="sidebar-apps-ecommerce" />,
                icon: <Award size={18} />,
                children: [
                    {
                        id: "shop",
                        title: <IntlMessages id="sidebar-apps-ecommerce-shop" />,
                        navLink: "/apps/ecommerce/shop",
                    },
                    {
                        id: "wishlist",
                        title: <IntlMessages id="sidebar-apps-ecommerce-wishlist" />,
                        navLink: "/apps/ecommerce/wishlist",
                    },
                    {
                        id: "product-detail",
                        title: <IntlMessages id="sidebar-apps-ecommerce-product-detail" />,
                        navLink: "/apps/ecommerce/product-detail/0",
                    },
                    {
                        id: "checkout",
                        title: <IntlMessages id="sidebar-apps-ecommerce-checkout" />,
                        navLink: "/apps/ecommerce/checkout",
                    },
                    {
                        id: "inventory",
                        title: <IntlMessages id="sidebar-apps-ecommerce-inventory" />,
                        navLink: "/apps/ecommerce/inventory",
                    },
                ],
            },
            {
                id: "mailbox",
                title: <IntlMessages id="sidebar-apps-mailbox" />,
                icon: <Messages1 size={18} />,
                tag: <IntlMessages id="coming-soon" />,
            },
            {
                id: "knowledge-base",
                title: <IntlMessages id="sidebar-pages-knowledge-base" />,
                icon: <Award size={18} />,
                children: [
                    {
                        id: "knowledge-base-1",
                        title: <IntlMessages id="sidebar-pages-knowledge-base-1" />,
                        navLink: "/pages/knowledge-base/knowledge-base-1",
                    },
                    {
                        id: "knowledge-base-2",
                        title: <IntlMessages id="sidebar-pages-knowledge-base-2" />,
                        navLink: "/pages/knowledge-base/knowledge-base-2",
                    },
                ],
            },
            {
                id: "file-manager",
                title: <IntlMessages id="sidebar-apps-file-manager" />,
                icon: <Shop size={18} />,
                tag: <IntlMessages id="coming-soon" />,
            },
        ]
    },
];

export default apps