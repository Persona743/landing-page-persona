import React from 'react';
import AboutMe from '/assets/images/me-about1.jpg';

import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import './about.css';

export default function About() {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={AboutMe} alt="about image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years of Coding</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>20+ Wordlwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>30+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aliquid consequuntur ducimus corporis
                        exercitationem hic quam quidem a maiores eum tempora
                        praesentium, quasi repudiandae omnis fuga perferendis
                        nemo facilis. Reprehenderit, pariatur!
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
}
