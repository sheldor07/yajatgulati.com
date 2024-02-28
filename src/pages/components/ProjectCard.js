import LinkArrow from "./LinkArrow";
export default function ProjectCard({
  name,
  description,
  githubLink,
  link,
  status,
  tools,
}) {
  return (
    <div className="px-5 my-5 border-l-2 border-gray-400">
      <h1 className="text-xl">{name}</h1>
      <div className="flex flex-row gap-3">
        <a
          className="flex flex-row item s-center justify-start gap-0.5 transition-all hover:text-zinc-700 hover:gap-1 mt-2 text-slate-600"
          target="__blank"
          href={link}
        >
          Live Preview
          <div className="w-4 h-4 mt-1">
            <LinkArrow />
          </div>
        </a>
        {githubLink && (
          <a
            className="flex flex-row items-center justify-start gap-0.5 transition-all hover:text-zinc-700 hover:gap-1 mt-2 text-slate-600"
            target="__blank"
            href={githubLink}
          >
            Github
            <div className="w-4 h-4 mt-1">
              <LinkArrow />
            </div>
          </a>
        )}
      </div>
      <p className="mt-2 text-md text-gray-500">{description}</p>
      <div className="flex gap-2 mt-1 text-lg items-center flex-row invisible md:visible">
        tools:{" "}
        {tools
          ? tools.map(
              //write a function to make a small grey box with the tool name
              (tool, index) => {
                return (
                  <div
                    key={index}
                    className="p-1 m-1 text-sm bg-gray-300 rounded-md"
                  >
                    {tool}
                  </div>
                );
              }
            )
          : ""}
      </div>
    </div>
  );
}
