import React from 'react';
import { BsLinkedin } from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsStackOverflow} from 'react-icons/bs'

export default function HeaderSocials() {
    return (
        <div className="header__socials">
            <a
                href="https://www.linkedin.com/in/sia-shahidi/"
                target="_blank"
            >
                <BsLinkedin />
            </a>
            <a href="https://github.com/Persona743" target="_blank">
                <FaGithub />
            </a>
            <a
                href="https://stackoverflow.com/users/15261209/siavah-shahidi"
                target="_blank"
            >
                <BsStackOverflow />
            </a>
        </div>
    );
}
