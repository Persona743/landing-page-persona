import React from 'react';

import IMG1 from '/assets/images/Portfolio1.png';
import IMG2 from '/assets/images/Portfolio2.png';
import IMG3 from '/assets/images/Portfolio3.png';
import IMG4 from '/assets/images/Portfolio4.png';
import IMG5 from '/assets/images/Portfolio5.png';
import IMG6 from '/assets/images/Portfolio6.png';

import './portfolio.css';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Astro.bi home page concept',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/20995247-Astro-bi-home-page-concept',
    },
    {
        id: 2,
        image: IMG2,
        title: 'ODYSSEE - Detail Page Website',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/20991316-ODYSSEE-Detail-Page-Website',
    },
    {
        id: 3,
        image: IMG3,
        title: 'Creatian - Creative Powerpoint Template',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/20980367-Creatian-Creative-Powerpoint-Template',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Speakers for Good',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/20282115-Speakers-for-Good',
    },
    {
        id: 5,
        image: IMG5,
        title: 'Marketplace - Landing Page',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/20991114-Marketplace-Landing-Page',
    },
    {
        id: 6,
        image: IMG6,
        title: 'Wesi Bank Landing Page',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/20993290-Wesi-Bank-Landing-Page',
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article className="portfolio__item" key={id}>
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
