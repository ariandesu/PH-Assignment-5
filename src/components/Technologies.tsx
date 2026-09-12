import { useEffect, useState } from "react";
import type { Technology } from "../types";

export default function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error("Error loading technologies:", error);
      }
    };

    loadTechnologies();
  }, []);

  return (
    <section id="technologies" className="technologies-section">
      <div className="technologies-container">
        <div className="section-heading">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="technology-preview">
          {technologies.length} technologies loaded.
        </div>
      </div>
    </section>
  );
}