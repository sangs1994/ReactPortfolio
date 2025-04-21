import CardProject from "./CardProject";

const datas = [
  {
    projectName: "Portfolio App",
    description:
      "A simple portfolio application with email service, skills and google maps to redirect my location..",
    image: "/portfolio.png",
    link: "https://sangs1994.github.io/Portfolio/",
    tags: ["HTML", "CSS", "Javascript"],
  },
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
