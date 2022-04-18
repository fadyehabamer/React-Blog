import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/:id" component={PostDetails} />
            <Route exact path="/create" component={CreatePost} />
            
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;