import type { Technology } from "../types";

interface TechCardProps {
  tech: Technology;
  stack: Technology[];
  handleAddToStack: (tech: Technology) => void;
}

const TechCard = ({
  tech,
  stack,
  handleAddToStack,
}: TechCardProps) => {

  const isAdded = stack.some(
    (item) => item.id === tech.id
  );

  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#e5e7eb] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8eafa] p-2">

          <img
            src={tech.icon}
            alt={tech.name}
            className="h-8 w-8 object-contain"
          />

        </div>

        <span className="rounded-full bg-[#fce7f3] px-3 py-1 text-xs font-semibold text-[#db2777]">
          {tech.badge}
        </span>

      </div>

      <h3 className="mt-5 text-lg font-bold text-[#1e293b]">
        {tech.name}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-6 text-[#64748b]">
        {tech.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-2 text-xs">

        <span className="rounded-full bg-[#f1f5f9] px-3 py-1 text-[#475569]">
          {tech.category}
        </span>

        <span className="text-right text-[#64748b]">
          {tech.difficulty}
        </span>

      </div>

      <div className="mt-4 flex items-center justify-between">

        <span className="font-semibold text-[#f59e0b]">
          ★ {tech.rating}
        </span>

        <button
          onClick={() => handleAddToStack(tech)}
          disabled={isAdded}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            isAdded
              ? "cursor-not-allowed bg-[#e2e8f0] text-[#64748b]"
              : "brand-gradient text-white hover:-translate-y-0.5"
          }`}
        >
          {isAdded
            ? "✓ Added to Stack"
            : "Add to Stack"}
        </button>

      </div>

    </div>
  );
};

export default TechCard;