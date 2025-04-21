import Link from "next/link";

function AboutMe() {
  return (
    <div className="mx-auto text-slate-400">
      <p>
        Hi there! I'm Sangeetha Chandrasekar, a passionate and experienced
        Front-End Developer with over 7 years of expertise in creating stunning,
        intuitive, and highly responsive web applications that enhance the
        digital experience for millions of users.
      </p>
      <br />
      <p>
        I specialize in HTML, CSS, and JavaScript/TypeScript, as well as
        frameworks like React, AngularJS, and Angular, allowing me to build
        scalable, accessible, and high-performance applications across various
        domains and platforms. I thrive in fast-paced Agile environments, where
        I collaborate with cross-functional teams to solve complex challenges
        and deliver user-centric solutions.
      </p>
      <br />
      <p>
        I&#39;m a quick learner, love challenges that could improve knowledge
        and skills, and I&#39;m ready to collaborate in a team.
      </p>
      <br />
      <br />
      <Link
        href="https://drive.google.com/file/d/13OHD7pJMyYtxhRHrSwr5u808XwfT8rNj/view?usp=drive_link"
        target="blank"
      >
        <div className="flex gap-4 cursor-pointer">
          <p className="border-b-4 inline-block text-xl mb-4 color-primary">
            View my resume
          </p>
          <div className="w-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              id="svg-arrow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AboutMe;
