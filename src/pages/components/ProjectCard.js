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
    <div className="my-5 px-5 border-l-2 border-gray-400">
      <h1 className="text-xl">{name}</h1>
      <div className="flex flex-row gap-3">
        <a
          className="mt-2 text-slate-600 flex flex-row items-center"
          target="__blank"
          href={link}
        >
          Live Preview
          <div className="w-4 h-4">
            {" "}
            <LinkArrow />
          </div>
        </a>
        <a
          className="mt-2 text-slate-600 flex flex-row items-center"
          target="__blank"
          href={githubLink}
        >
          Github
          <div className="w-4 h-4">
            {" "}
            <LinkArrow />
          </div>
        </a>
      </div>
      <p className="mt-5 text-gray-500">{description}</p>
      <div className="text-lg flex flex-row gap-2 align-middle">
        tools:{" "}
        {tools
          ? tools.map(
              //write a function to make a small grey box with the tool name
              (tool) => {
                return (
                  <div className="text-sm bg-gray-300 rounded-md p-1 m-1">
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
