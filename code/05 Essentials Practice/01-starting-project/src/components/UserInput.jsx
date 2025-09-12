import "../index.css";
export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-container">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Initial Investment ($)</label>
            <input
              type="number"
              id="current-savings"
              value={userInput["current-savings"]}
              required
              onChange={(e) => onChangeInput("current-savings", e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Annual Investment ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={userInput["yearly-contribution"]}
              required
              onChange={(e) =>
                onChangeInput("yearly-contribution", e.target.value)
              }
            />
          </p>
        </div>

        <div className="input-group">
          <p>
            <label>Expected Return ($)</label>
            <input
              type="number"
              id="expected-return"
              value={userInput["expected-return"]}
              required
              onChange={(e) => onChangeInput("expected-return", e.target.value)}
            />
          </p>
          <p>
            <label> Duration </label>
            <input
              type="number"
              id="duration"
              value={userInput["duration"]}
              required
              onChange={(e) => onChangeInput("duration", e.target.value)}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
