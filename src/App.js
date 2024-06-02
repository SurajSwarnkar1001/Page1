import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="left">
        <div className="circle"></div>
        <div className="arrow"></div>
      </div>
      <div className="center">
        <div className="card">
          <div className="image">
            <img src="https://i.imgur.com/L2644lH.jpg" alt="Kirk Colby" />
          </div>
          <div className="play-button"></div>
          <div className="name">KIRK COLBY</div>
          <div className="title">Founder, Appy Hours</div>
          <div className="logo">GROWEXX</div>
        </div>
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="grid"></div>
      </div>
      <div className="right">
        <div className="heading">SUCCESS STORIES</div>
        <div className="arrow"></div>
        <div className="button"></div>
      </div>
    </div>
  );
}

export default App;