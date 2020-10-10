/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import DashboardPage from "ui/views/Dashboard/Dashboard.js";
import OpenPushRequests from "ui/views/OpenPushRequests/OpenPushRequests.js";
import PushDetails from "ui/views/PushDetails/PushDetails.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",    
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    visible: true
  },
  {
    path: "/push",
    name: "Open Push Requests",    
    icon: Person,
    component: OpenPushRequests,
    layout: "/admin",
    visible: true
  },
  {
    path: "/push/:id",
    name: "Open Push Requests",    
    icon: Person,
    component: PushDetails,
    layout: "/admin",
    visible: false
  },
];

export default dashboardRoutes;