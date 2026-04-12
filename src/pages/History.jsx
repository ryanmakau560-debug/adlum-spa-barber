import { useState } from 'react';

const History = ({ bookings = [], isAdmin }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [replyText, setReplyText] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);

  // Initial Mock Reviews
  const [reviews, setReviews] = useState([
    { 
      id: 1, 
      user: "Client #254", 
      stars: 5, 
      text: "The Executive Fade was sharp. Ryan really knows his craft.", 
      response: "Much appreciated! See you at your next session." 
    },
    { 
      id: 2, 
      user: "Client #109", 
      stars: 4, 
      text: "Great atmosphere, very premium feel.", 
      response: null 
    }
  ]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (rating === 0) return alert("Select stars first!");
    const newReview = { id: Date.now(), user: "You", stars: rating, text: comment, response: null };
    setReviews([newReview, ...reviews]);
    setComment("");
    setRating(0);
  };

  const handleAdminReply = (id) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, response: replyText } : r));
    setReplyText("");
    setReplyingTo(null);
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-screen text-white">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase italic">
            {isAdmin ? "Admin: Feedback Center" : "Your Journey"}
          </h2>
          <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-2">
            {isAdmin ? "Managing Client Relations" : "Your Archive of Excellence"}
          </p>
        </div>
        {isAdmin && (
          <div className="hidden md:block px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
            <span className="text-[10px] text-purple-400 font-black uppercase">Ryan Makau Mode</span>
          </div>
        )}
      </div>
      
      {/* 1. RECENT BOOKINGS LIST */}
      <div className="space-y-4 mb-20">
        <h3 className="text-[10px] uppercase tracking-[0.3em] text-purple-500 font-black mb-6 flex items-center gap-2">
          <span className="w-1 h-1 bg-purple-500 rounded-full"></span> Recent Sessions
        </h3>
        {bookings.length > 0 ? (
          bookings.map((b) => (
            <div key={b.id} className="glass p-6 flex justify-between items-center border border-white/5 group hover:border-white/10 transition-all">
              <div>
                <h4 className="font-bold text-lg">{b.name}</h4>
                <p className="text-[10px] text-gray-500 font-mono">{b.date} @ {b.time}</p>
              </div>
              <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter border ${
                b.status === 'Completed' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                b.status === 'Cancelled' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 
                'bg-orange-500/10 text-orange-400 border-orange-500/20'
              }`}>
                {b.status}
              </span>
            </div>
          ))
        ) : (
          <div className="glass p-10 text-center border-dashed border-white/5">
            <p className="text-gray-600 italic text-sm">The archive is currently empty.</p>
          </div>
        )}
      </div>

      {/* 2. FEEDBACK SECTION */}
      <h3 className="text-xl font-bold mb-8 uppercase tracking-widest flex items-center gap-3">
        Guest Feedback
      </h3>
      
      {/* Conditionally show Review Form or Admin Banner */}
      {!isAdmin ? (
        <form onSubmit={handleSubmitReview} className="glass p-8 mb-12 border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4">Leave a review</p>
          <div className="flex gap-2 mb-6">
            {[1,2,3,4,5].map(s => (
              <button key={s} type="button" onClick={() => setRating(s)} className={`text-3xl transition-transform hover:scale-125 ${rating >= s ? 'text-yellow-400' : 'text-gray-800'}`}>★</button>
            ))}
          </div>
          <textarea 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="TELL US ABOUT THE CRAFT..."
            className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-white outline-none focus:border-purple-500 mb-4 transition-all"
          />
          <button className="px-10 py-4 glass bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-purple-600 hover:text-white transition-all shadow-xl">
            Post Review
          </button>
        </form>
      ) : (
        <div className="mb-12 glass p-6 border-purple-500/30 bg-purple-500/5 text-center">
          <p className="text-[10px] text-purple-400 font-bold uppercase tracking-[0.4em]">
            Executive Interface Active • Client Interaction Permitted
          </p>
        </div>
      )}

      {/* 3. REVIEWS FEED */}
      <div className="space-y-6">
        {reviews.map(r => (
          <div key={r.id} className="glass p-8 border-white/5 relative bg-gradient-to-br from-white/[0.01] to-transparent">
            <div className="flex justify-between items-start mb-4">
              <span className="font-bold uppercase text-[10px] tracking-widest text-gray-500">{r.user}</span>
              <span className="text-yellow-400 text-sm">{'★'.repeat(r.stars)}</span>
            </div>
            <p className="text-gray-300 italic mb-6 text-lg">"{r.text}"</p>
            
            {/* Show Adlum Response */}
            {r.response ? (
              <div className="ml-8 p-5 border-l-2 border-purple-600 bg-white/[0.02] rounded-r-xl">
                <p className="text-[10px] font-black uppercase text-purple-500 mb-2 tracking-widest">Adlum Response</p>
                <p className="text-sm text-gray-400 leading-relaxed italic">{r.response}</p>
              </div>
            ) : (
              /* Admin Reply Logic */
              isAdmin && (
                <div className="mt-4">
                  {replyingTo === r.id ? (
                    <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
                      <textarea 
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write a professional response..."
                        className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-purple-500 outline-none"
                      />
                      <div className="flex gap-3">
                        <button onClick={() => handleAdminReply(r.id)} className="px-6 py-2 bg-purple-600 text-white text-[10px] font-black uppercase rounded-lg hover:bg-purple-500">Post Reply</button>
                        <button onClick={() => setReplyingTo(null)} className="px-6 py-2 text-gray-500 text-[10px] font-bold uppercase hover:text-white transition-colors">Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={() => setReplyingTo(r.id)} 
                      className="text-[10px] uppercase font-black text-purple-400 hover:text-white transition-all underline underline-offset-4 decoration-purple-500/30"
                    >
                      Reply to Client
                    </button>
                  )}
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;