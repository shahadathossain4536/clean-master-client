import Navbar from "./component/Navbar";

import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes/publicRoute";

function App() {
  return (
    <div className="">
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
