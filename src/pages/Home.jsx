import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-48 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Animated Badge */}
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold uppercase tracking-[0.2em]">
          The Adlum Experience
        </div>

        {/* Hero Title */}
        <h1 className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter leading-[0.85] text-white">
          REDEFINE <br />
          <span className="text-purple-500 italic">MODERN</span> <br />
          GROOMING
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Where precision meets luxury. Experience the intersection of 
          world-class barbering and high-end spa therapy in the heart of the city.
        </p>

        {/* The Working Button */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button 
            onClick={() => navigate('/services')}
            className="group relative px-10 py-5 bg-white text-black rounded-full font-black uppercase text-sm tracking-widest overflow-hidden transition-all hover:pr-14"
          >
            <span className="relative z-10">Book Appointment</span>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
              →
            </span>
          </button>

          <button 
            onClick={() => navigate('/about')}
            className="px-10 py-5 glass text-white rounded-full font-bold uppercase text-sm tracking-widest hover:bg-white/10 transition-all"
          >
            Our Story
          </button>
        </div>

        {/* Visual Decoration */}
        <div className="mt-24 grid grid-cols-3 gap-4 max-w-2xl mx-auto opacity-20">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-white"></div>
          <div className="h-[1px] bg-white"></div>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;