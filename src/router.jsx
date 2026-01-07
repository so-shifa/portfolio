import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import ProjectDetail from "./pages/ProjectDetail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
};

export default AppRouter;
