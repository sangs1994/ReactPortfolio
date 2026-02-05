import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className="bg-black w-full flex justify-center items-center py-4">
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
      <p className="color-text-blue text-sm md:text-base text-center mx-4">
        Built by Sangeetha | 2026
      </p>
    </div>
  );
}

export default Footer;
