import React from 'react';

export default function OsintHub() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8 font-sans dir-rtl" dir="rtl">
      
      {/* כותרת עליונה */}
      <header className="flex justify-between items-center mb-8 border-b border-gray-700 pb-4">
        <h1 className="text-3xl font-bold text-blue-400 tracking-wide">OSINT Hub</h1>
        <span className="bg-green-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          גרסה 1.0 (Live)
        </span>
      </header>

      {/* תפריט ניווט */}
      <nav className="flex gap-3 mb-8 overflow-x-auto pb-2" aria-label="תפריט ראשי">
        {['לוח דיווחים ומפות חמות', 'שידור חי ומיקומים', 'חיבור מקורות מידע'].map((tab, idx) => (
          <button 
            key={idx} 
            className={`whitespace-nowrap text-sm font-medium py-2 px-5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              idx === 0 ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md' : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* אזור תוכן מרכזי */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* עמודה ימנית: סינון דיווחים */}
        <section className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700/50">
          <header className="mb-6">
            <h2 className="text-xl font-semibold text-blue-300">מקור הדיווח</h2>
          </header>
          
          <div className="flex gap-2 mb-6">
            <button className="bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/30 px-4 py-1.5 rounded-md transition text-sm font-medium">הכל</button>
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-1.5 rounded-md transition text-sm font-medium">טלגרם</button>
            <button className="bg-gray-700 hover:bg-gray-600 px-4 py-1.5 rounded-md transition text-sm font-medium">גוגל / רשת</button>
          </div>

          <ul className="space-y-4">
            <li className="bg-gray-900/50 p-4 rounded-xl border-r-4 border-red-500 shadow-sm">
              <p className="text-sm font-medium text-gray-200">תנועה חריגה נצפתה בצומת המרכזי. פרטים נוספים בהמשך.</p>
              <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                <span>מקור: גוגל / רשת</span>
                <span>לפני 2 דקות</span>
              </div>
            </li>
            <li className="bg-gray-900/50 p-4 rounded-xl border-r-4 border-yellow-500 shadow-sm">
              <p className="text-sm font-medium text-gray-200">עקבות עבודות דחופות, עומסים כבדים מורגשים באזור.</p>
              <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                <span>מיקום: תל אביב</span>
                <span>לפני 8 דקות</span>
              </div>
            </li>
            <li className="bg-gray-900/50 p-4 rounded-xl border-r-4 border-blue-500 shadow-sm">
              <p className="text-sm font-medium text-gray-200">האירוע הסתיים ללא נפגעים, חזרה מלאה לשגרה.</p>
              <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                <span>מיקום: תל אביב</span>
                <span>לפני 15 דקות</span>
              </div>
            </li>
          </ul>
        </section>

        {/* עמודה שמאלית: מפה ומקורות מידע */}
        <div className="space-y-8">
          
          {/* שידור חי ומיקומים */}
          <section className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 text-blue-300">שידור חי ומיקומים</h2>
            <div className="h-56 bg-gray-900/80 rounded-xl flex flex-col items-center justify-center border border-dashed border-gray-600">
              <svg className="w-8 h-8 text-gray-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <p className="text-gray-400 text-sm">כאן נשלב את המפה</p>
              <p className="text-gray-500 text-xs mt-1">(Leaflet / Google Maps API)</p>
            </div>
          </section>

          {/* חיבור מקורות מידע */}
          <section className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700/50">
            <h2 className="text-xl font-semibold mb-5 text-blue-300">חיבור מקורות מידע</h2>
            <div className="flex flex-col space-y-3">
              <div className="flex justify-between items-center bg-gray-900/60 p-4 rounded-xl border border-gray-700/30">
                <span className="font-medium text-gray-200">WhatsApp API</span>
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm px-4 py-1.5 rounded-lg transition-colors font-medium">התחבר</button>
              </div>
              <div className="flex justify-between items-center bg-gray-900/60 p-4 rounded-xl border border-gray-700/30">
                <span className="font-medium text-gray-200">Telegram Bot</span>
                <button className="bg-sky-600 hover:bg-sky-500 text-white text-sm px-4 py-1.5 rounded-lg transition-colors font-medium">התחבר</button>
              </div>
            </div>
          </section>
          
        </div>
      </main>
      
      {/* פוטר */}
      <footer className="mt-12 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        <p>מעקב ואיסוף מידע בזמן אמת • מערכת פרטית</p>
      </footer>
    </div>
  );
}
