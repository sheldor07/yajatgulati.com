import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  return (
    //make a header with a navbar at the top in the right
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row gap-5">

        <Link
          className="cursor-pointer"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          projects
        </Link>
        <Link
          className="cursor-pointer"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          contact
        </Link>
      </div>
    </div>
  );
}
