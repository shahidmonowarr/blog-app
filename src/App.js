import TopBar from "./components/TopBar/TopBar";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home/Home";



function App() {
  const currentUser = true;
  return (
    <Router>
      <TopBar></TopBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/posts">
          <Home></Home>
        </Route>
        <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
        <Route path="/post/:postId">
          <Single></Single>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
