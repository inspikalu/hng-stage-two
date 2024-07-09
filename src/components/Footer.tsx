// Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-customBlue text-white py-8">
            <div className="text-center mt-8">
                <Link to="#home">
                    <p className="mb-2"><FontAwesomeIcon icon={faArrowUp} /></p>
                    <p className="mb-2">BACK TO TOP</p>
                </Link>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-8 md:mb-0">
                        <ul>
                            <li className="mb-2"><a href="#">CONTACT US</a></li>
                            <li className="mb-2"><a href="#">HELP CENTER</a></li>
                            <li className="mb-2"><a href="#">TERMS AND CONDITION</a></li>
                            <li className="mb-2"><a href="#">REPORT A PRODUCT</a></li>
                            <li className="mb-2"><a href="#">OUR PRIVACY</a></li>
                            <li className="mb-2"><a href="#">LIVE CHAT</a></li>
                        </ul>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <ul>
                            <li className="mb-2"><a href="#">How to shop on EdenFashwoeld</a></li>
                            <li className="mb-2"><a href="#">Report a product</a></li>
                            <li className="mb-2"><a href="#">Dispute Resolution Policy</a></li>
                            <li className="mb-2"><a href="#">Return and Refund Timeframe</a></li>
                        </ul>
                    </div>
                    <div className="flex justify-center md:justify-end items-center space-x-4">
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
