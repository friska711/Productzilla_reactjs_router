import './App.css';
import React from 'react';
import { CounterProvider } from './context/CounterProvider';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { ContactPage } from './components/ContactPage';
function App() {
  return (
    <div className='App'>
      <CounterProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </CounterProvider>
    </div>
  );
}
export default App;