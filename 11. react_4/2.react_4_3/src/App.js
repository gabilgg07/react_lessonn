import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import NotFound from "./components/NotFound";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
