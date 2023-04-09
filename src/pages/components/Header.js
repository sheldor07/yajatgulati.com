import Link from "next/link"
function scrollToMyDiv(divId) {
    //write a function that takes in teh ref of a div and scrolls to it
    //use this function in the link component

    document.getElementById(divId).scrollIntoView({ behavior: 'smooth' });

  }
export default function Header(){
    return(
        //make a header with a navbar at the top in the right
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-5">
                <Link href="#about">about</Link>
                <Link href="#projects">projects</Link>
                <Link href="#contact">contact</Link>
            </div>
        </div>
    )
}