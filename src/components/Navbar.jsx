import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ isAdmin, setIsAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.setItem("adlum_admin", "false");
  };

  return (
    <nav className="fixed w-full z-50 px-6 py-6">
      {/* Glass Styling: 
          - bg-white/10 (higher opacity)
          - backdrop-blur-xl (stronger frost effect)
      */}
      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 flex justify-between items-center border border-white/20 shadow-2xl">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-black tracking-tighter text-white">
          ADLUM<span className="text-gray-500 text-[10px] ml-1 uppercase tracking-widest">Spa & Barber</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-bold text-white">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/services" className="hover:text-gray-400 transition">Services</Link>
          <Link to="/history" className="hover:text-gray-400 transition">History</Link>
          <Link to="/about" className="hover:text-gray-400 transition">About</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
          
          {isAdmin ? (
            <div className="flex items-center space-x-4 border-l border-white/20 pl-4">
              <Link to="/admin" className="text-yellow-500 hover:text-white transition">Dashboard</Link>
              <button onClick={handleLogout} className="text-red-500 hover:text-red-400 transition">Logout</button>
            </div>
          ) : (
            <Link to="/admin" className="opacity-40 hover:opacity-100 transition">Admin</Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white font-bold text-[10px] tracking-widest" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-black/80 backdrop-blur-2xl rounded-3xl p-8 flex flex-col space-y-6 text-center uppercase tracking-widest text-sm font-bold border border-white/10 text-white">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/history" onClick={() => setIsOpen(false)}>History</Link>
          <Link to="/admin" onClick={() => setIsOpen(false)}>Admin</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;