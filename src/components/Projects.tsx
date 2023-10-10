import CardProject from "./CardProject";

const datas = [
  {
    projectName: "Pharmacy Web App",
    description:
      "Pharmacy App is an e-commerce web application for selling products and medicines",
    image: "/pharmacy.png",
    link: "https://pharmacy-app.yuandaputri.com/",
    tags: [
      "NodeJS",
      "ReactJS",
      "Express",
      "Redux",
      "Formik",
      "JWT",
      "Nodemailer",
      "Core Java"
    ],
  },
  {
    projectName: "Portfolio App",
    description:
      "A simple portfolio application with email service, skills and google maps to redirect my location..",
    image: "/portfolio.png",
    link: "https://sangs1994.github.io/Portfolio/",
    tags: [
      "HTML",
      "CSS",
      "Javascript"
    ],
  },
  {
    projectName: "To Do List",
    description: "A todolist app, as a user, you can create list of your activity that you trying to do. You also can set the deadline time. A notification by email is sent to you once you meet the deadline.",
    image: "/kanban.png",
    link: "https://mythreads.yuandaputri.com/",
    tags: [
      "NextJS",
      "Typescript",
      "MongoDB",
      "Clerk",
      "Uploadthing",
      "Tailwind",
    ],
  }
];

function Projects() {
  return (
    <div className="flex flex-col gap-11">
      {/* absolute -inset-4 z-0 hidden rounded transition */}
      {/* motion-reduce:transition-none lg:-inset-6 lg:block */}
      {datas.map((data) => (
        <CardProject
          key={data.link}
          projectName={data.projectName}
          description={data.description}
          image={data.image}
          link={data.link}
          tags={data.tags}
        />
      ))}
    </div>
  );
}

export default Projects;
