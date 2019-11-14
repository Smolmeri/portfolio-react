import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainView from './views/MainView';
import NavBar from './components/Nav/NavBar';
import ProjectsView from './views/ProjectsView';
import AboutView from './views/AboutView';

const App: React.FC = () => {
  const sectionRender = Math.floor(Math.random() * 3) + 1  

  return (
    <div className="App">
      <NavBar />
      {sectionRender === 1 &&
        <MainView />
      }
      {sectionRender === 2 &&
        <AboutView />
      }
      {sectionRender === 3 &&
        <ProjectsView />
      }

    </div>
  );
}

export default App;
