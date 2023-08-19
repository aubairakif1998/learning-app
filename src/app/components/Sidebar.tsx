import { FC } from "react";

interface Concept {
  title: string;
}

interface SidebarProps {
  concepts: Concept[];
  setActiveConcept: (index: number) => void;
}

const Sidebar: FC<SidebarProps> = ({ concepts, setActiveConcept }) => {
  return (
    <div className="sidebar bg-gray-800 text-black py-4 px-2 w-56 md:w-64">
      <ul className="space-y-2">
        {concepts.map((concept, index) => (
          <li
            key={index}
            onClick={() => setActiveConcept(index)}
            className="cursor-pointer hover:bg-gray-900 rounded-lg px-4 py-2 transition duration-300"
          >
            {concept.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
