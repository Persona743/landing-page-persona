import React from 'react';

import { BiCheck } from 'react-icons/bi';

import './services.css';

export default function Services() {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Custom Web Design.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Graphics Design.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Wireframing.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Mobile App Design.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Wearables App Design.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Product Design.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Figma design.</p>
                        </li>
                    </ul>
                </article>
                {/* ================ */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Creating a site's architecture.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Support and maintenance.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Web hosting.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Web programming.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Web optimization.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Check for bugs.</p>
                        </li>
                    </ul>
                </article>
                {/* ================ */}
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Video content.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Blog posts.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Interactive content.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Email Marketing.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Ebooks.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Podcasts.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>White Papers.</p>
                        </li>
                    </ul>
                </article>
                {/* ================ */}
            </div>
        </section>
    );
}
