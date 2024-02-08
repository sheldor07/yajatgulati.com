import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  return (
    //make a header with a navbar at the top in the right
    <div className="fixed z-10 flex flex-row items-center justify-between w-full py-6 bg-white md:mb-4 md:py-6">
      <div className="flex flex-row gap-5">
        <Link
          className="cursor-pointer"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
          projects
        </Link>
        <Link
          className="cursor-pointer"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
          contact
        </Link>
        <a href="https://yajatgulati.substack.com">blog</a>
      </div>
    </div>
  );
}
