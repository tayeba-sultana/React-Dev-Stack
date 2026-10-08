import TechCard from "./TechCard";

import type { Technology } from "../types";

interface TechListProps {
  technologies: Technology[];
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
}

const TechList = ({
  technologies,
  stack,
  handleAddToStack,
}: TechListProps) => {
  return (
    <div className="w-full lg:w-3/4">

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

        {technologies.map((tech) => (
          <TechCard
            key={tech.id}
            tech={tech}
            stack={stack}
            handleAddToStack={handleAddToStack}
          />
        ))}

      </div>

    </div>
  );
};

export default TechList;