import { Switch, BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Projects from './Components/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
