import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ isAdmin, setIsAdmin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'History', path: '/history' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass px-8 py-4 border border-white/10 shadow-2xl">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-white uppercase">
          ADLUM<span className="text-purple-500">.</span>
        </Link>

        {/* Desktop Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-purple-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <button 
            onClick={() => setIsAdmin(!isAdmin)}
            className={`ml-4 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
              isAdmin 
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
                : 'glass text-gray-400 hover:text-white border-white/10'
            }`}
          >
            {isAdmin ? 'Admin: Ryan' : 'User Login'}
          </button>
        </div>

        {/* Mobile Menu Button - Hidden on Desktop */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white p-2"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-4 h-0.5 bg-purple-500 ml-auto"></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[-1] transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-bold uppercase tracking-tighter text-white hover:text-purple-500 transition-colors"
          >
            {link.name}
          </Link>
        ))}
        
        <button 
          onClick={() => {
            setIsAdmin(!isAdmin);
            setIsMenuOpen(false);
          }}
          className="mt-8 px-10 py-4 glass text-purple-400 font-black uppercase tracking-[0.3em] text-xs"
        >
          {isAdmin ? 'Logout Ryan' : 'Client Login'}
        </button>

        {/* Close Button for Mobile */}
        <button 
          onClick={toggleMenu}
          className="absolute top-10 right-10 text-gray-500 text-xs uppercase tracking-widest font-bold"
        >
          [ Close ]
        </button>
      </div>
    </nav>
  );
};

export default Navbar;