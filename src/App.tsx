import { useState } from "react";
import { toast } from "react-toastify";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import ProjectCTA from "./components/ProjectCTA";
import AboutContact from "./components/AboutContact";
import Footer from "./components/Footer";
import type { Technology } from "./types";

export default function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack.`
      );
      return;
    }

    setStack((currentStack) => [
      ...currentStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack.`
    );
  };

  const removeFromStack = (id: string) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from your stack.`
      );
    }
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info(
      "All technologies were removed from your stack."
    );
  };

  return (
    <>
      <Header />

      <main>
        <Hero />

        <Technologies
          stack={stack}
          onAdd={addToStack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
        />

        <ProjectCTA />

        <AboutContact />
      </main>

      <Footer />
    </>
  );
}