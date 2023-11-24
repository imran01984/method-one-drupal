import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Description from './components/Description';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maincontent from './components/Maincontent';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div>
          <Maincontent/>
          <Routes>
            <Route path="/" element={<Description />}>
              <Route index element={<h2>Welcome to Middlecomponent</h2>} />
              
              <Route path="what/:id" element={<Description />} />
              <Route path="Why/:id" element={<Description />} />
              <Route path="/description/:id" element={<h2>Section 4 content</h2>} />
              <Route path="/description/:id" element={<h2>Section 5 content</h2>} />
              <Route path="/description/:id" element={<h2>Section 6 content</h2>} />
              <Route path="/description/:id" element={<h2>Section 7 content</h2>} />
              <Route path="/description/:id" element={<h2>Section 8 content</h2>} />
              <Route path="/description/:id" element={<h2>Section 9 content</h2>} />
            </Route>
          </Routes>
          <Feedback />
      <Footer />
        </div>
        
      </div>
      
    </BrowserRouter>
  );
};

export default App;
