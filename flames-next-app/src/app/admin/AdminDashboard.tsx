'use client';

import { useEffect, useState } from 'react';
import { Download, Search, Trash2 } from 'lucide-react';
import { Submission } from '@prisma/client';

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterResult, setFilterResult] = useState('');

  const fetchSubmissions = async () => {
    try {
      const res = await fetch('/api/admin/submissions');
      if (res.ok) {
        const json = await res.json();
        setSubmissions(json.data);
      }
    } catch (error) {
      console.error('Error fetching data', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this record?')) return;
    
    try {
      const res = await fetch(`/api/admin/submissions/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setSubmissions(submissions.filter(s => s.id !== id));
      }
    } catch (error) {
      console.error('Delete error', error);
    }
  };

  const exportCSV = () => {
    const headers = ['First Name', 'Second Name', 'Result', 'Percentage', 'Movie Match', 'Date'];
    const csvContent = [
      headers.join(','),
      ...filtered.map(s => [
        s.firstName,
        s.secondName,
        s.flamesResult,
        s.lovePercentage + '%',
        `"${s.movieMatch}"`,
        new Date(s.createdAt).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'flames_submissions.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filtered = submissions.filter(s => {
    const matchesSearch = s.firstName.toLowerCase().includes(search.toLowerCase()) || 
                          s.secondName.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterResult ? s.flamesResult === filterResult : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Admin Dashboard</h1>
            <p className="text-slate-500 text-sm">Manage all LIK submissions</p>
          </div>
          <button 
            onClick={exportCSV}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <Download size={18} />
            Export CSV
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search by name..." 
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <select 
              value={filterResult}
              onChange={e => setFilterResult(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
            >
              <option value="">All Results</option>
              <option value="Friends">Friends</option>
              <option value="Love">Love</option>
              <option value="Affection">Affection</option>
              <option value="Marriage">Marriage</option>
              <option value="Enemy">Enemy</option>
              <option value="Siblings">Siblings</option>
            </select>
          </div>

          {loading ? (
            <div className="text-center py-12 text-slate-500">Loading submissions...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-sm text-slate-500 uppercase tracking-wider">
                    <th className="pb-3 font-semibold">Names</th>
                    <th className="pb-3 font-semibold">Result</th>
                    <th className="pb-3 font-semibold">Score</th>
                    <th className="pb-3 font-semibold">Movie Match</th>
                    <th className="pb-3 font-semibold">Date</th>
                    <th className="pb-3 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-8 text-slate-500">No records found.</td>
                    </tr>
                  ) : (
                    filtered.map((sub) => (
                      <tr key={sub.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                        <td className="py-4 text-slate-800 font-medium">
                          {sub.firstName} <span className="text-slate-400 font-normal mx-1">&</span> {sub.secondName}
                        </td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold
                            ${sub.flamesResult === 'Love' ? 'bg-rose-100 text-rose-700' : 
                              sub.flamesResult === 'Marriage' ? 'bg-purple-100 text-purple-700' :
                              sub.flamesResult === 'Enemy' ? 'bg-red-100 text-red-700' :
                              sub.flamesResult === 'Friends' ? 'bg-blue-100 text-blue-700' :
                              'bg-green-100 text-green-700'}`}
                          >
                            {sub.flamesResult}
                          </span>
                        </td>
                        <td className="py-4 text-slate-600 font-medium">{sub.lovePercentage}%</td>
                        <td className="py-4 text-slate-500">{sub.movieMatch}</td>
                        <td className="py-4 text-slate-500">{new Date(sub.createdAt).toLocaleDateString()}</td>
                        <td className="py-4 text-right">
                          <button 
                            onClick={() => handleDelete(sub.id)}
                            className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors inline-block"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
