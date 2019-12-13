import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainView from './views/MainView';
import NavBar from './components/Nav/NavBar';
import ProjectsView from './views/ProjectsView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';

const App: React.FC = () => {
  const sectionRender = Math.floor(Math.random() * 4) + 1  

  return (
    <div className="App">
      <NavBar />
      
        <MainView />
      
        <AboutView />
        <ProjectsView />
        <ContactView />

    </div>
  );
}

export default App;
