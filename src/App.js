import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import LinksPage from "./components/LinkPage";
import PostsPage from "./components/PostPage";
import DashboardPage from "./components/DashboardPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route path="/links-page" element={<LinksPage />} />
        <Route path="/posts-page" element={<PostsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
