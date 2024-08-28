import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/about';  // Ensure the casing matches your file
import Pets from './components/Pets';
import Register from './components/Register';
import ReleasePet from './components/ReleasePet';
import AdoptPet from './components/AdoptPet';
import Confirmation from './components/Confirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import ThankYouPage from './components/ThankYou';
import Login from './components/login';  // Ensure the casing matches your file
import Volunteer from './components/volunteer';
import Donate from './components/donate';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/register" element={<Register />} />
            <Route path="/release" element={<ReleasePet />} />
            <Route path="/adopt" element={<AdoptPet />} />
            <Route path="/adopt/:id" element={<AdoptPet />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/volunteer" element={<Volunteer />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
