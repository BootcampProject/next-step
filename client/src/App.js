import NavBar from "./components/Nav/nav";
import React from "react";
import Footer from "./components/Footer/footer";
import AboutUs from "./components/AboutUs/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QuizQuestions } from "./utils/GlobalState";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import GeographyQuestionList from "./components/QuizPages/geography";
import MathQuestionList from "./components/QuizPages/math";
import HistoryQuestionList from "./components/QuizPages/history";
import ScienceQuestionList from "./components/QuizPages/science";
import AddQuizQuestion from "./components/AddQuiz/addQuiz";

import Home from "./components/HomePage/Home";
import Detail from "./pages/Details";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

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
              <Route
                exact
                path="/geography8"
                component={GeographyQuestionList}
              />
              <Route exact path="/math8" component={MathQuestionList} />
              <Route exact path="/history8" component={HistoryQuestionList} />
              <Route exact path="/science8" component={ScienceQuestionList} />
              <Route exact path="/addQ" component={AddQuizQuestion} />
            </Switch>
            <Footer />
          </main>
        </QuizQuestions>
      </Router>
    </ApolloProvider>
  );
}

export default App;