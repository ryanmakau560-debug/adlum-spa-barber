const AdminDashboard = ({ bookings, updateStatus }) => {
  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl font-black text-white tracking-widest uppercase mb-12">Executive Command</h1>
      <div className="glass border-white/5 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5">
            <tr className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
              <th className="p-6">Client Ref</th>
              <th className="p-6">Service</th>
              <th className="p-6 text-center">Authorization</th>
              <th className="p-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {bookings.map(b => (
              <tr key={b.id} className="border-t border-white/5">
                <td className="p-6 font-mono text-gray-600">#{b.id.toString().slice(-4)}</td>
                <td className="p-6">
                  <p className="text-white font-bold">{b.name}</p>
                  <p className="text-[10px] text-purple-500">{b.date} | {b.time}</p>
                </td>
                <td className="p-6 text-center">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                    b.status === 'Completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                    b.status === 'Cancelled' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 
                    'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {b.status === 'Pending' ? 'Awaiting Auth' : b.status}
                  </span>
                </td>
                <td className="p-6 text-right space-x-2">
                  {b.status === 'Pending' && (
                    <>
                      <button onClick={() => updateStatus(b.id, 'Completed')} className="px-4 py-2 bg-green-600 text-white text-[10px] font-bold rounded hover:bg-green-500">Authorise</button>
                      <button onClick={() => updateStatus(b.id, 'Cancelled')} className="px-4 py-2 bg-white/5 text-white text-[10px] font-bold rounded border border-white/10 hover:bg-red-600">Decline</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;