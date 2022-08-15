import React from "react";

import Project from "./Project";



const Projects = () => {
  const projects = [
    {
      id: 1,
      baseUrl: "/projects/demand-ecommerce/",
      title: "Demand Ecommerce",
      description: "Its an awesome project built with nextjs and styles completely with tailwindcss and its completely responsive, with awesome design, it has all the pages needed for an ecommerce web app",
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
      description: "its a food ecommerce app built with nextjs styled completely with tailwindcss and its completely responsive , with all needed pages",
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
        liveDemo: "https://food-ecommerce.herokuapp.com/",
        github: "https://github.com/mahmoud-ashraf-devloper/food_delivery_app",
      },
    },
    {
      id: 3,
      baseUrl: "/projects/cloud-app/",
      title: "Cloud App",
      description: "C web app built with Reactjs and styled completely with tailwindcss, completely responsive and good looking. it has all the sections needed",
      images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
      links: {
        liveDemo: "https://cloud-app-mahmoud.herokuapp.com/",
        github: "https://github.com/mahmoud-ashraf-devloper/cloud_app_react",
      },
    },
  ];

  return (
    <div className="projects-page-font w-[85vw] md:w-[90vw] px-1 md:px-3 flex flex-col  space-y-">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
