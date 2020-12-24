// Import react router tools
import {BrowserRouter, Route, Switch} from "react-router-dom";


// Import components
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      {/* As viewers click through website, we will switch to the component to be displayed */}
      {/* For example, http://website-url.com/ will point to the Home component*/}
      <NavBar/>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    
    </BrowserRouter>
    
  );
}

export default App;
