import React from 'react';
import Navbar from '../components/navbar/Navbar'; //import navbar
import Infopage from '../components/info/Infopage'; //import page with info itself
import './app.css';

function App() {
  document.title = 'Botik oficial page'; //page name
  return (
    <div className='App'>
      <div className='Navbar'>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
      </div>
      <React.Fragment>
        <Infopage />
      </React.Fragment>
    </div>

  );
}

export default App;