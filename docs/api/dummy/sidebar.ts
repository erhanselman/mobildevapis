import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/dummy/dummyjson-users-api-protected",
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "api/dummy/get-all-users",
          label: "Get all users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/dummy/get-user-by-id",
          label: "Get user by ID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
