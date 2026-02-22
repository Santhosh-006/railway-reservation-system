import { useState } from "react";
import Navbar from "./components/layouts/navbar";
import Home from "./components/pages/home";
import PnrCheck from "./components/pages/pnrCheck";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "pnrCheck" && <PnrCheck />}
    </>
  );
}

export default App;
