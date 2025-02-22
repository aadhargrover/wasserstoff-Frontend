import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faPlus, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const sections = [
  {
    title: "Start",
    items: [
      { name: "New File", icon: <FontAwesomeIcon icon={faPlus} className="mr-2" /> },
      { name: "Open Folder", icon: <FontAwesomeIcon icon={faFolderOpen} className="mr-2" /> },
      { name: "Add workspace folder", icon: <FontAwesomeIcon icon={faPlus} className="mr-2" /> },
    ],
  },
  {
    title: "Help",
    items: [
      { name: "Printable Keyboard hacks", icon: <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" /> },
      { name: "Tips and tricks", icon: <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" /> },
      { name: "Github repository", icon: <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" /> },
    ],
  },
];

const gettingStarted = [
  ".ed files: Opens a text editor.",
  ".note files: Opens a note maker where different notes can be created with status categories.",
  ".readme files: Opens an interface to preview formatted README files. Users can choose a file to format and preview without markup.",
  ".lt files: Opens a list-making interface where users can create lists.",
];

const additionalSections = [
  {
    title: "Deployment",
    content: "Deployed on vercel",
  },
  {
    title: "Folder and File Structure",
    content: "Implement a sidebar that displays folders and files in a hierarchical manner. Allow users to create folders and files.Provide information on how users can get support for your IDE (e.g., community forums, documentation).",
  },
  {
    title: "Conclusion",
    content: "An IDE with a folder structure and various file types using Next.js for the frontend and CSS or Tailwind CSS for styling.",
  },
];

export default function Defalult() {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-10 overflow-auto">
      <div className="flex flex-col gap-10 lg:w-1/3">
        <div>
          <p className="text-4xl font-bold text-white">My IDE</p>
          <p className="text-xl text-gray-400">Editing evolved</p>
        </div>
        {sections.map((section, index) => (
          <div key={index} className="text-white">
            <p className="text-2xl font-bold mt-6 mb-2">{section.title}</p>
            <ul className="list-disc list-inside">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-center mt-2 cursor-pointer">
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>


      <div className="hidden flex-col gap-10 lg:w-2/3 lg:flex">
        <div>
          <p className="text-3xl font-bold text-white">Getting Started</p>
          <ul className="list-disc list-inside text-white">
            {gettingStarted.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {additionalSections.map((section, index) => (
          <div key={index}>
            <p className="text-3xl font-bold text-white">{section.title}</p>
            <p className="text-white mt-2">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
