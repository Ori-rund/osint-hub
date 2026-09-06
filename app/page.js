'use client';

import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('reports');
  const [filterSource, setFilterSource] = useState('all');

  // נתוני דוגמה לדיווחים (בעתיד יגיעו ישירות מטלגרם ומגוגל)
  const [reports, setReports] = useState([
    {
      id: 1,
      source: 'טלגרם',
      channel: 'ערוץ דיווחי שטח',
      time: 'לפני 2 דקות',
      text: 'דיווח ראשוני: תנועה חריגה נצפתה בצומת המרכזי. פרטים נוספים בהמשך.',
      location: 'גזרת מרכז',
      severity: 'high'
    },
    {
      id: 2,
      source: 'גוגל / רשת',
      channel: 'חדשות בזמן אמת',
      time: 'לפני 8 דקות',
      text: 'חסימת תנועה בעקבות עבודות תשתית דחופות, עומסים כבדים מורגשים באזור.',
      location: 'תל אביב',
      severity: 'medium'
    },
    {
      id: 3,
      source: 'טלגרם',
      channel: 'מבזקי ביטחון',
      time: 'לפני 15 דקות',
      text: 'הודעת דוברות: האירוע הסתיים ללא נפגעים, חזרה מלאה לשגרה.',
      location: 'ירושלים',
      severity: 'low'
    }
  ]);

  const filteredReports = filterSource === 'all' 
    ? reports 
    : reports.filter(r => r.source === filterSource);

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* סרגל עליון - Header ונגישות */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full animate-pulse" aria-hidden="true" />
            <h1 className="text-xl font-bold tracking-wide">מערכת מודיעין ואוסינט</h1>
            <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded-md border border-slate-700">
              גרסה 1.0 (Live)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">
              חיבורים פעילים: <strong className="text-emerald-400">2 ערוצים</strong>
            </span>
            <button 
              className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-3 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => alert('בשלב הבא נחבר את חשבון ה-Google שלך כאן')}
            >
              התחברות מנהל
            </button>
          </div>
        </div>
      </header>

      {/* אזור תוכן עיקרי */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex-1 w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* תפריט צדדי (ניווט) */}
        <aside className="md:col-span-1" aria-label="תפריט ניווט ראשי">
          <nav className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col gap-2">
            <button
              onClick={() => setActiveTab('reports')}
              className={`w-full text-right px-4 py-3 rounded-lg font-medium transition flex items-center justify-between ${
                activeTab === 'reports' ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              <span>📝 דיווחי טקסט מהירים</span>
              <span className="text-xs bg-slate-950/40 px-2 py-0.5 rounded-full">{reports.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('live')}
              className={`w-full text-right px-4 py-3 rounded-lg font-medium transition flex items-center justify-between ${
                activeTab === 'live' ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              <span>🔴 שידור חי ומיקומים</span>
              <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">חי</span>
            </button>

            <button
              onClick={() => setActiveTab('sources')}
              className={`w-full text-right px-4 py-3 rounded-lg font-medium transition flex items-center justify-between ${
                activeTab === 'sources' ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-slate-800 text-slate-300'
              }`}
            >
              <span>⚙️ ניהול ערוצים ומקורות</span>
            </button>
          </nav>

          {/* מקרא התראות מהיר */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mt-4 text-xs text-slate-400">
            <h2 className="font-bold text-slate-200 mb-2">מקרא דחיפות דיווח:</h2>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
              <span>דחיפות גבוהה / אירוע פעיל</span>
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
              <span>עדכון שוטף</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
              <span>חזרה לשגרה / ידיעה כללית</span>
            </div>
          </div>
        </aside>

        {/* מרכז המסך - תצוגה דינמית */}
        <main className="md:col-span-3">
          
          {/* מסך 1: דיווחי טקסט מהירים */}
          {activeTab === 'reports' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-4 rounded-xl">
                <h2 className="text-lg font-bold">פיד דיווחים מתפרצים</h2>
                
                {/* סינון מקורות */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setFilterSource('all')}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition ${filterSource === 'all' ? 'bg-slate-700 border-slate-600' : 'border-slate-800 hover:bg-slate-800'}`}
                  >
                    הכל
                  </button>
                  <button 
                    onClick={() => setFilterSource('טלגרם')}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition ${filterSource === 'טלגרם' ? 'bg-slate-700 border-slate-600' : 'border-slate-800 hover:bg-slate-800'}`}
                  >
                    טלגרם בלבד
                  </button>
                  <button 
                    onClick={() => setFilterSource('גוגל / רשת')}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition ${filterSource === 'גוגל / רשת' ? 'bg-slate-700 border-slate-600' : 'border-slate-800 hover:bg-slate-800'}`}
                  >
                    רשת / גוגל
                  </button>
                </div>
              </div>

              {/* רשימת הדיווחים */}
              <div className="space-y-3">
                {filteredReports.map((report) => (
                  <article 
                    key={report.id}
                    className="bg-slate-900 border border-slate-800 hover:border-slate-700 transition rounded-xl p-4 flex flex-col gap-2 relative overflow-hidden"
                  >
                    {/* קו צבע צדדי לפי חומרה */}
                    <div 
                      className={`absolute top-0 right-0 bottom-0 w-1.5 ${
                        report.severity === 'high' ? 'bg-red-500' : 
                        report.severity === 'medium' ? 'bg-yellow-500' : 'bg-emerald-500'
                      }`} 
                    />

                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-300">{report.channel}</span>
                        <span>•</span>
                        <span className="bg-slate-800 px-2 py-0.5 rounded text-blue-400">{report.source}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-slate-800/80 px-2 py-0.5 rounded text-slate-300">📍 {report.location}</span>
                        <span>{report.time}</span>
                      </div>
                    </div>

                    <p className="text-slate-100 text-base leading-relaxed mt-1 font-medium">
                      {report.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* מסך 2: שידור חי ומיקומים */}
          {activeTab === 'live' && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">מפת מיקומים ושידור חי</h2>
                <span className="text-xs text-slate-400">מתעדכן על בסיס נ.צ מחולצים</span>
              </div>
              
              {/* אזור מפה מדומה מוכן להטמעה */}
              <div className="w-full h-96 bg-slate-950 border border-slate-800 rounded-lg flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10">
                  <div className="text-4xl mb-3">🗺️</div>
                  <h3 className="font-semibold text-slate-200 mb-1">רכיב מפת אירועים חי</h3>
                  <p className="text-sm text-slate-400 max-w-md">
                    כאן נשלב את המפה (Leaflet / Google Maps API). כל דיווח שייכנס עם שם של עיר או מיקום יינעץ אוטומטית על המפה.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* מסך 3: חיבור מקורות מידע */}
          {activeTab === 'sources' && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
              <div>
                <h2 className="text-lg font-bold mb-1">ניהול איסוף נתונים</h2>
                <p className="text-sm text-slate-400">הגדרת החיבורים לערוצי הטלגרם ולמנוע החיפוש ברשת.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-800 bg-slate-950/60 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-400 mb-2">חיבור Telegram</h3>
                  <p className="text-xs text-slate-400 mb-4">איסוף ישיר מהערוצים שלך באמצעות Bot Token או Session רשמי.</p>
                  <span className="text-xs inline-block bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded border border-yellow-500/20">
                    ממתין להזנת מפתחות API
                  </span>
                </div>

                <div className="border border-slate-800 bg-slate-950/60 p-4 rounded-lg">
                  <h3 className="font-semibold text-emerald-400 mb-2">חיבור Google / OSINT Web</h3>
                  <p className="text-xs text-slate-400 mb-4">סריקת חדשות פתוחות ושאילתות חיפוש מותאמות ברשת.</p>
                  <span className="text-xs inline-block bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded border border-yellow-500/20">
                    ממתין לחיבור
                  </span>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* תחתית האתר */}
      <footer className="border-t border-slate-800/80 bg-slate-950 text-center py-4 text-xs text-slate-500">
        מערכת מעקב ואיסוף מידע בזמן אמת • מערכת פרטית
      </footer>

    </div>
  );
}
