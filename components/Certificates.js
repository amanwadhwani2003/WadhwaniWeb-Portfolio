"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './certificates.css';

const Certificates = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const certificatesRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setFadeIn(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the component is visible
            }
        );

        if (certificatesRef.current) {
            observer.observe(certificatesRef.current);
        }

        return () => {
            if (certificatesRef.current) {
                observer.unobserve(certificatesRef.current);
            }
        };
    }, []);

    return (
        <div ref={certificatesRef} className={`certificates-page ${fadeIn ? 'fade-in' : ''}`}>
            <div className="certificates-heading text-6xl font-bold text-center pt-14">Certifications</div>
            <div className="certificates-container">
                <div className="certificate-card cn-1 HOVER">
                    <div className="certificate-name">Understanding Data Science</div>
                    <div className="from-word">from</div>
                    <Image src="/media/datacamp-logo.png" alt="DataCamp" width={250} height={100} />
                    <div className="technologies-involved">Technologies Involved: Pycharm | Anaconda Navigator</div>
                </div>
                <div className="certificate-card cn-2 HOVER">
                    <div className="certificate-name">Intermediate Python</div>
                    <div className="from-word">from</div>
                    <Image src="/media/datacamp-logo.png" alt="DataCamp" width={250} height={100} />
                    <div className="technologies-involved">Technologies Involved: IDLE | Jupyter Lab</div>
                </div>
                <div className="certificate-card cn-3 HOVER">
                    <div className="certificate-name">Advanced SQL</div>
                    <div className="from-word">from</div>
                    <Image src="/media/hackerrank-logo.png" alt="HackerRank" width={250} height={100} />
                    <div className="technologies-involved">Technologies Involved: MySQL | PHP MyAdmin</div>
                </div>
                <div className="certificate-card cn-4 HOVER">
                    <div className="certificate-name">Intermediate REST API</div>
                    <div className="from-word">from</div>
                    <Image src="/media/hackerrank-logo.png" alt="HackerRank" width={250} height={100} />
                    <div className="technologies-involved">Technologies Involved: VS Code | JSON</div>
                </div>
                <div className="certificate-card cn-5 HOVER">
                    <div className="certificate-name">Node JS</div>
                    <div className="from-word">from</div>
                    <Image src="/media/hackerrank-logo.png" alt="HackerRank" width={250} height={100} />
                    <div className="technologies-involved">Technologies Involved: VS Code</div>
                </div>
                <div className="certificate-card cn-6 HOVER">
                    <div className="certificate-name">Intermediate JavaScript</div>
                    <div className="from-word">from</div>
                    <Image src="/media/hackerrank-logo.png" alt="HackerRank" width={250} height={100} />
                    <div className="technologies-involved">Technologies Involved: VS Code</div>
                </div>
            </div>
        </div>
    );
}

export default Certificates;
