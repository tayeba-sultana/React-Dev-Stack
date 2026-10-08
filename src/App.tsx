import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";

import type { Technology } from "./types";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Failed to load data");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load technologies!");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some(
      (item) => item.id === tech.id
    );

    if (isAlreadyAdded) {
      toast.warning("Already added to your stack!");
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      tech,
    ]);

    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    toast.info("Technology removed!");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed!");
  };

  return (
    <>
      <Navbar />

      <Hero />

      <MainLayout
        technologies={technologies}
        stack={stack}
        loading={loading}
        handleAddToStack={handleAddToStack}
        handleRemoveFromStack={handleRemoveFromStack}
        handleRemoveAll={handleRemoveAll}
      />

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  );
};

export default App;