import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    const homeSection = document.getElementById('home');
    const bubbles = [];

    // Create bubbles and append to the container
    for (let i = 0; i < 50; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      homeSection.appendChild(bubble);
      bubbles.push(bubble);

      // Randomize initial position and size
      const size = Math.random() * 20 + 10; // Bubble size
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 3 + 2}s`; // Floating speed
      bubble.style.animationDelay = `${Math.random() * 5}s`; // Staggered start
    }

    // Handle mouse movement
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      bubbles.forEach((bubble) => {
        const rect = bubble.getBoundingClientRect();
        const bubbleX = rect.left + rect.width / 2;
        const bubbleY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(clientX - bubbleX, 2) + Math.pow(clientY - bubbleY, 2)
        );

        // Check if the bubble is within a certain radius of the cursor
        if (distance < 100) {
          bubble.style.transition = 'transform 0.1s ease-out';
          bubble.style.transform = `translate(${clientX - bubbleX}px, ${clientY - bubbleY}px)`;
        } else {
          bubble.style.transition = 'transform 0.5s ease-in-out';
          bubble.style.transform = '';
        }
      });
    };

    // Reset bubbles to floating state when mouse leaves
    const handleMouseLeave = () => {
      bubbles.forEach((bubble) => {
        bubble.style.transition = 'transform 0.5s ease-in-out';
        bubble.style.transform = ''; // Reset position
      });
    };

    // Event listeners
    homeSection.addEventListener('mousemove', handleMouseMove);
    homeSection.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup on component unmount
    return () => {
      bubbles.forEach((bubble) => bubble.remove());
      homeSection.removeEventListener('mousemove', handleMouseMove);
      homeSection.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
              <p className="line4">
                I am <span className="red">MERN Stack Developer</span>
              </p>
            </div>
          </div>
        </div>
        <div className="photo">
          <img
            src="https://img.freepik.com/premium-vector/vector-flat-illustration-software-developer-cyber-program-security_776789-211.jpg?w=740"
            alt="photo"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
