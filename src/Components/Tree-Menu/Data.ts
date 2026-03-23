

export interface MenuItem {
  label: string;
  to: string;
  children?: MenuItem[];
}
const sideMenuData: MenuItem[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [
              {
                label: "city",
                to: "city",
              },
            ]
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
            children: [
              {
                label: "Randown",
                to: "",
              }
            ],
          },
        ]
      },
    ],
  },
];

export default sideMenuData;
