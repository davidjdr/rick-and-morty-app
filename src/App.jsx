import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";

function App() {
  const [section, setSection] = useState(null);
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <>
      <div>
        <img width="100%"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
          alt="Rick_and_Morty_Logo"
        />
      </div>
      <div className="card">
        <button onClick={() => setSection("characters")}>Ver personajes</button>
      </div>
      <div className="card">
        <button onClick={() => setSection("episodes")}>Ver episodios</button>
      </div>

      {section === "characters" && <Characters />}
      {section === "episodes" && <Episodes />}
    </>
  );
}

export default App;
