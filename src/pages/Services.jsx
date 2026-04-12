import { useState } from 'react';

const Services = ({ addBooking }) => {
  const [selectedService, setSelectedService] = useState(null);
  
  const services = [
    { 
      id: 1, 
      name: "The Executive Fade", 
      price: "2,500 KES", 
      // Swapped: Now showing the detailed grooming/razor work for the Fade
      img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1000", 
      desc: "Precision taper with hot towel finish and signature scent." 
    },
    { 
      id: 2, 
      name: "Deep Tissue Therapy", 
      price: "4,500 KES", 
      img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1000", 
      desc: "Full body stress relief and muscle recovery using organic oils." 
    },
    { 
      id: 3, 
      name: "Beard Sculpture", 
      price: "1,500 KES", 
      // Swapped: Now showing the classic sharp barber shop look for the Sculpture
      img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1000", 
      desc: "Detailed shaping and straight-razor lining for the modern professional." 
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen text-white">
      <div className="mb-16">
        <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">The Collection</h1>
        <p className="text-gray-500 max-w-md uppercase tracking-widest text-[10px] font-bold">
          Select your treatment. All sessions are subject to admin authorization.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((s) => (
          <div key={s.id} className="group glass overflow-hidden border border-white/5 hover:border-purple-500/40 transition-all duration-500">
            <div className="h-64 overflow-hidden bg-neutral-900 flex items-center justify-center">
              <img 
                src={s.img} 
                alt={s.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100" 
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Adlum+Luxury'; }}
              />
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold tracking-tight">{s.name}</h3>
                <span className="text-purple-400 font-mono text-sm">{s.price}</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-8 h-12">
                {s.desc}
              </p>
              
              <button 
                onClick={() => setSelectedService(s)}
                className="w-full py-4 glass bg-white/5 text-white text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 hover:bg-white hover:text-black transition-all"
              >
                Request Booking
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl px-4">
          <div className="glass max-w-md w-full p-10 border border-white/20">
            <h2 className="text-3xl font-bold mb-2 tracking-tighter text-white">Schedule Session</h2>
            <p className="text-purple-500 text-[10px] mb-10 uppercase font-black tracking-widest">
              Service: {selectedService.name}
            </p>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              addBooking({ 
                ...selectedService, 
                date: e.target.date.value, 
                time: e.target.time.value 
              });
              setSelectedService(null);
            }} className="space-y-6">
              <div>
                <label className="text-[10px] uppercase text-gray-500 font-bold tracking-widest block mb-2">Desired Date</label>
                <input name="date" type="date" required className="w-full glass bg-white/5 p-4 text-white outline-none border border-white/10 focus:border-purple-500" />
              </div>
              
              <div>
                <label className="text-[10px] uppercase text-gray-500 font-bold tracking-widest block mb-2">Desired Time</label>
                <input name="time" type="time" required className="w-full glass bg-white/5 p-4 text-white outline-none border border-white/10 focus:border-purple-500" />
              </div>

              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setSelectedService(null)} className="flex-1 py-4 text-gray-500 font-bold uppercase text-[10px] tracking-widest">Go Back</button>
                <button type="submit" className="flex-1 py-4 bg-purple-600 text-white rounded-lg font-black uppercase text-[10px] tracking-widest">Confirm Request</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;