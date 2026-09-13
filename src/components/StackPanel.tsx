import type { Technology } from "../types";

type StackPanelProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

export default function StackPanel({
  stack,
  onRemove,
  onRemoveAll,
}: StackPanelProps) {
  return (
    <aside className="stack-panel">
      <div className="stack-header">
        <div>
          <h3>Your Stack</h3>

          <p>
            {stack.length}{" "}
            {stack.length === 1
              ? "Technology"
              : "Technologies"}{" "}
            Selected
          </p>
        </div>
      </div>

      {stack.length === 0 ? (
        <div className="stack-empty">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="stack-items">
            {stack.map((technology) => (
              <div
                className="stack-item"
                key={technology.id}
              >
                <img
                  src={technology.icon}
                  alt={`${technology.name} icon`}
                />

                <div className="stack-item-info">
                  <h4>{technology.name}</h4>
                  <p>{technology.category}</p>
                </div>

                <button
                  className="remove-button"
                  onClick={() =>
                    onRemove(technology.id)
                  }
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            className="remove-all-button"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}