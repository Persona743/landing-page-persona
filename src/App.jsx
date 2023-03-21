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
    Testimonial,
} from './components';

export default function App() {
    return (
        <>
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
