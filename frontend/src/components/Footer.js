// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Create a separate CSS file for Footer styles

function Footer() {
  return (
    <footer id="footer">
  <div className="container">
    <div className="social-media">
      <a href="https://www.facebook.com/sagarsinghbankhandi" aria-label="Facebook Profile" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#4267B2">
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.81v-9.294H9.692v-3.622h3.117V8.41c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.591l-.467 3.622h-3.124V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/mrsingh422/" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#0A66C2">
          <path d="M22.23 0H1.77C.79 0 0 .774 0 1.728v20.543C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.728C24 .774 23.21 0 22.23 0zm-6.92 20.452h-3.755v-6.15c0-1.466-.027-3.356-2.047-3.356-2.05 0-2.364 1.599-2.364 3.248v6.258H4.394V9.454h3.605v1.5h.05c.502-.947 1.73-1.945 3.56-1.945 3.806 0 4.509 2.504 4.509 5.764v5.68zM2.905 7.745c-1.207 0-2.187-.98-2.187-2.186C.718 4.35 1.698 3.37 2.905 3.37s2.186.98 2.186 2.187c0 1.207-.98 2.186-2.186 2.186zm1.88 12.707H1.025V9.454h3.761v10.998z"/>
        </svg>
      </a>
      <a href="https://github.com/Mrsingh422" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#181717">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.814 1.102.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12 24 5.373 18.627 0 12 0z"/>
        </svg>
      </a>
    </div>
    <p>&copy; 2024 Sagar Singh. All rights reserved.</p>
  </div>
</footer>
  );
}

export default Footer;
