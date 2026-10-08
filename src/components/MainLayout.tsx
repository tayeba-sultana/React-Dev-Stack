import TechList from "./TechList";
import Sidebar from "./Sidebar";

import type { Technology } from "../types";

interface MainLayoutProps {
  technologies: Technology[];
  stack: Technology[];
  loading: boolean;
  handleAddToStack: (tech: Technology) => void;
  handleRemoveFromStack: (id: string) => void;
  handleRemoveAll: () => void;
}

const MainLayout = ({
  technologies,
  stack,
  loading,
  handleAddToStack,
  handleRemoveFromStack,
  handleRemoveAll,
}: MainLayoutProps) => {
  return (
    <section
      id="technologies"
      className="bg-[#f8fafc] py-16"
    >

      <div className="container mx-auto px-5">

        <div className="mb-10">
  <h2 className="text-3xl font-bold leading-tight text-[#0f172a] md:text-4xl">
    Explore the{" "}
    <span className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span>
  </h2>

  <p className="mt-1 text-sm text-[#64748b]">
    Pick one technology per category to build your ideal stack.
  </p>
</div>

        {loading ? (
          <div className="flex min-h-[400px] items-center justify-center">

            <div className="text-center">

              <span className="loading loading-spinner loading-lg text-[#ec4899]" />

              <p className="mt-4 text-[#64748b]">
                Loading technologies...
              </p>

            </div>

          </div>
        ) : (
          <div className="flex flex-col gap-8 lg:flex-row">

            <TechList
              technologies={technologies}
              stack={stack}
              handleAddToStack={handleAddToStack}
            />

            <Sidebar
              stack={stack}
              handleRemoveFromStack={handleRemoveFromStack}
              handleRemoveAll={handleRemoveAll}
            />

          </div>
        )}

      </div>

    </section>
  );
};

export default MainLayout;