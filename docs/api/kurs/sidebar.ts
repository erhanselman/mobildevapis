import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/kurs/mobildev-academy-course-api",
    },
    {
      type: "category",
      label: "Courses",
      items: [
        {
          type: "doc",
          id: "api/kurs/kurs-listesini-filtreleyerek-getirir",
          label: "Kurs Listesini Filtreleyerek Getirir",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
