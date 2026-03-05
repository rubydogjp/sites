import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TutorialPage from "./pages/TutorialPage";
import GitPage from "./pages/GitPage";
import DevelopPage from "./pages/DevelopPage";
import ViewerPage from "./pages/ViewerPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tutorial" element={<Navigate to="/tutorial/intro" replace />} />
          <Route path="/tutorial/:slug" element={<TutorialPage />} />
          <Route path="/git" element={<Navigate to="/git/index" replace />} />
          <Route path="/git/:slug" element={<GitPage />} />
          <Route path="/develop" element={<Navigate to="/develop/index" replace />} />
          <Route path="/develop/:slug" element={<DevelopPage />} />
          <Route path="/honeycomb" element={<ViewerPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
