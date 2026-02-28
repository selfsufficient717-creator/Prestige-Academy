import React, { useEffect, useRef } from 'react';
import './PrestigeAcademy.css'; // Assume styles for glassmorphism, gradients are defined here

const PrestigeAcademy = () => {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        });

        sectionsRef.current.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="prestige-academy">
            <div className="section hero" ref={el => (sectionsRef.current[0] = el)}>
                <h1>Welcome to Prestige Academy</h1>
                <p>Your journey towards excellence begins here.</p>
            </div>
            <div className="section about" ref={el => (sectionsRef.current[1] = el)}>
                <h2>About Us</h2>
                <p>We provide top-notch education and resources.</p>
            </div>
            <div className="section courses" ref={el => (sectionsRef.current[2] = el)}>
                <h2>Our Courses</h2>
                <p>Explore a wide range of subjects tailored for your needs.</p>
            </div>
            <div className="section instructors" ref={el => (sectionsRef.current[3] = el)}>
                <h2>Meet Our Instructors</h2>
                <p>Learn from industry experts with real-world experience.</p>
            </div>
            <div className="section testimonials" ref={el => (sectionsRef.current[4] = el)}>
                <h2>Student Testimonials</h2>
                <p>Hear from our successful students.</p>
            </div>
            <div className="section gallery" ref={el => (sectionsRef.current[5] = el)}>
                <h2>Gallery</h2>
                <p>Check out our vibrant campus activities.</p>
            </div>
            <div className="section faq" ref={el => (sectionsRef.current[6] = el)}>
                <h2>Frequently Asked Questions</h2>
                <p>Find answers to your queries.</p>
            </div>
            <div className="section contact" ref={el => (sectionsRef.current[7] = el)}>
                <h2>Contact Us</h2>
                <p>Get in touch for more information.</p>
            </div>
            <div className="section footer" ref={el => (sectionsRef.current[8] = el)}>
                <h2>Join Us Today!</h2>
                <p>Enroll now and start your journey!</p>
            </div>
        </div>
    );
};

export default PrestigeAcademy;