import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainView from './views/MainView';
import NavBar from './components/Nav/NavBar';
import ProjectsView from './views/ProjectsView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';

const App: React.FC = (props) => {

  // const [state, setState] = useState(() => () => <MainView />);
  // const viewArray = [<AboutView />, <ProjectsView />, <ContactView />];
  // const renderViews = state.map((item, i) => <div key={i}>{item}</div>);



  // const iterateView = () => {
  //   for (let i = 0; i < viewArray.length; i++) {
  //     return viewArray[i]
  //   };
  // };



  // console.log("asdad", state)


  return (
    <div className="App">
      {/* <NavBar /> */}
      <MainView />
      <AboutView />
      <ProjectsView />
      <ContactView />
    </div>
  );
}

export default App;
