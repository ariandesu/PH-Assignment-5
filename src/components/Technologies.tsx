import { useEffect, useState } from "react";
import type { Technology } from "../types";
import TechnologyCard from "./TechnologyCard";
import StackPanel from "./StackPanel";

type TechnologiesProps = {
  stack: Technology[];
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

export default function Technologies({
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologiesProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);

        setTimeout(() => {
          setLoading(false);
        }, 400);
      } catch (error) {
        console.error("Error loading technologies:", error);
        setLoading(false);
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

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading technologies...</p>
          </div>
        ) : (
          <div className="technology-layout">
            <div className="technology-grid">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  added={stack.some(
                    (item) => item.id === technology.id
                  )}
                  onAdd={onAdd}
                />
              ))}
            </div>

            <StackPanel
              stack={stack}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
            />
          </div>
        )}
      </div>
    </section>
  );
}