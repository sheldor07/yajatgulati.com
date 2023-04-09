import Link from "next/link"
function scrollToMyDiv(divId) {
    let targetDiv = document.getElementById(divId);
    targetDiv.scrollIntoView({ behavior: 'smooth'});
  }
export default function Header(){
    return(
        //make a header with a navbar at the top in the right
        <div className="flex flex-row justify-between items-right">
            <div className="flex flex-row gap-5">
                <Link href="#about">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
            </div>
        </div>
    )
}