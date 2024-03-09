import Image from "next/image";
import profile_pic from "../../public/pfp.jpeg";
import ProjectCard from "./components/ProjectCard";
import LinkArrow from "./components/LinkArrow";
import Header from "./components/Header";
import ExperienceCard from "./components/ExperienceCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Inside your form component
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      message,
    };
    if (email === "") {
      alert("Please fill out all the fields");
      return;
    }
    if (name === "") {
      alert("Please fill out all the fields");
      return;
    }
    if (message === "") {
      alert("Please fill out all the fields");
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully!");
        // Clear the form or redirect the user
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    AOS.init({ duration: 500 });
  });
  return (
    <div className="z-0 px-5 sm:px-24 xl:px-72 ">
      <Header />
      <main className="min-h-screen pt-20 scroll-smooth overflow-hidden">
        <div className="flex flex-col">
          <div className="flex flex-row" data-aos="fade-up">
            <Image
              src={profile_pic}
              className="rounded-full"
              width="120"
              height="120"
              style={{ objectFit: "scale-down" }}
            />
            <div className="  px-6 sm:px-10">
              <h1 className="text-xl md:text-4xl">
                <div className=" flex flex-row ">
                  <div
                    className="
                  hover:animate-wave mr-2"
                  >
                    👋
                  </div>
                  <p className="font-bold"> Hi, I am Yajat</p>
                </div>
              </h1>
              <p className="pt-1 sm:text-xl text-md text-left sm:px-5 sm:text-left text-slate-600">
                I build software to disrupt the status quo
              </p>
            </div>
          </div>
          <div className="mt-4 lg:mt-12">
            <h1 className="text-2xl ">about me</h1>
            <p className="pt-5 text-md text-slate-500">
              Hey! I’m an 19 y/o studying CS and Business at Nanyang
              Technological University, Singapore. I love building new things
              and trying out new technologies.
            </p>
          </div>
          <div className="relative p-8 mt-10 text-md bg-green-300 rounded-md ">
            <p>
              I've well into my second year at NTU, and I've taken on a whole
              new set of responsibilities. I've been participating in
              hackathons, and just won my first one
              <a
                className="underline hover:bg-black hover:text-white hover:p-1 rounded-md duration-200"
                href="https://yajatgulati.substack.com"
                target="__blank"
              >
                (see blog)
              </a>
              . In my role as Hackers4Charity Chairperson, we're working with
              WeCare Singapore to do data analysis on their patient data. At{" "}
              <a
                className="underline hover:bg-black hover:text-white hover:p-1 rounded-md duration-200"
                href="https://alaglabs.com"
                target="__blank"
              >
                Alag Labs
              </a>{" "}
              we're building LookOut v2.0, an IoT device to help the visually
              impaired become more independent using AI. As usual, I'm nervous
              and excited.
            </p>
            <span className="absolute text-sm right-10 bottom-20 text-slate-500">
              Last updated: 18 Feb 2024
            </span>
            <div className="flex flex-row items-center gap-4">
              <Link
                to="get-in-touch"
                smooth={true}
                className="py-2 px-4 mt-10 text-md text-white bg-black rounded-md hover:bg-white hover:text-black duration-300 ease-in"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="text-2xl">projects i've been paid to work on</h1>
            <div className="flex flex-col gap-3 mt-4">
              <ExperienceCard
                position="Web Developer"
                company="School of Humanities, Nanyang Technological University"
                description="Collaborated with Prof Joanne Chia, Anglea Frattorla, and a talented UI/UX design team from NTU's School of Art, Design, and Media. Our collective aim was to develop a state-of-the-art web application for CC001: Inquiry and Communication in an Interdisciplinary World. The centerpiece of this application is an AI-feedback mechanism designed to guide students in refining their writing prowess. We got featured in NTU's HEY! Magazine's AI edition this February. The project has been handed over and being expanded by ATLAS."
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
            <h1 className="text-2xl">my projects</h1>
            <div className="flex flex-col gap-3 mt-4">
              <ProjectCard
                name="Vibes"
                devPostLink="https://devpost.com/software/vibes-1dkayc?ref_content=user-portfolio&ref_feature=in_progress"
                githubLink="https://github.com/sheldor07/techfest-24"
                status="Hackathon"
                description="Vibes is an AI music platform that was a Top 10 finalist at SCSE TechFest in February 2024. It uses advanced AI models to help content creators generate unique, royalty-free music, addressing copyright issues in the industry."
                tools={["React", "shadcn/UI", "Django", "AWS"]}
              />{" "}
              <ProjectCard
                name="yaR (formerly LookOut)"
                demoLink="https://devpost.com/software/lookout-oyrb0z?ref_content=my-projects-tab&ref_feature=my_projects"
                status="Hackathon"
                description="Developed 'yaR,' a device leveraging MultiModal AI to assist visually impaired users by providing spoken responses based on image analysis, showcased at National University of Singapore's Hack and Roll 2024."
                tools={["Django", "AWS", "Python", "Arduino C"]}
              />
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
                link="https://valentinegpt.netlify.app/"
                githubLink="https://github.com/sheldor07/valentinegpt"
                status="Maintained"
                description="ValentineGPT is a web app that generates a love letter for you, using OpenAI's GPT-3 technology. The project aims to make the process of writing a love letter easier, by generating a letter that is tailored to your needs."
                tools={["ReactJS", "OpenAI API"]}
              />
            </div>
          </div>
          <div id="contact" className="flex flex-col gap-5 mt-10 mb-24 ">
            <h1 className="mb-5 text-2xl ">contact me</h1>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-md text-slate-800"> LinkedIn </p>
                <p className="text-md text-slate-800"> Twitter </p>
                <p className="text-md text-slate-800"> Github </p>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://twitter.com/GulatiYajat"
                  className="flex flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-700 hover:gap-1 active:text-green-300 text-zinc-600 font-medium text-md"
                >
                  @GulatiYajat{" "}
                  <div className="w-4 h-4">
                    <LinkArrow />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/yajatgulati"
                  className="flex flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-700 hover:gap-1 active:text-green-300 text-zinc-600 font-medium text-md"
                >
                  @YajatGulati{" "}
                  <div className="w-4 h-4">
                    <LinkArrow />
                  </div>
                </a>
                <a
                  href="https://github.com/sheldor07"
                  className="flex flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-700 hover:gap-1 active:text-green-300 text-zinc-600 font-medium text-md"
                >
                  @sheldor07
                  <div className="w-4 h-4">
                    <LinkArrow />
                  </div>
                </a>
              </div>
            </div>
            <div name="get-in-touch" className="flex flex-col  mt-10 mb-24 ">
              <h1 className=" text-2xl ">get in touch</h1>{" "}
              <p className=" mb-4 text-md text-slate-700">
                (if you're old school)
              </p>
              <form onSubmit={handleSubmit}>
                {" "}
                <div className="grid grid-cols-2 gap-4 ">
                  <div className="flex flex-col">
                    <label className="py-2">Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-2 rounded-md p-2 -md outline-none"
                      type="text"
                      id="name"
                      placeholder="Your Name"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2">Email</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-2 rounded-md p-2 -md outline-none"
                      type="email"
                      id="email"
                      placeholder="Your email"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="py-2">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-2 rounded-md p-2 -md  outline-none resize-none h-32"
                    id="message"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button className="w-full items-center flex justify-center bg-green-300 shadow-md px-4 py-2 rounded-md mt-2 md:mt-4 hover:bg-black hover:text-white duration-300">
                  {isLoading ? <span class="loader"></span> : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
