import React from "react";
import NavBar from './components/Nav/nav';
import Header from './components/Header/header'
import Footer from './components/Footer/footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BsSearch } from 'react-icons/bs';

function App() {
  return (
    <div>
      <NavBar />
      <main>

      </main>
      <Footer />
    </div>
  );
}

export default App;
