// src/components/Home.js
import React from 'react';
import './Home.css'; // Create a separate CSS file for Home styles

function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="name">
          <div className="name1">
            <p className="line1">
              Hi, my name is <span className="gray">Sagar Singh</span>
            </p>
          </div>
          <div className="name2">
            <p className="line2">
              I am <span className="line3">Web Developer</span>
            </p>
            <div className="line4-div">
              <p className="line4">I am <span className="red">MERN Stack Developer</span></p>
            </div>
          </div>
        </div>
        <div className="photo">
          <img src="https://img.freepik.com/premium-vector/vector-flat-illustration-software-developer-cyber-program-security_776789-211.jpg?w=740" alt="photo" />
        </div>
      </div>
    </section>
  );
}

export default Home;
