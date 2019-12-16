import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainView from './views/MainView';
import NavBar from './components/Nav/NavBar';
import ProjectsView from './views/ProjectsView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import { render } from 'react-dom';

const App: React.FC = () => {

const [state, setState] = useState([<MainView />, <AboutView />, <ProjectsView />, <ContactView />]);
  // const viewArray = [<MainView />, <AboutView />, <ProjectsView />, <ContactView />];
  const renderViews = state.map((item, i) => <div key={i}>{item}</div>);



  // const iterateView = () => {
  //   for (let i = 0; i < viewArray.length; i++) {
  //     return (
  //       <div className="App">
  //         <NavBar />
  //         component
  //       </div>
  //     )
  //   };
  // };

  return (
    <div className="App">
      <NavBar />
      <button onClick={() => setState([<AboutView />])}> </button>
      {/* <MainView />
      
        <AboutView />
        <ProjectsView />
        <ContactView /> */}
        {renderViews}

    </div>
  );
}

export default App;
