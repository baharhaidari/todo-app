import { useContext } from "react";
import "../../App.css";
import { TodoContext } from "../../Store/Todos-items-context";

export default function DailyMotivations() {
  const { handleShowMotives, RANDOM_MOTIVES, motives } =
    useContext(TodoContext);

  return (
    <section className="daily-motives">
      <p>{RANDOM_MOTIVES[motives]}</p>
      <br />
      <button onClick={handleShowMotives}>Get a Motivation</button>
    </section>
  );
}
