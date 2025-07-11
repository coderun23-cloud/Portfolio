import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Skills from "./pages/Skill";
import { Project } from "./pages/Project";
import Service from "./pages/Service";
import Resume from "./pages/Resume";
import StarBackground from "./components/StarBackground";
function App() {
  return (
    <div>
      <StarBackground />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/services" element={<Service />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
