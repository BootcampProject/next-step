import NavBar from './components/Nav/nav';
import React from 'react';
import Footer from './components/Footer/footer';
import AboutUs from './components/AboutUs/About';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QuizQuestions } from "./utils/GlobalState";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Home from "./components/HomePage/Home";
import Detail from "./pages/Details";
import Login from './pages/Login';
import Signup from './pages/Signup';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getQuestion('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <QuizQuestions>
            <NavBar />
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/questions/:id" component={Detail} />
                <Route exact path="/aboutus" component={AboutUs} />
              </Switch>
            </main>
            <Footer />
        </QuizQuestions>
        
      </Router>
    </ApolloProvider>
  );
}

export default App;
