function MySkills() {
  const datas = [
    "HTML",
    "CSS",
    "React JS",
    "Redux",
    "SASS",
    "Node JS",
    "Express",
    "Next JS",
    "Tailwind CSS",
    "REST API",
    "Mysql"
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
