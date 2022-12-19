import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import DashBoardPage from "./pages/dashboard/DashBoardPage";
import TasksPage from "./pages/tasks/TasksPage";
function AppRoutingFinal() {

  // TODO change to value from sessionStorage
  let loggedIn = false;
  return (
    <Router>
      <Switch>
        {/* Redirection to protect our routes */}
        <Route exact path="/">
          {loggedIn ? <Redirect from="/" to="/dashboard" /> : <Redirect from="/" to="/Login" />}
        </Route>
        {/**Login Route */}
        <Route exact path='/login' component={LoginPage} />
        {/**Register Route */}
        <Route exact path='/register' component={RegisterPage} />
        {/* Dashboar Route */}
        <Route path='/dashboard'>
          {loggedIn ? <DashBoardPage/> : <Redirect from="/" to="/Login" />}
        </Route>
        <Route path='/tasks'>
          {loggedIn ? <TasksPage/> : <Redirect from="/" to="/Login" />}
        </Route>
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
