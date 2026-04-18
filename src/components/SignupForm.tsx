import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Your spot in Batch 01 is confirmed. Check your inbox.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('A network error occurred.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl bg-brand-accent/10 border border-brand-accent/30 text-center"
          >
            <CheckCircle2 className="w-12 h-12 text-brand-accent mx-auto mb-4" />
            <h3 className="text-xl font-display font-medium mb-2">Access Granted.</h3>
            <p className="text-brand-text-dim text-sm">{message}</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 text-[10px] uppercase tracking-widest font-bold text-brand-accent hover:underline"
            >
              Sign up another email
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="relative group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-brand-text-dim group-focus-within:text-brand-accent transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="w-full bg-brand-surface/40 border border-brand-border rounded-xl py-5 pl-14 pr-5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-accent/50 focus:bg-brand-surface/60 transition-all disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-white text-brand-bg font-bold py-5 rounded-xl uppercase tracking-widest text-sm hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Request Early Access'
              )}
            </button>

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 text-xs font-medium justify-center"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                {message}
              </motion.div>
            )}

            <p className="text-[10px] text-brand-text-dim text-center uppercase tracking-widest pt-2">
              Batch 01 queue: 118 Slots remaining
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
