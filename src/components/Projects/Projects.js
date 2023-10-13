import React from "react";

import Project from "./Project";

const Projects = () => {
  const projects = [
    {
      id: 5455,
      baseUrl: "/projects/png-to-html-and-css/",
      title: "Dashboard API",
      description: "Upwork Project, Converting png image to html and css code",
      images: ["0.png"],
      links: {
        liveDemo: "#",
        github: "#",
      },
    },
    {
      id: 5455,
      baseUrl: "/projects/dashboard-api/",
      title: "Dashboard API",
      description:
        "Upwork Project, Integration of a dashboard API into dashboard template",
      images: [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
      ],
      links: {
        liveDemo: "#",
        github: "#",
      },
    },
    {
      id: 0,
      baseUrl: "/projects/spider-template/",
      title: "Spider  Template",
      description:
        "Its an awesome project built with nextjs and styles completely with tailwindcss and its completely responsive, with awesome design, it has all the pages needed for an ecommerce web app",
      images: ["0.png", "1.png", "2.png", "3.png", "4.png"],
      links: {
        liveDemo: "https://spider-blue.netlify.app/",
        github: "#",
      },
    },
    {
      id: 1,
      baseUrl: "/projects/demand-ecommerce/",
      title: "Demand Ecommerce",
      description:
        "Its an awesome project built with nextjs and styles completely with tailwindcss and its completely responsive, with awesome design, it has all the pages needed for an ecommerce web app",
      images: [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png",
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
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.png",
        "6.png",
        "7.png",
        "8.png",
        "9.png",
      ],
      links: {
        liveDemo: "https://restaurant-ecommerce-app.netlify.app/",
        github: "https://github.com/mahmoud-ashraf-devloper/food_delivery_app",
      },
    },
    {
      id: 3,
      baseUrl: "/projects/cloud-app/",
      title: "Cloud App",
      description:
        "A Cloud web app built with Reactjs and styled completely with tailwindcss, completely responsive and good looking. it has all the sections needed",
      images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
      links: {
        liveDemo: "https://cloud-app-mahmoud-dev.netlify.app",
        github: "https://github.com/mahmoud-ashraf-devloper/cloud_app_react",
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
