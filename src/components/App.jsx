import React from "react";

import Entry from "./Entry.jsx";
import Entries from "../emojipedia.js";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Entries.map((entry) => (
          <Entry
            key={entry.id}
            emoji={entry.emoji}
            name={entry.name}
            meaning={entry.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
