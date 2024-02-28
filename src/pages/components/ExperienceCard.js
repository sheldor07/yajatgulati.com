// components/ExperienceCard.js

import LinkArrow from "./LinkArrow";

export default function ExperienceCard({
  position,
  company,
  description,
  techStack,
  liveLink,
  githubLink,
}) {
  return (
    <div className="px-5 py-5 my-5 bg-gray-50 shadow-md rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold">{position}</h2>
      <h1 className="mt-1 text-lg ">{company}</h1>

      {(liveLink || githubLink) && (
        <div className="flex flex-row gap-3 mt-3">
          {(liveLink || githubLink) && (
            <div className="flex flex-row gap-3">
              {liveLink && (
                <a
                  className="flex flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-700 hover:gap-1 mt-2 text-slate-600"
                  target="__blank"
                  rel="noopener noreferrer"
                  href={liveLink}
                >
                  Live Preview
                  <div className="w-4 h-4">
                    <LinkArrow />
                  </div>
                </a>
              )}

              {githubLink && (
                <a
                  className="flex flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-700 hover:gap-1 mt-2 text-slate-600"
                  target="__blank"
                  rel="noopener noreferrer"
                  href={githubLink}
                >
                  Github
                  <div className="w-5 h-5">
                    <LinkArrow />
                  </div>
                </a>
              )}
            </div>
          )}
        </div>
      )}

      <p className="mt-5 text-gray-500 text-md">{description}</p>

      <div className="flex flex-col gap-2 mt-2 text-lg align-middle md:flex-row">
        tools:{" "}
        {techStack != undefined &&
          techStack.map((tech, index) => (
            <div key={index} className="p-1 text-sm bg-gray-300 rounded-md">
              {tech}
            </div>
          ))}
      </div>
    </div>
  );
}
