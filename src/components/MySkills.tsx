function MySkills() {
  const datas = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Angular JS",
    "React JS",
    "Redux",
    "SASS",
    "Node JS",
    "Express",
    "Next JS",
    "REST API",
    "Mysql Queries"
  ];


  
  return (
    <div className="flex gap-4 flex-wrap color-text-blue ">
      {datas.map((data, index) => (
        <p key={index} className="px-2 bg-slate-800 rounded-lg">
          {data}
        </p>
      ))}
    </div>
  );
}

export default MySkills;
