'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Share2, RotateCcw, Star, Download } from 'lucide-react';
import { toPng } from 'html-to-image';
import type { FlamesData } from '@/lib/flamesCalculator';

export default function Home() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FlamesData | null>(null);
  const [error, setError] = useState('');

  const resultRef = useRef<HTMLDivElement>(null);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name1.length < 2 || name2.length < 2) {
      setError('Names must be at least 2 characters long.');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/check-flames', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name1, name2 }),
      });

      const data = await res.json();

      if (res.ok) {
        setResult(data.data);
        triggerConfetti(data.data.result);
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const triggerConfetti = (resultType: string) => {
    const colors = resultType === 'Love' || resultType === 'Marriage'
      ? ['#e11d48', '#f43f5e', '#ffb3c6'] // Pinks/Reds
      : ['#3b82f6', '#10b981', '#f59e0b']; // Mixed

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors
    });
  };

  const handleShare = async () => {
    if (!result) return;

    const text = `I got "${result.result}" for ${name1} & ${name2} on the LIK Match Checker! Our Love Meter is ${result.percentage}% ❤️ Check yours now! (Made by AI-1 Students)`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Our LIK Match',
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share canceled');
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(`${text} ${window.location.href}`);
      alert('Result copied to clipboard!');
    }
  };

  const handleDownload = async () => {
    if (!resultRef.current) return;
    try {
      const dataUrl = await toPng(resultRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        style: {
          transform: 'scale(1)',
          opacity: '1'
        }
      });
      const link = document.createElement('a');
      link.download = `LIK-Match-${name1}-${name2}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err: any) {
      console.error('Failed to download image', err);
      alert('Failed to download image: ' + (err.message || 'Unknown error'));
    }
  };

  const resetForm = () => {
    setResult(null);
    setName1('');
    setName2('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 font-sans pb-20 overflow-x-hidden transition-colors duration-500">
      {/* Background Ornaments */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-rose-200/40 dark:bg-rose-900/20 blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-200/40 dark:bg-orange-900/20 blur-[100px] pointer-events-none" />

      <main className="max-w-4xl mx-auto px-4 pt-16 relative z-10">
        <header className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800/80 glass-card mb-6"
          >
            <Sparkles className="text-orange-500 dark:text-orange-400 w-5 h-5" />
            <span className="font-semibold text-sm text-slate-700 dark:text-slate-300 tracking-wide uppercase">Relationship Destiny</span>
          </motion.div>

          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500 tracking-tight mb-4"
          >
            Check Your LIK Match
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Enter two names to discover your fun relationship result. Are you destined for love, or just chaotic sibling energy?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-rose-50 dark:bg-slate-800/50 border border-rose-100 dark:border-slate-700 shadow-sm"
          >
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Made by</span>
            <span className="text-sm font-bold text-rose-500 dark:text-rose-400 tracking-wide">AI-1 Students</span>
            <Sparkles className="w-3.5 h-3.5 text-rose-400 dark:text-rose-500" />
          </motion.div>
        </header>

        <div className="max-w-xl mx-auto">
          {!result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card rounded-3xl p-6 md:p-8 relative"
            >
              <form onSubmit={handleCalculate} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Your Name</label>
                  <input
                    type="text"
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                    placeholder="E.g. Romeo"
                    className="w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white dark:focus:bg-slate-800 transition-all text-lg font-medium placeholder-slate-400 dark:placeholder-slate-500 dark:text-white shadow-sm"
                    maxLength={30}
                  />
                </div>

                <div className="flex justify-center -my-2 relative z-10">
                  <div className="bg-white dark:bg-slate-800 p-2 rounded-full shadow-md border border-slate-100 dark:border-slate-700 text-rose-500">
                    <Heart size={24} className="fill-rose-100 dark:fill-rose-900/50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Other Person's Name</label>
                  <input
                    type="text"
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                    placeholder="E.g. Juliet"
                    className="w-full px-5 py-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:bg-white dark:focus:bg-slate-800 transition-all text-lg font-medium placeholder-slate-400 dark:placeholder-slate-500 dark:text-white shadow-sm"
                    maxLength={30}
                  />
                </div>

                {error && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-center font-medium">
                    {error}
                  </motion.p>
                )}

                <button
                  type="submit"
                  disabled={loading || !name1 || !name2}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold text-lg hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-70 disabled:hover:scale-100 shadow-rose-200 dark:shadow-none shadow-lg flex items-center justify-center gap-2 mt-4"
                >
                  {loading ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Star className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <>Check Match <Sparkles className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            </motion.div>
          )}

          <AnimatePresence>
            {result && (
              <motion.div
                ref={resultRef}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: 'spring', bounce: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-orange-400 transform scale-[1.03] rounded-[2rem] blur-xl opacity-30 animate-pulse"></div>
                <div className="glass-card rounded-[2rem] p-8 relative overflow-hidden bg-white/80 dark:bg-slate-800/80">
                  <div className="text-center mb-8">
                      <p className="text-slate-500 dark:text-slate-400 font-medium mb-2 uppercase tracking-widest text-sm">The Result is in</p>
                      <div className="flex items-center justify-center gap-4 text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                        <span className="capitalize">{name1}</span>
                        <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                        <span className="capitalize">{name2}</span>
                      </div>

                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring' }}
                        className="inline-block"
                      >
                        <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-rose-600 to-orange-500 mb-2">
                          {result.result}
                        </h2>
                      </motion.div>
                      <p className="text-xl text-slate-600 dark:text-slate-300 font-medium mt-4">
                        {result.meaning}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-rose-50/50 dark:bg-rose-900/10 rounded-2xl p-4 text-center border border-rose-100 dark:border-rose-900/30">
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-1">Love Meter</p>
                        <p className="text-3xl font-bold text-rose-600 dark:text-rose-400">{result.percentage}%</p>
                      </div>
                      <div className="bg-orange-50/50 dark:bg-orange-900/10 rounded-2xl p-4 text-center border border-orange-100 dark:border-orange-900/30 flex flex-col justify-center">
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-1">Must-Watch Movie</p>
                        <p className="text-lg font-bold text-orange-600 dark:text-orange-400 leading-tight flex items-center justify-center h-full pb-1">{result.movieMatch}</p>
                      </div>
                      <div className="col-span-2 bg-slate-50/80 dark:bg-slate-800/50 rounded-2xl p-5 text-center border border-slate-100 dark:border-slate-700/50">
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-semibold mb-2">{result.nicknameTitle}</p>
                        <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">✨ {result.nickname} ✨</p>
                      </div>
                    </div>

                    <div className="italic text-center text-slate-500 dark:text-slate-400 font-medium px-4 mb-8">
                      {result.quote}
                    </div>

                    {result.timeline && (
                      <div className="mb-8 text-left bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-800/80 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                          <Sparkles className="w-24 h-24 text-rose-500" />
                        </div>

                        <div className="flex items-center gap-2 mb-6 relative z-10">
                          <div className="bg-rose-100 dark:bg-rose-900/30 p-2 rounded-full">
                            <Sparkles className="w-4 h-4 text-rose-500 dark:text-rose-400" />
                          </div>
                          <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg uppercase tracking-wide">{result.timeline.title}</h3>
                        </div>

                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.125rem] before:h-full before:w-0.5 before:bg-rose-100 dark:before:bg-rose-900/30 z-10">
                          {result.timeline.steps.map((step, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + idx * 0.2 }}
                              className="relative flex items-start gap-4"
                            >
                              <div className="flex items-center justify-center w-9 h-9 rounded-full border-4 border-white dark:border-slate-800 bg-gradient-to-br from-rose-400 to-orange-400 text-white shadow-sm shrink-0 z-10 text-sm font-bold mt-[-4px]">
                                {idx + 1}
                              </div>
                              <div className="bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 shadow-sm p-4 rounded-2xl flex-1 mt-[-8px]">
                                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed">{step}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 }}
                          className="mt-8 bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-900/10 dark:to-orange-900/10 border border-rose-100/50 dark:border-rose-900/30 p-5 rounded-2xl flex gap-4 items-start relative z-10"
                        >
                          <div className="bg-white dark:bg-slate-800 p-2.5 rounded-full shrink-0 shadow-sm border border-rose-100/50 dark:border-slate-700">
                            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                          </div>
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-widest text-rose-500 dark:text-rose-400 mb-1.5">Suggestion from LIK</p>
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">{result.timeline.suggestion}</p>
                          </div>
                        </motion.div>
                      </div>
                    )}

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 py-4 px-2 rounded-2xl bg-rose-500 dark:bg-rose-600 text-white font-bold text-base md:text-lg hover:bg-rose-600 dark:hover:bg-rose-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-rose-200 dark:shadow-none"
                    >
                      <Download className="w-5 h-5" /> Download
                    </button>
                    <button
                      onClick={handleShare}
                      className="flex-1 py-4 px-2 rounded-2xl bg-slate-900 dark:bg-slate-700 text-white font-bold text-base md:text-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-200 dark:shadow-none"
                    >
                      <Share2 className="w-5 h-5" /> Share
                    </button>
                    <button
                      onClick={resetForm}
                      className="flex-1 py-4 px-2 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-base md:text-lg hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors flex items-center justify-center gap-2"
                    >
                      <RotateCcw className="w-5 h-5" /> Reset
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
