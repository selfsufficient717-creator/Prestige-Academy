import React from 'react';
import './PrestigeAcademy.css'; // Assuming there will be a CSS file for styles

const PrestigeAcademy = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Prestige Academy</h1>
        <p>Your pathway to mastering IELTS English.</p>
      </header>
      <main className="main-content">
        <section className="courses">
          <h2>Our Courses</h2>
          <ul>
            <li>IELTS Preparation Course</li>
            <li>Speaking Practice Sessions</li>
            <li>Writing Workshops</li>
            <li>Listening Skills Enhancement</li>
          </ul>
        </section>
        <section className="about">
          <h2>About Us</h2>
          <p>
            At Prestige Academy, we provide top-notch training to help you achieve your best IELTS score.
            Our experienced instructors are here to guide you every step of the way.
          </p>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>Email: support@prestigeacademy.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2026 Prestige Academy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrestigeAcademy;