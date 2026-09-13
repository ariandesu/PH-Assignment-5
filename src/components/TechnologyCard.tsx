import type { Technology } from "../types";

type TechnologyCardProps = {
  technology: Technology;
  added: boolean;
  onAdd: (technology: Technology) => void;
};

export default function TechnologyCard({
  technology,
  added,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className="technology-card">
      <div className="card-top">
        <div className="technology-icon">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
          />
        </div>

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-meta">
        <span>{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span>★ {technology.rating}</span>
      </div>

      <button
        className={`add-stack-button ${
          added ? "added" : ""
        }`}
        disabled={added}
        onClick={() => onAdd(technology)}
      >
        {added
          ? "✓ Added to Stack"
          : "Add to Stack"}
      </button>
    </article>
  );
}