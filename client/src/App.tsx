import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Chat from './components/Chat';
import Login from './components/Login';
import Header from './components/Header';
import SideBar from './components/SideBar';

import './App.css';


const App = (): JSX.Element => {
  return (
    <div className="App">
      <Container>
        <Header />
        <Main>
          <SideBar />
          <Router>
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route exact path="/room">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </Main>
      </Container>

    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;