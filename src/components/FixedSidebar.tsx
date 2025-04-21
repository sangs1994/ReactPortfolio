"use client";
import Image from "next/image";
import Link from "next/link";

function FixedSidebar() {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div className="text-center lg:text-left">
        <Image
          src="/Sangeetha.png"
          width={150}
          height={150}
          alt="sangeetha chandrasekar"
          className="rounded-full mx-auto lg:mb-11 lg:ml-28"
        />
        <p className="text-3xl md:text-5xl font-bold mb-1 lg:my-4">
          Sangeetha Chandrasekar
        </p>
        <p className="text-lg text-slate-400 font-bold">
          Senior Software Engineer
        </p>
      </div>

      <div className="hidden lg:block">
        <div className="flex flex-col gap-4 text-slate-400">
          <a href="#aboutme">
            <div className="flex gap-2 items-center ">
              <div className="w-11">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  ></path>
                </svg>
              </div>
              <p className="headline ">About Me</p>
            </div>
          </a>

          <a href="#myskills">
            <div className="flex gap-2 items-center">
              <div className="w-11">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  ></path>
                </svg>
              </div>
              <p className="hover:bg-slate-700 hover:p-2 hover:rounded-full hover:font-bold color-primary">
                My Skills
              </p>
            </div>
          </a>

          <a href="#myprojects">
            <div className="flex gap-2 items-center">
              <div className="w-11">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  ></path>
                </svg>
              </div>
              <p className="hover:bg-slate-700 hover:p-2 hover:rounded-full hover:font-bold color-primary">
                My Projects
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="flex gap-4 my-7 lg:my-0 justify-center lg:justify-normal">
        <Link
          href="https://www.linkedin.com/in/sangeetha-chandrasekar-3b537a83/"
          target="blank"
        >
          <Image
            src="/icon-linkedin.png"
            width={30}
            height={30}
            alt="linkedin"
          />
        </Link>
        <Link href="https://github.com/sangs1994/" target="blank">
          <Image src="/icon-git.png" width={30} height={30} alt="github" />
        </Link>
        <Link
          href="https://www.instagram.com/sangeetha__chandrasekar/"
          target="blank"
        >
          <Image src="/icon-ig.png" width={30} height={30} alt="instagram" />
        </Link>
      </div>
    </div>
  );
}

export default FixedSidebar;
