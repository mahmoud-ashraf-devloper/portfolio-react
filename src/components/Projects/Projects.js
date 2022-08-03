import React from "react";

import Project from "./Project";



const Projects = () => {
  const projects = [
    {
      id: 1,
      baseUrl: "/projects/demand-ecommerce/",
      title: "Demand Ecommerce",
      description: "A ecommerce website for demand",
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
      description: "A food delivery app",
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
      description: "A cloud app",
      images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
      links: {
        liveDemo: "https://cloud-app-mahmoud.herokuapp.com/",
        github: "https://github.com/mahmoud-ashraf-devloper/cloud_app_react",
      },
    },
  ];

  return (
    <div className="projects-page-font w-[85vw] md:w-[90vw] px-1 md:px-3 flex flex-col  space-y-6">
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
