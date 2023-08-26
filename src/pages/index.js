import Image from "next/image";
import Link from "next/link";
import profile_pic from "../../public/profile_pic.jpg";
import ProjectCard from "./components/ProjectCard";
import LinkArrow from "./components/LinkArrow";
import Header from "./components/Header";
import ExperienceCard from "./components/ExperienceCard";
export default function Home() {
  return (
    <div className="z-0 px-5 sm:px-24 xl:px-72 ">
      <Header />
      <main className="min-h-screen pt-20 ">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <Image
              src={profile_pic}
              className="rounded-full"
              width="120"
              height="120"
              style={{ objectFit: "scale-down" }}
            />
            <div className="  px-6 sm:px-10">
              <h1 className="text-xl md:text-4xl">
                <div className="inline-block hover:animate-wave ">👋</div> Hi, I
                am Yajat
              </h1>
              <p className="pt-5 sm:text-xl text-md text-left sm:px-5 sm:text-left text-slate-600">
                I build software to disrupt the status quo
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-24">
            <h1 className="text-2xl ">about me</h1>
            <p className="pt-5 text-xl text-slate-500">
              Hey! I’m an 19 y/o studying CS and Business at Nanyang
              Technological University, Singapore. I love building new things
              and trying out new technologies.
            </p>
          </div>
          <div className="relative p-10 mt-10 text-lg bg-green-300 rounded-xl ">
            <p>
              I've just started my second year at NTU, and I've taken on a whole
              new set of responsibilities. I'll be undertaking the undergraduate
              research program, here at NTU to work on sustanability recommender
              systems with Alibaba-NTU Joint Research Institute (wow that's so
              many words). But I'm also looking forward to meeting like minded
              people through my positions as the Hackers for Charity Chairperson
              at the NTU Open Source Society. Hopefully, my building ventures
              will continue, I already have a couple ideas in mind. I'm nervous
              and excited.
            </p>
            <span className="absolute text-sm right-10 bottom-30 text-slate-500">
              Last updated: 21 Aug 2023
            </span>
            <div className="flex flex-row gap-4">
              <a
                href="mailto:yajatgulati01@gmail.com"
                className="p-2 mt-10 text-lg text-white bg-black rounded-lg"
              >
                Get in Touch
              </a>
              <Link
                href="https://docs.google.com/document/d/e/2PACX-1vR3vL03Y2CoiUujMSyWJpZCQH3y-iHgmKbfhnrcrH1mM1dDoN8MA2ROzHihmaQcdBVjJ6zaGWSmdNzx/pub"
                className="mt-10 p-2 flex  flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-700 hover:gap-1 active:text-green-300 text-zinc-600 font-medium text-lg"
              >
                Resume
                <div className="w-5 h-5">
                  <LinkArrow />
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl">work experience</h1>
            <div className="flex flex-col gap-3 mt-10">
              <ExperienceCard
                position="Web Developer"
                company="School of Humanities, Nanyang Technological University"
                description="Collaborated with Prof Joanne Chia, Anglea Frattorla, and a talented UI/UX design team from NTU's School of Art, Design, and Media. Our collective aim was to develop a state-of-the-art web application for CC001: Inquiry and Communication in an Interdisciplinary World. The centerpiece of this application is an AI-feedback mechanism designed to guide students in refining their writing prowess."
                techStack={[
                  "MongoDB",
                  "Node.js",
                  "React.js",
                  "Microsoft Azure",
                  "Github Actions",
                ]}
                liveLink="https://askwaai.com" // Add the actual link
                githubLink="https://github.com/sheldor07/askwaai" // Add the actual GitHub repo link
              />

              <ExperienceCard
                position="Student Assistant"
                company="National Institute of Education, Singapore"
                description="I had the unique opportunity to join hands with Dr. Fan and Asst Prof Gaoxia, spearheading a project to automate an intricate framework. The objective? Systematic evaluation of interdisciplinary essays. The journey enriched my understanding of neural networks, specifically transformers. We leveraged models from huggingface to gauge metrics established by the Professors."
                techStack={[
                  "Python for AI",
                  "MongoDB",
                  "Node.js",
                  "React.js",
                  "Microsoft Azure",
                  "Github Actions",
                ]}
                githubLink="https://github.com/sheldor07/essay-evaluator-research-assistantship" // Add the actual GitHub repo link
              />
            </div>
          </div>
          <div name="projects" className="mt-10">
            <h1 className="text-2xl">projects</h1>
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
          <div id="contact" className="flex flex-col gap-5 mt-10 mb-24 ">
            <h1 className="mb-5 text-2xl ">contact me</h1>
            <div className="flex flex-row gap-3">
              <p className="text-xl text-slate-800"> LinkedIn </p>
              <a
                href="https://www.linkedin.com/in/yajatgulati"
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
              <p className="text-xl text-slate-800"> Github </p>
              <a
                href="https://github.com/sheldor07"
                className="flex flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-700 hover:gap-1 active:text-green-300 text-zinc-600 font-medium text-lg"
              >
                @sheldor07
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
