import './App.css';
import {
    About,
    Contact,
    Experience,
    Footer,
    Header,
    Navbar,
    Portfolio,
    Services,
    Testimonial
} from './components';

import AnimatedCursor from './animation/AnimatedCursor';

export default function App() {
    return (
        <>
            {/* <AnimatedCursor /> */}
            <Header />
            <Navbar />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonial />
            <Contact />
            <Footer />
        </>
    );
}
