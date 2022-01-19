import './Footer.css';
import React from 'react';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-header'>
                    Join asHouse Newsletter to receive our best deal of the day on restaurants
                </p>
                <p className="footer-subscription-text">
                    You and subscription whenever you want!
                </p>
                <div className="input-text">
                    <form>
                        <label htmlFor="subscription-label" className="subscription-tab-label">Search</label>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input' id="subscription-label" />
                        <button className='btn-outline'> Subscribe</button>
                    </form>
                </div>
            </section>
            <div className="footer-links-wrapper">
                <div className="footer-links-items">
                    <h2>About Us</h2>
                    <a href='/about'> About</a>
                    <p> Review</p>
                    <p> Term To Use</p>
                    <a href='/privacy'> Privacy Policy</a>
                </div>
                <div className="footer-links-items">
                    <h2>Contact Us</h2>
                    <p> Contact</p>
                    <p> Support</p>
                    <p> Number</p>
                    <p> Email</p>
                </div>
            </div>
            <div className="social-media-wrapper">
                <div className="social-logo">
                    <div>
                        <i className="fab fa-lastfm"></i>House
                    </div>
                    <small className="website-rights"> © 2021 </small>
                </div>
                <div className="social-icons">
                    <div className="social-icons-link facebook" target='blank' aria-label='Facebook'>
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="social-icons-link instagram" target='blank' aria-label='Instagram'>
                        <i className="fab fa-instagram"></i>
                    </div>
                    <div className="social-icons-link twitter" target='blank' aria-label='Twitter'>
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="social-icons-link Youtube" target='blank' aria-label='YouTube'>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
