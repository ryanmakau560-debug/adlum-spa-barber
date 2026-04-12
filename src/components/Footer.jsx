import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/5 bg-black/20 backdrop-blur-md py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
            ADLUM<span className="text-purple-500">.</span>
          </Link>
          <p className="mt-4 text-gray-500 max-w-sm text-sm leading-relaxed">
            The ultimate sanctuary for the modern gentleman. 
            Redefining the standards of grooming through precision and luxury.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/services" className="hover:text-purple-400 transition-colors">Services</Link></li>
            <li><Link to="/history" className="hover:text-purple-400 transition-colors">History</Link></li>
            <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Ryan</Link></li>
          </ul>
        </div>

        {/* Studio Info */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">The Studio</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-mono">
            <li>Nairobi, Kenya</li>
            <li>Mon - Sat: 9AM - 8PM</li>
            <li className="text-purple-500 italic">By Appointment Only</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
        <p className="text-[10px] text-gray-600 uppercase tracking-widest">
          © {new Date().getFullYear()} Adlum Spa & Barber. All Rights Reserved.
        </p>
        <div className="flex gap-6 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-[10px] text-white cursor-pointer uppercase tracking-widest">Instagram</span>
          <span className="text-[10px] text-white cursor-pointer uppercase tracking-widest">Twitter</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;