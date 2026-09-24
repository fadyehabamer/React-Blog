import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import CreatePost from "./Components/Posts/CreatePost";
import PostDetails from "./Components/Posts/PostDetails";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;