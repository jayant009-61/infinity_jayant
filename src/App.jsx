import React from 'react';
import './GameIntro.css';

const GameIntro = () => {
  return (
    <div className="game-container">
      <video className="bg-video" autoPlay muted loop>
        <source src="/vedio1.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="a">~
        <img src="/pic.webp" alt="" width={300}/><br /><br /><br />
        <h1>My self Infinty Jayant</h1><br />
        <h2>I am on the path to be a coder</h2><br />
        <h3>My Masters web:</h3>
        <a href="https://www.bing.com/ck/a?!&&p=4c083134e018d05a10003d236ad3a8b3dcbeb495854b6ad58cb2a7beddb159f4JmltdHM9MTc1MTI0MTYwMA&ptn=3&ver=2&hsh=4&fclid=3afaf54f-da04-6652-0fa7-e0d1db77679a&psq=deep+data+india+research+center&u=a1aHR0cHM6Ly93d3cuZGVlcGRhdGFpbmRpYS5jb20v&ntb=1">Deep Data India Rearch Center</a><br />
        <h3>My Discord Server:</h3>
        <a href="https://discord/PZqKUXAH">Infinity Hub</a>
      </div>
    </div>
  );
};

export default GameIntro;
