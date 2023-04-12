import Image from "next/image";
import Link from "next/link";
import profile_pic from "../../public/profile_pic.png";
import ProjectCard from "./components/ProjectCard";
import LinkArrow from "./components/LinkArrow";
import Header from "./components/Header";
export default function Home() {
  return (
    <div className="px-5 pt-10 sm:px-24 lg:px-72 ">
      <Header />
      <main className="min-h-screen pt-5 sm:pt-10 lg:pt-32">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <Image
              src={profile_pic}
              className="rounded-full"
              width="120"
              height="120"
            />
            <div className="px-2 sm:px-10">
              <h1 className="text-2xl md:text-4xl">👋 Hi, I am Yajat</h1>
              <p className="px-5 pt-5 text-xl text-slate-600">
                I build software
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-24">
            <h1 className="text-2xl">about me</h1>
            <p className="pt-5 text-xl text-slate-500">
              Hey! I’m an 18 y/o studying CS and Business at Nanyang
              Technological University, Singapore. I love building new things
              and trying out new technologies. Recently, I’ve been building
              web-apps that use OpenAI’s API.
            </p>
          </div>
          <div className="p-10 mt-10 text-lg bg-green-300 rounded-xl ">
            <p>
              I am currently open for internships for the summer of 2023, my
              experience is primarily in web development but I’m open to working
              on any new technology as long as the product is exciting <br></br>{" "}
              A collaborative team of engineers and designers, who are building
              great products. Interested in working together? Feel free to
              schedule a meet!
            </p>
            <div className="flex flex-row gap-1a">
              <a
                href="mailto:yajatgulati01@gmail.com"
                className="p-2 mt-10 text-lg text-white bg-black rounded-lg"
              >
                Get in Touch
              </a>
              <Link
                href="https://docs.google.com/document/d/e/2PACX-1vRPhWPQsA7vxmnAxmIP8C51fTlxue5EKWgy_BPyNAJrHiUH3qXPx7RrTTHMypfFSfvhnvaX925vIBoq/pub"
                className="mt-10 p-2 flex  flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-700 hover:gap-1 active:text-green-300 text-zinc-600 font-medium text-lg"
              >
                Resume
                <div className="w-5 h-5">
                  <LinkArrow />
                </div>
              </Link>
            </div>
          </div>
          <div id="projects" className="mt-10">
            <h1 className="text-2xl">projects.</h1>
            <div className="flex flex-col gap-3 mt-10">
              <ProjectCard
                name="GPT Book Club"
                link="https://gptbook.club"
                githubLink="https://github.com/sheldor07/gpt-book-club"
                status="Ongoing"
                description="GPT Book Club is an innovative, AI-powered platform that generates concise and engaging book guides, utilizing OpenAI's GPT-3.5 technology. The project aims to modernize the reading experience by delivering essential insights efficiently, catering to the needs of today's busy readers."
                tools={["NextJS", "TailwindCSS", "Supabase", "OpenAI"]}
              />
              <ProjectCard
                name="Valentine GPT"
                link="valentinegpt.netlify.app"
                githubLink="https://github.com/sheldor07/valentinegpt"
                status="Maintained"
                description="ValentineGPT is a web app that generates a love letter for you, using OpenAI's GPT-3 technology. The project aims to make the process of writing a love letter easier, by generating a letter that is tailored to your needs."
                tools={["ReactJS", "OpenAI API"]}
              />
            </div>
          </div>
          <div id="contact" className="flex flex-col gap-5 mt-10 ">
            <h1 className="mb-5 text-2xl ">contact me</h1>
            <div className="flex flex-row gap-3">
              <p className="text-xl text-slate-800"> LinkedIn </p>
              <a
                href="https://www.linkedin.com/in/yajat-gulati-7b5b1b1b3/"
                className="flex flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-700 hover:gap-1 active:text-green-300 text-zinc-600 font-medium text-lg"
              >
                linkedin.com/in/yajatgulati{" "}
                <div className="w-5 h-5">
                  <LinkArrow />
                </div>
              </a>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-xl text-slate-800"> Twitter </p>
              <a
                href="https://twitter.com/GulatiYajat"
                className="flex flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-700 hover:gap-1 active:text-green-300 text-zinc-600 font-medium text-lg"
              >
                @GulatiYajat{" "}
                <div className="w-5 h-5">
                  <LinkArrow />
                </div>
              </a>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-xl text-slate-800"> LinkedIn </p>
              <a
                href="https://www.linkedin.com/in/yajat-gulati-7b5b1b1b3/"
                className="flex flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-700 hover:gap-1 active:text-green-300 text-zinc-600 font-medium text-lg"
              >
                linkedin.com/in/yajatgulati{" "}
                <div className="w-5 h-5">
                  <LinkArrow />
                </div>
              </a>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}
