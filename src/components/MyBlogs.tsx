function MyBlogs() {
  const datas = [
    {
      displayText:
        "How I Use Codium AI in VS Code to Generate Unit Tests Faster",
      link: "https://medium.com/p/7302ef15806f",
    },
    {
      displayText: "Building Accessible Highcharts in React",
      link: "https://javascript.plainenglish.io/building-accessible-highcharts-in-react-c8875672d296",
    },
    {
      displayText: "React + Markdown: Build a Lightweight Markdown Viewer",
      link: "https://medium.com/@sangeethachandrasekar/react-markdown-build-a-lightweight-markdown-viewer-234dc15f0609",
    },
    {
      displayText:
        "Iterator Helpers in ES2025: Bringing Array-Like Methods to Iterators",
      link: "https://javascript.plainenglish.io/iterator-helpers-in-es2025-bringing-array-like-methods-to-iterators-7786790fc879?source=list---------0-------b42c23328341----------------------------",
    },
    {
      displayText: "Leveling Up Your JavaScript Sets: ES2025 Methods",
      link: "https://javascript.plainenglish.io/leveling-up-your-javascript-sets-es2025-methods-58506d1a6e41",
    },
    {
      displayText:
        "RegExp.escape() in ES2025 — Finally, Safe Regex Without the Headache",
      link: "https://javascript.plainenglish.io/regexp-escape-in-es2025-finally-safe-regex-without-the-headache-765b7e853bcd",
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap color-text-blue ">
      {datas.map((data, index) => (
        <a
          key={index}
          href={data.link}
          target="_blank"
          className="px-2 bg-slate-800 rounded-lg"
        >
          {index + 1}. {data.displayText}
        </a>
      ))}
    </div>
  );
}

export default MyBlogs;
