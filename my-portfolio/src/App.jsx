import React from 'react';
import Layout from './components/Layout'; // Assuming Layout is in a separate file
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles.css'; 

const App = () => {
  return (
    <Layout>
      <Home />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default App;
