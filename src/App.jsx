import { useState } from "react";
import MiddlePart from "./components/MiddlePart";
import NavigationMenu from "../src/components/NavigationMenu";
import "../src/index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationMenu />
    </>
  );
}

export default App;
