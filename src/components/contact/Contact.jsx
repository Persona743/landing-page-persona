import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import './contact.css';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_80y0kks',
            'template_5no918r',
            form.current,
            'ACdWP2eP6-C5i87Yd'
        );

        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>sia.shahidi.7@gmail.com</h5>
                        <a
                            href="mailto:sia.shahidi.7@gmail.com"
                            target="_blank"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>CodeWithSia</h5>
                        <a
                            href="https://m.me/siyavash.shahidi.9"
                            target="_blank"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>Whatsapp</h4>
                        <h5>+98-912 816 78 52</h5>
                        <a
                            href="https://web.whatsapp.com/send?phone=+989128167852"
                            target="_blank"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                {/* ====================== */}
                <form action="" ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Please Enter Your Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Please Enter Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Messege"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
