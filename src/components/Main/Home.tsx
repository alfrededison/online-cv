import React, { useEffect } from 'react';
import Helmet from "react-helmet";
import './variables.css';
import './scss/style.scss';
import animation from './animation';

const Home: React.FC = () => {
    useEffect(() => {
        document.body.classList.add('HOME')
        animation();
        return () => {
            document.body.classList.remove('HOME')
        }
    }, []);


    return (
        <div className="is-boxed has-animations">
            <Helmet>
                <title>Online Resume/CV</title>
                <meta name="theme-color" content="#000" />
                <meta name="description" content="Manage and edit your online resume" />
                <meta name="keywords" content="resume editor, online resume" />
            </Helmet>
            <div className="body-wrap">
                <header className="site-header">
                    <div className="container">
                        <div className="site-header-inner">
                            <div className="brand header-brand">
                                <h1 className="m-0">
                                    <a href="#">
                                        <img className="header-logo-image" src="images/logo.svg" alt="Logo" />
                                    </a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    <section className="hero">
                        <div className="container">
                            <div className="hero-inner">
                                <div className="hero-copy">
                                    <h1 className="hero-title mt-0">Online Resume/CV</h1>
                                    <p className="hero-paragraph">Our resume template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                                    <div className="hero-cta"><a className="button button-primary" href="/manage/register">Create one now</a><a className="button" href="/manage/login">Manage your resume</a></div>
                                </div>
                                <div className="hero-figure anime-element">
                                    <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
                                        <rect width="528" height="396" style={{ fill: 'transparent' }} />
                                    </svg>
                                    <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
                                    <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
                                    <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
                                    <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
                                    <div className="hero-figure-box hero-figure-box-05"></div>
                                    <div className="hero-figure-box hero-figure-box-06"></div>
                                    <div className="hero-figure-box hero-figure-box-07"></div>
                                    <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
                                    <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
                                    <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="features section">
                        <div className="container">
                            <div className="features-inner section-inner has-bottom-divider">
                                <div className="features-wrap">
                                    <div className="feature text-center is-revealing">
                                        <div className="feature-inner">
                                            <div className="feature-icon">
                                                <img src="images/feature-icon-01.svg" alt="Feature 01" />
                                            </div>
                                            <h4 className="feature-title mt-24">Be Simple</h4>
                                            <p className="text-sm mb-0">Just fill in the form with your information. Forms are categrized in intuitive groups which helps you easier to think about yourself.</p>
                                        </div>
                                    </div>
                                    <div className="feature text-center is-revealing">
                                        <div className="feature-inner">
                                            <div className="feature-icon">
                                                <img src="images/feature-icon-02.svg" alt="Feature 02" />
                                            </div>
                                            <h4 className="feature-title mt-24">Be Creative</h4>
                                            <p className="text-sm mb-0">Resume is displayed in multiple themes/templates, which lets you choose the best fit for your style.</p>
                                        </div>
                                    </div>
                                    <div className="feature text-center is-revealing">
                                        <div className="feature-inner">
                                            <div className="feature-icon">
                                                <img src="images/feature-icon-03.svg" alt="Feature 03" />
                                            </div>
                                            <h4 className="feature-title mt-24">Be Portable</h4>
                                            <p className="text-sm mb-0">Resume can be viewed online as a webpage or downloaded as a PDF to be shared anywhere or even having a hard copy of it on the papers.</p>
                                        </div>
                                    </div>
                                    <div className="feature text-center is-revealing">
                                        <div className="feature-inner">
                                            <div className="feature-icon">
                                                <img src="images/feature-icon-04.svg" alt="Feature 04" />
                                            </div>
                                            <h4 className="feature-title mt-24">Be Privacy</h4>
                                            <p className="text-sm mb-0">You can choose the publicity of your resume whether it is shareable, i.e viewable over the internet, or not.</p>
                                        </div>
                                    </div>
                                    <div className="feature text-center is-revealing">
                                        <div className="feature-inner">
                                            <div className="feature-icon">
                                                <img src="images/feature-icon-05.svg" alt="Feature 05" />
                                            </div>
                                            <h4 className="feature-title mt-24">Be Customizable</h4>
                                            <p className="text-sm mb-0">You can choose which sections are shown up in the resume and which are hidden. This feature enables you to create multiple versions of the same resume for different roles/positions.</p>
                                        </div>
                                    </div>
                                    <div className="feature text-center is-revealing">
                                        <div className="feature-inner">
                                            <div className="feature-icon">
                                                <img src="images/feature-icon-06.svg" alt="Feature 06" />
                                            </div>
                                            <h4 className="feature-title mt-24">Be Open Source</h4>
                                            <p className="text-sm mb-0">Source code of the platform is available in Github and ready to be downloaded, forked or contributed.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="pricing section">
                        <div className="container-sm">
                            <div className="pricing-inner section-inner">
                                <div className="pricing-header text-center">
                                    <h2 className="section-title mt-0">Unlimited for all</h2>
                                    <p className="section-paragraph mb-0">Register once, access your resume anywhere, anytime without any limitations.</p>
                                </div>
                                <div className="pricing-tables-wrap">
                                    <div className="pricing-table">
                                        <div className="pricing-table-inner is-revealing">
                                            <div className="pricing-table-main">
                                                <div className="pricing-table-header pb-24">
                                                    <div className="pricing-table-price"><span className="pricing-table-price-currency h2">$</span><span className="pricing-table-price-amount h1">0</span><span className="text-xs">/month</span></div>
                                                </div>
                                                <div className="pricing-table-features-title text-xs pt-24 pb-24">What you will get</div>
                                                <ul className="pricing-table-features list-reset text-xs">
                                                    <li>
                                                        <span>All professional templates</span>
                                                    </li>
                                                    <li>
                                                        <span>All beautiful themes</span>
                                                    </li>
                                                    <li>
                                                        <span>Privacy management</span>
                                                    </li>
                                                    <li>
                                                        <span>Exportable as PDF</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="pricing-table-cta mb-8">
                                                <a className="button button-primary button-shadow button-block" href="/manage/register">Create resume now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="cta section">
                        <div className="container">
                            <div className="cta-inner section-inner">
                                <h3 className="section-title mt-0">Still not convinced on trying?</h3>
                                <div className="cta-cta">
                                    <a className="button button-primary button-wide-mobile" href="#">Get in touch</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="site-footer">
                    <div className="container">
                        <div className="site-footer-inner">
                            <div className="brand footer-brand">
                                <a href="#">
                                    <img className="header-logo-image" src="images/logo.svg" alt="Logo" />
                                </a>
                            </div>
                            <ul className="footer-links list-reset">
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">FAQ's</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                            </ul>
                            <ul className="footer-social-links list-reset">
                                <li>
                                    <a href="#">
                                        <span className="screen-reader-text">Facebook</span>
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#0270D7" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="screen-reader-text">Twitter</span>
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#0270D7" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="screen-reader-text">Google</span>
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#0270D7" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <div className="footer-copyright">&copy; 2019 Solid, all rights reserved</div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
};

export default Home;
