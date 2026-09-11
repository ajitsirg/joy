import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Mail, Eye, EyeOff, Clock } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'associate' | 'staff'>('associate');
  const [showPassword, setShowPassword] = useState(false);

  // Form states
  const [associateUsername, setAssociateUsername] = useState('');
  const [staffEmail, setStaffEmail] = useState('admin@joyclub.associate');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    const identity = activeTab === 'associate' ? associateUsername.trim().toUpperCase() : staffEmail.trim().toLowerCase();
    if (!identity || !password.trim()) {
      setError(`Enter your ${activeTab === 'associate' ? 'username' : 'staff email'} and password.`);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/v1/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          activeTab === 'associate'
            ? { username: identity, password: password.trim(), remember_me: true }
            : { email: identity, password: password.trim(), remember_me: true },
        ),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.access || !result.refresh) {
        throw new Error(result.detail || 'Unable to sign in. Please check your details and try again.');
      }

      // The account portal uses this same origin-scoped token key.
      localStorage.setItem('joyclub.tokens.v1', JSON.stringify({
        access: result.access,
        refresh: result.refresh,
      }));
      window.location.assign('/account/dashboard');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to sign in. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-[#074d2b] flex flex-col justify-between text-slate-900 selection:bg-[#cfa353]">
      
      {/* Top Brand Banner */}
      <div className="pt-10 pb-8 text-center text-white space-y-3 px-4">
        <div className="w-16 h-16 rounded-full bg-white p-1.5 flex items-center justify-center mx-auto shadow-xl">
          <img
            src="/brand/joy-hospitality-logo.png"
            alt="Joy Hospitality and Real Estate Group"
            className="h-full w-full object-contain"
          />
        </div>

        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            JoyClub Associate
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 font-light">
            Secure access to your wealth dashboard
          </p>
        </div>
      </div>

      {/* Main White Card Container with Rounded Top */}
      <div className="flex-1 bg-white rounded-t-[2.5rem] p-6 sm:p-12 shadow-2xl flex flex-col items-center justify-start">
        
        <div className="w-full max-w-md space-y-6">
          
          {/* Tab Switcher: Associate vs Staff */}
          <div className="p-1 bg-[#eaf4ed] rounded-full flex items-center justify-between border border-emerald-900/10">
            <button
              type="button"
              onClick={() => {
                setActiveTab('associate');
                setError('');
              }}
              className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'associate'
                  ? 'bg-white text-[#074d2b] shadow-md'
                  : 'text-slate-600 hover:text-[#074d2b]'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Associate</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('staff');
                setError('');
              }}
              className={`flex-1 py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'staff'
                  ? 'bg-white text-[#074d2b] shadow-md'
                  : 'text-slate-600 hover:text-[#074d2b]'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Staff</span>
            </button>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-5 pt-2">
            
            {activeTab === 'associate' ? (
              /* Associate Form */
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">Username</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={associateUsername}
                    onChange={(e) => setAssociateUsername(e.target.value)}
                    placeholder="Enter username"
                    autoComplete="username"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b] focus:bg-white transition-colors"
                  />
                </div>
              </div>
            ) : (
              /* Staff Form */
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">Staff email</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={staffEmail}
                    onChange={(e) => setStaffEmail(e.target.value)}
                    placeholder="admin@joyclub.associate"
                    autoComplete="email"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b] focus:bg-white transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-700">Password</label>
                <a href="#forgot" className="text-[11px] text-[#074d2b] font-bold hover:underline">Forgot?</a>
              </div>

              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="........"
                  autoComplete="current-password"
                  required
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b] focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700" role="alert">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-[#074d2b] hover:bg-[#05381f] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl mt-2"
            >
              {isSubmitting ? 'Signing in…' : 'Sign in'}
            </button>

            {/* Footer Link */}
            <div className="text-center pt-2">
              <p className="text-xs text-slate-500">
                New associate?{' '}
                <Link to="/join" className="text-[#074d2b] font-bold hover:underline">
                  Join now
                </Link>
              </p>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
};
