import './App.css';
import React from 'react';
import Header from './components/Header'
import Carousel from './components/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Courses from './components/Courses';
import { Link } from 'react-router-dom';
import ContactComp from './components/ContactComp';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <h1 className="title">Центр Образовательных Квалификаций</h1>
      <Courses />
      <Link to="/eqc">Узнать Больше</Link>
      <h1 className="title">Контакты</h1>
      <ContactComp />
      <Link to="/contact">Узнать Больше</Link>
    </div>
  );
}

export default App;
