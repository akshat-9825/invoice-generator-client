import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Authentication from "../features/Authentication/Authentication";
import HomePage from "./Homepage";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Authentication type="login" />} />
          <Route
            path="/register"
            element={<Authentication type="register" />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
