import React from "react";

import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      id: 5455,
      baseUrl: "/projects/png-to-html-css/",
      title: "Dashboard API",
      description: "Upwork Project, Converting png image to html and css code",
      images: ["0.webp"],
      links: {
        liveDemo: "https://strong-cupcake-c79704.netlify.app/",
      },
    },
    {
      id: 5455,
      baseUrl: "/projects/dashboard-api/",
      title: "Dashboard API",
      description:
        "Upwork Project, Integration of a dashboard API into dashboard template",
      images: [
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
        "8.webp",
      ],
      links: {},
    },
    {
      id: 0,
      baseUrl: "/projects/spider-template/",
      title: "Spider  Template",
      description:
        "Its an awesome project built with nextjs and styles completely with tailwindcss and its completely responsive, with awesome design, it has all the pages needed for an ecommerce web app",
      images: ["0.webp", "1.webp", "2.webp", "3.webp", "4.webp"],
      links: {
        liveDemo: "https://spider-blue.netlify.app/",
      },
    },
    {
      id: 1,
      baseUrl: "/projects/demand-ecommerce/",
      title: "Demand Ecommerce",
      description:
        "Its an awesome project built with nextjs and styles completely with tailwindcss and its completely responsive, with awesome design, it has all the pages needed for an ecommerce web app",
      images: [
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
        "8.webp",
        "9.webp",
      ],
      links: {
        liveDemo: "https://deman-eccomerce-mahmoud.netlify.app/",
        github:
          "https://github.com/mahmoud-ashraf-devloper/demand-ecommerce-template",
      },
    },
    {
      id: 2,
      baseUrl: "/projects/food-delavery/",
      title: "Food Delivery App",
      description:
        "its a food ecommerce app built with nextjs styled completely with tailwindcss and its completely responsive , with all needed pages",
      images: [
        "1.webp",
        "2.webp",
        "3.webp",
        "4.webp",
        "5.webp",
        "6.webp",
        "7.webp",
        "8.webp",
        "9.webp",
      ],
      links: {
        liveDemo: "https://restaurant-ecommerce-app.netlify.app/",
        github: "https://github.com/mahmoud-ashraf-devloper/food_delivery_app",
      },
    },
  ];

  return (
    <div className="projects-page-font w-[85vw] md:w-[90vw] px-1 md:px-3 flex flex-col">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
