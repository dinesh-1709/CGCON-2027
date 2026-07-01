import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AboutNIT from './pages/AboutNIT';
import Tracks from './pages/Tracks';
import OrganisingCommittee from './pages/OrganisingCommittee';
import AdvisoryCommittee from './pages/AdvisoryCommittee';
import TechnicalCommittee from './pages/TechnicalCommittee';
import Dates from './pages/Dates';
import Registration from './pages/Registration';
import Submission from './pages/Submission';
import Venue from './pages/Venue';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function ScrollToTop() {
  // Simple scroll-to-top on route change
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-nit" element={<AboutNIT />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/organising" element={<OrganisingCommittee />} />
            <Route path="/advisory" element={<AdvisoryCommittee />} />
            <Route path="/technical" element={<TechnicalCommittee />} />
            <Route path="/dates" element={<Dates />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
