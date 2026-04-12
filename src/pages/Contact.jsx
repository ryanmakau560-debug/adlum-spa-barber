import { useState } from 'react';

const Contact = ({ isAdmin }) => {
  // Mock data for the Admin's inbox
  const [messages] = useState([
    { id: 1, email: "john@doe.com", subject: "Wedding Booking", body: "Need to book for a group of 5 next Friday.", date: "13/04/2026" }
  ]);

  return (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto min-h-screen text-white">
      <div className="mb-12">
        <h2 className="text-5xl font-bold tracking-tighter uppercase mb-2">
          {isAdmin ? "Admin Inbox" : "Contact Studio"}
        </h2>
        <p className="text-gray-500 text-xs uppercase tracking-[0.3em]">
          {isAdmin ? "Confidential Client Inquiries" : "Direct line to Adlum HQ"}
        </p>
      </div>

      {!isAdmin ? (
        /* USER VIEW: SEND EMAIL */
        <div className="glass p-10 border border-white/10">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message dispatched to Ryan Makau."); }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-2 block">Email Address</label>
                <input type="email" required className="w-full glass bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-purple-500" />
              </div>
              <div>
                <label className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-2 block">Subject</label>
                <input type="text" required className="w-full glass bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-purple-500" />
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-2 block">Message</label>
              <textarea rows="6" required className="w-full glass bg-white/5 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-purple-500"></textarea>
            </div>
            <button className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-xs rounded-xl hover:bg-purple-600 hover:text-white transition-all">
              Send Transmission
            </button>
          </form>
        </div>
      ) : (
        /* ADMIN VIEW: READ EMAILS */
        <div className="space-y-4">
          {messages.length > 0 ? messages.map(m => (
            <div key={m.id} className="glass p-8 border border-white/10 group hover:border-purple-500/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-white uppercase text-sm tracking-widest mb-1">{m.subject}</h4>
                  <p className="text-[10px] text-purple-400 font-mono">{m.email}</p>
                </div>
                <span className="text-[10px] text-gray-600 font-mono">{m.date}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">"{m.body}"</p>
              <button className="text-[10px] uppercase font-black text-white px-4 py-2 border border-white/10 rounded hover:bg-white hover:text-black transition-all">
                Mark as Resolved
              </button>
            </div>
          )) : (
            <div className="glass p-20 text-center text-gray-600 italic uppercase text-[10px] tracking-widest border-dashed border-white/5">
              Inbox Clear. No pending inquiries.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Contact;