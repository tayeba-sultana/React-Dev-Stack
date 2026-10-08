import type { Technology } from "../types";

interface SidebarProps {
  stack: Technology[];
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const Sidebar = ({
  stack,
  handleRemoveFromStack,
  handleRemoveAll,
}: SidebarProps) => {
  return (
    <aside
      id="projects"
      className="h-fit w-full rounded-xl border border-[#e5e7eb] bg-white p-4 shadow-sm lg:w-1/4"
    >

      <div>
        <h3 className="text-sm font-bold text-[#0f172a]">
          Your Stack
        </h3>

        <p className="mt-1 text-[9px] text-[#94a3b8]">
          {stack.length} Technologies Selected
        </p>
      </div>

      <div className="mt-4">
        {stack.length === 0 ? (
          <div className="rounded-lg bg-[#f8fafc] px-4 py-8 text-center">
            

            <p className="mt-3 text-xs font-semibold text-[#475569]">
              Your stack is empty.
            </p>

      
          </div>
        ) : (
          <div className="space-y-2">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center justify-between rounded-lg border border-[#e5e7eb] bg-white px-2.5 py-2"
              >
      
                <div className="flex min-w-0 items-center gap-2">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="h-5 w-5 object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <h4 className="truncate text-[10px] font-semibold text-[#1e293b]">
                      {tech.name}
                    </h4>

                    <p className="truncate text-[7px] text-[#94a3b8]">
                      {tech.category}
                    </p>
                  </div>
                </div>

  
                <button
                  onClick={() => handleRemoveFromStack(tech.id)}
                  className="ml-2 flex h-5 w-5 shrink-0 items-center justify-center text-xs text-[#94a3b8] transition hover:text-[#ef4444]"
                  aria-label={`Remove ${tech.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>


      {stack.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="mt-4 w-full rounded-lg border border-[#fca5a5] bg-white py-2 text-[9px] font-medium text-[#ef4444] transition hover:bg-[#fef2f2]"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default Sidebar;