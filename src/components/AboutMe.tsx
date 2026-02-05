import Link from "next/link";

function AboutMe() {
  return (
    <div className="mx-auto text-slate-400">
      <p>
        Hi there! I am Sangeetha Chandrasekar, a passionate and experienced
        Front-End Developer/Full Stack Develper with over 8+ years of expertise
        in creating stunning, intuitive, and highly responsive web applications
        that enhance the digital experience for millions of users.
      </p>
      <br />
      <p>
        I specialize in HTML, CSS, JavaScript/TypeScript, along with frameworks
        such as React, AngularJS and Angular, enabling me to build scalable,
        accessible and high-performance applications across diverse domains and
        platforms. In addition, I have experience developing backend services
        using Java Spring Boot and working with SQL for data persistence. I
        thrive in fast-paced Agile environments, collaborating closely with
        cross-functional teams to solve complex problems and deliver
        user-centric, end-to-end solutions.
      </p>
      <br />
      <p>
        I&#39;m a quick learner, love challenges that could improve knowledge
        and skills, and I&#39;m ready to collaborate in a team.
      </p>
      <br />
      <br />
      <Link
        href="https://drive.google.com/file/d/1lBCCR7QvJKl_F7S5YjTloakEAxiPXGBT/view?usp=sharing"
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
