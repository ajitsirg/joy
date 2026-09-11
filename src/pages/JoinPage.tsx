import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, ArrowLeft, Check, Lock } from 'lucide-react';

export const JoinPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    window.location.replace(`/account/register${window.location.search}`);
  }, []);

  // Form states
  const [leadReference, setLeadReference] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  // KYC States
  const [pan, setPan] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [upiId, setUpiId] = useState('');

  return (
    <div className="pt-24 pb-16 bg-[#f7faf8] min-h-screen text-slate-900 selection:bg-[#cfa353]">
      <div className="max-w-3xl mx-auto px-4 space-y-6">
        
        {/* Step Header Navigation */}
        <div className="flex items-center justify-between border-b border-emerald-900/10 pb-4">
          <div className="flex items-center gap-3">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep((step - 1) as 1 | 2 | 3)}
                className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-[#074d2b]" />
              </button>
            )}
            <span className="text-2xl">👣</span>
            <h1 className="text-xl font-extrabold text-[#074d2b]">Join JoyClub</h1>
          </div>

          <span className="px-3 py-1 bg-emerald-100 text-[#074d2b] font-bold text-xs rounded-full">
            {step === 1 ? '33% Complete' : step === 2 ? '66% Complete' : '100% Complete'}
          </span>
        </div>

        {/* STEP 1 OF 3: CHOOSE YOUR MEMBERSHIP */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#074d2b] tracking-wider uppercase block">STEP 1 OF 3</span>
              <h2 className="text-3xl font-extrabold text-[#074d2b]">Choose Your Membership</h2>
            </div>

            {/* Gray Membership Card */}
            <div className="bg-white p-6 rounded-3xl border-2 border-emerald-700/40 shadow-lg space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#074d2b]" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Gray</h3>
                    <span className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded-md">ESSENTIAL</span>
                  </div>
                </div>
                <span className="text-2xl font-extrabold text-[#074d2b]">₹ 0</span>
              </div>

              <p className="text-xs text-slate-600">
                Join with ₹ 0 (gray flag). Turns green after any investment is credited.
              </p>

              <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#074d2b]" />
                  <span>Basic Wealth Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#074d2b]" />
                  <span>Community Forum Access</span>
                </div>
              </div>
            </div>

            {/* Selection Lock Notice */}
            <div className="bg-gray-100/70 p-5 rounded-2xl border border-gray-200 text-center space-y-1 text-xs text-slate-600">
              <Lock className="w-4 h-4 text-slate-500 mx-auto mb-1" />
              <p>Your selection is secure. You can upgrade or downgrade your JoyClub tier at any time after the initial 30-day onboarding period.</p>
            </div>

            {/* Bottom Join Bar */}
            <div className="pt-4 flex items-center justify-between border-t border-gray-200">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block">JOIN AMOUNT</span>
                <span className="text-2xl font-extrabold text-[#074d2b]">₹ 0</span>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3.5 rounded-xl bg-[#074d2b] hover:bg-[#05381f] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-lg flex items-center gap-2"
              >
                <span>Continue to Step 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="text-center pt-2 text-xs text-slate-500">
              Already joined? <Link to="/login" className="text-[#074d2b] font-bold hover:underline">Sign in</Link>
            </div>
          </div>
        )}

        {/* STEP 2 OF 3: TELL US ABOUT YOURSELF */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#074d2b] tracking-wider uppercase block">STEP 2 OF 3 • Personal</span>
              <h2 className="text-3xl font-extrabold text-[#074d2b]">Tell us about yourself</h2>
              <p className="text-xs text-slate-500">Please provide your legal details to ensure the security of your JoyClub account.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">Lead Reference</label>
                <input
                  type="text"
                  value={leadReference}
                  onChange={(e) => setLeadReference(e.target.value)}
                  placeholder="Enter lead username"
                  className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">Mobile Number</label>
                <div className="flex gap-2">
                  <span className="px-3 py-3 bg-gray-100 border border-gray-200 rounded-xl text-xs font-bold text-slate-700 shrink-0">
                    +91 ⌵
                  </span>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="9876543210"
                    className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b]"
                  />
                </div>
                <span className="text-[10px] text-gray-400">10-digit Indian mobile starting with 6–9.</span>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <label className="text-xs font-semibold text-slate-700">Password</label>
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-[11px] text-[#074d2b] font-bold">
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a secure password"
                  className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b]"
                />
                <span className="text-[10px] text-gray-400">Must be at least 6 characters.</span>
              </div>

              {/* Data Security Box */}
              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 flex items-start gap-3 text-xs text-slate-700">
                <ShieldCheck className="w-5 h-5 text-[#074d2b] shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-[#074d2b]">Your data is secure</h5>
                  <p className="text-[11px] text-slate-600 font-light">JoyClub uses bank-grade encryption to protect your personal information.</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-xl border border-gray-300 text-slate-700 font-bold text-xs hover:bg-gray-100 transition-colors"
                >
                  ‹ Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 rounded-xl bg-[#074d2b] hover:bg-[#05381f] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="text-center text-xs text-slate-500">
              Already joined? <Link to="/login" className="text-[#074d2b] font-bold hover:underline">Sign in</Link>
            </div>
          </div>
        )}

        {/* STEP 3 OF 3: KYC & BANK DETAILS */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-[#074d2b] tracking-wider uppercase block">STEP 3 OF 3 • KYC Docs</span>
              <h2 className="text-3xl font-extrabold text-[#074d2b]">KYC & bank details</h2>
              <p className="text-xs text-slate-500">Upload clear photos when available. Fields marked required depend on admin settings — others are optional.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">PAN</label>
                  <input type="text" value={pan} onChange={(e) => setPan(e.target.value)} placeholder="ABCDE1234F" className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b]" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Aadhaar</label>
                  <input type="text" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} placeholder="1234 5678 9012" className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">Bank name</label>
                <input type="text" value={bankName} onChange={(e) => setBankName(e.target.value)} placeholder="HDFC / SBI Bank" className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Account number</label>
                  <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="1234567890" className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b]" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">IFSC</label>
                  <input type="text" value={ifsc} onChange={(e) => setIfsc(e.target.value)} placeholder="HDFC0001234" className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">UPI ID</label>
                <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} placeholder="name@upi" className="w-full px-4 py-3 rounded-xl bg-[#f8faf9] border border-gray-200 text-xs focus:outline-none focus:border-[#074d2b]" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 block">Profile photo</label>
                <input type="file" className="w-full text-xs text-slate-500 p-2 border border-gray-200 rounded-xl bg-[#f8faf9]" />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl border border-gray-300 text-slate-700 font-bold text-xs hover:bg-gray-100 transition-colors"
                >
                  ‹ Back
                </button>
                <Link
                  to="/login"
                  className="flex-1 py-3 rounded-xl bg-[#074d2b] hover:bg-[#05381f] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Complete & open dashboard</span>
                </Link>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
