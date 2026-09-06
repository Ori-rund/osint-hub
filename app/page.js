'use client';

import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('reports');
  const [filterSource, setFilterSource] = useState('all');

  const [reports, setReports] = useState([
    {
      id: 1,
      source: 'טלגרם',
      channel: 'ערוץ דיווחי שטח',
      time: 'לפני 2 דקות',
      text: 'תנועה חריגה נצפתה בצומת המרכזי. פרטים נוספים בהמשך',
      location: 'גזרת מרכז',
      severity: 'high'
    },
    {
      id: 2,
      source: 'גוגל / רשת',
      channel: 'חדשות בזמן אמת',
      time: 'לפני 8 דקות',
      text: 'עקבות עבודות דחופות, עומסים כבדים מורגשים באזור',
      location: 'תל אביב',
      severity: 'medium'
    },
    {
      id: 3,
      source: 'טלגרם',
      channel: 'מבזקי ביטחון',
      time: 'לפני 15 דקות',
      text: 'האירוע הסתיים ללא נפגעים, חזרה מלאה לשגרה',
      location: 'תל אביב',
      severity: 'low'
    }
  ]);

  const filteredReports = filterSource === 'all'
    ? reports
    : reports.filter(r => r.source === filterSource);

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-100">
      <header className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <h1 className="text-xl font-bold tracking-wide">OSINT Hub</h1>
            <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">גרסה 1.0 (Live)</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <nav className="bg-slate-900 border border-slate-800 rounded-lg p-1 flex">
          <button
            onClick={() => setActiveTab('reports')}
            className={`flex-1 text-center py-2 px-4 rounded-md text-sm font-medium transition ${activeTab === 'reports' ? 'bg-blue-600' : 'text-slate-400 hover:text-slate-100'}`}
          >
            לוח דיווחים ומפות מזהים
          </button>
          <button
            onClick={() => setActiveTab('live')}
            className={`flex-1 text-center py-2 px-4 rounded-md text-sm font-medium transition ${activeTab === 'live' ? 'bg-blue-600' : 'text-slate-400 hover:text-slate-100'}`}
          >
            שידור חי ומיקומים
          </button>
          <button
            onClick={() => setActiveTab('sources')}
            className={`flex-1 text-center py-2 px-4 rounded-md text-sm font-medium transition ${activeTab === 'sources' ? 'bg-blue-600' : 'text-slate-400 hover:text-slate-100'}`}
          >
            חיבור מקורות מידע
          </button>
        </nav>

        {activeTab === 'reports' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <aside className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h2 className="text-lg font-bold mb-4">סינון דיווחים</h2>
              <h3 className="text-sm text-slate-400 mb-2">מקור הדיווח</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterSource('all')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition ${filterSource === 'all' ? 'bg-slate-100 text-slate-900' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                >
                  הכל
                </button>
                <button
                  onClick={() => setFilterSource('טלגרם')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition ${filterSource === 'טלגרם' ? 'bg-slate-100 text-slate-900' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                >
                  טלגרם
                </button>
                <button
                  onClick={() => setFilterSource('גוגל / רשת')}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition ${filterSource === 'גוגל / רשת' ? 'bg-slate-100 text-slate-900' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                >
                  גוגל / רשת
                </button>
              </div>
            </aside>

            <section className="md:col-span-3 space-y-4">
              {filteredReports.map(report => (
                <article key={report.id} className="bg-slate-900 border border-slate-800 rounded-lg p-5 hover:border-slate-600 transition">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">{report.source}</span>
                      <span className="text-xs text-slate-400">{report.channel}</span>
                    </div>
                    <span className={`w-3 h-3 rounded-full ${report.severity === 'high' ? 'bg-red-500' : report.severity === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                  </div>
                  <p className="text-slate-100 text-base leading-relaxed">{report.text}</p>
                  <div className="mt-4 flex justify-between items-center text-xs text-slate-400">
                    <div>
                      <span className="text-slate-500">מיקום: </span>
                      {report.location}
                    </div>
                    <div>{report.time}</div>
                  </div>
                </article>
              ))}
            </section>
          </div>
        )}

        {activeTab === 'live' && (
          <div className="mt-8 bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">שידור חי ומיקומים</h2>
            <div className="aspect-video bg-slate-800 rounded flex items-center justify-center">
              <span className="text-slate-400">כאן נשלב את המפה (Leaflet / Google Maps API)</span>
            </div>
          </div>
        )}

        {activeTab === 'sources' && (
          <div className="mt-8 bg-slate-900 border border-slate-800 rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">חיבור מקורות מידע</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-slate-700 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold">WhatsApp API</h3>
                  <p className="text-sm text-slate-400">ממתין להזנת מפתחות</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium">התחבר</button>
              </div>
              <div className="border border-slate-700 rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold">Telegram Bot</h3>
                  <p className="text-sm text-slate-400">ממתין לחיבור</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium">התחבר</button>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800 mt-12 py-8 text-center text-slate-500 text-sm">
        <p>מעקב ואיסוף מידע בזמן אמת • מערכת פרטית</p>
      </footer>
    </div>
  );
}
