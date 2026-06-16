import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/egitmen/course-instructor-api",
    },
    {
      type: "category",
      label: "Instructors",
      items: [
        {
          type: "doc",
          id: "api/egitmen/get-instructors",
          label: "Eğitmenleri Listele",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
