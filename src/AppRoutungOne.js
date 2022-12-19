import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import { useEffect, useState } from "react";
import StatePage from "./pages/home/StatePage";
function AppRoutingOne() {
  
  const [logged, setLogged] = useState('');

  let taskList =  [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task'
    },
  ]

  useEffect(() => {
    let log =localStorage.getItem('credentials');
    setLogged(log);
    console.log('User Logged?', logged);
  }, [])

  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| Home |</Link>
          <Link to="/about">| About |</Link>
          <Link to="/faqs">| Faqs ||</Link>
          <Link to="/tasks">| tasks ||</Link>
          <Link to="/task/1">| tasks 1 ||</Link>
          <Link to="/task/2">| tasks 2 ||</Link>
          <Link to="/login">| login ||</Link>
        </aside>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/online-state" component={StatePage} />
            <Route path="/login" component={LoginPage} >
            {
                logged ? 
                () =>{
                  alert('Yoy must be logged in. Redirecting to Home.')
                  return <Redirect to='/'/>}
                : () =>{
                  return <LoginPage/>}
              }
            </Route>
            <Route path="/(about|faqs)" component={AboutPage} />
            <Route path="/profile" component={ProfilePage}>
              {
                logged ? 
                <ProfilePage/>
                : () =>{
                alert('Yoy must be logged in. Redirecting to Login.')
                return <Redirect to='/login'/>}
              }
            </Route>
            <Route path="/tasks" component={TasksPage} />
            <Route 
              exact 
              path="/task/:id" 
              render={
                ({match}) => (
                  <TaskDetailPage task={taskList[match.params.id - 1]}/>
                )
              }
              >
              
            </Route>
            
            
            {/*  404 - Page not found */}
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
