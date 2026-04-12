import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import Services from './pages/Services';
import History from './pages/History';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  // 1. INITIALIZE STATE FROM LOCALSTORAGE
  // This ensures data survives a browser refresh on the deployed site.
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("adlum_admin") === "true";
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("adlum_bookings");
    return saved ? JSON.parse(saved) : [];
  });

  // 2. SAVE TO LOCALSTORAGE WHENEVER DATA CHANGES
  useEffect(() => {
    localStorage.setItem("adlum_bookings", JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem("adlum_admin", isAdmin);
  }, [isAdmin]);

  const addBooking = (service) => {
    const newBooking = { 
      ...service, 
      id: Date.now(), 
      status: 'Pending', 
      timestamp: new Date().toLocaleTimeString() 
    };
    setBookings([newBooking, ...bookings]);
  };

  const updateBookingStatus = (id, newStatus) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
        <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services addBooking={addBooking} />} />
            <Route path="/history" element={<History bookings={bookings} isAdmin={isAdmin} />} />
            <Route path="/contact" element={<Contact isAdmin={isAdmin} />} />
            <Route path="/about" element={<About />} />
            <Route 
              path="/admin" 
              element={isAdmin ? (
                <AdminDashboard bookings={bookings} updateStatus={updateBookingStatus} />
              ) : (
                <div className="pt-40 text-center px-6">
                  <div className="glass max-w-md mx-auto p-12 border-red-500/20">
                    <h2 className="text-3xl font-black text-red-500 uppercase mb-4">Access Denied</h2>
                    <p className="text-gray-500 text-sm mb-8">Executive authentication required.</p>
                    <button onClick={() => setIsAdmin(true)} className="px-8 py-3 bg-white text-black font-bold uppercase text-[10px] tracking-widest rounded-full">Login as Ryan</button>
                  </div>
                </div>
              )} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;