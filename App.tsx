// @ts-nocheck
/* eslint-disable */
import React, { useState, useMemo, useEffect } from 'react';
import { 
  Step, 
  SurveyState, 
  LikertValue 
} from './types';
import { 
  REGENCIES, 
  JOB_CRAFTING_ITEMS, 
  AI_IMPLEMENTATION_ITEMS, 
  AI_LITERACY_ITEMS, 
  PERFORMANCE_SCENARIOS 
} from './constants';
import { 
  CheckCircle, ArrowRight, User, Award, GraduationCap, 
  ChevronLeft, UserCheck, Phone, Mail, ChevronRight, 
  BrainCircuit, Settings, ShieldCheck, Target, Loader2, AlertCircle
} from 'lucide-react';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxUFBSgJNZ5Uy3Xovi5b3ce316Br4XRXsQ0s7H1YFOpybCk6jOjiewTDkbgSFTmHwF2/exec";

const INITIAL_STATE: SurveyState = {
  respondent: {
    fullName: '', schoolName: '', regency: '',
    phoneNumber: '', subject: '', age: '', teachingExperience: '',
  },
  jobCraftingAnswers: {},
  aiImplementationAnswers: {},
  aiLiteracyAnswers: {},
  performanceAnswers: {},
};

const getLikertLabels = (statement: string) => {
  const s = statement.toLowerCase();
  if (s.includes('memahami')) return ['Tidak paham', 'Sedikit', 'Cukup', 'Paham', 'Sangat'];
  if (s.includes('mampu') || s.includes('dapat')) return ['Tidak mampu', 'Kurang', 'Cukup', 'Mampu', 'Sangat'];
  if (s.includes('yakin')) return ['Tidak yakin', 'Kurang', 'Cukup', 'Yakin', 'Sangat'];
  if (s.includes('setuju')) return ['STS', 'TS', 'Ragu', 'S', 'SS'];
  return ['Tdk Pernah', 'Jarang', 'Kadang', 'Sering', 'Selalu'];
};

export default function App() {
  const [step, setStep] = useState<Step>(Step.Welcome);
  const [state, setState] = useState<SurveyState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isFormValid = useMemo(() => {
    const r = state.respondent;
    return r.fullName && r.schoolName && r.regency && r.phoneNumber && r.subject && r.age && r.teachingExperience;
  }, [state.respondent]);

  const handleRespondentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      respondent: { ...prev.respondent, [name]: value }
    }));
  };

  const setLikertAnswer = (section: string, id: string, value: LikertValue) => {
    setState(prev => ({ ...prev, [section]: { ...prev[section], [id]: value } }));
  };

  const setPerformanceAnswer = (id: string, choice: string, confidence: number) => {
    setState(prev => ({
      ...prev,
      performanceAnswers: { ...prev.performanceAnswers, [id]: { choice, confidence } }
    }));
  };

  const navigateStep = (target: Step) => {
    setStep(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const payload = {
        Timestamp: new Date().toISOString(),
        ...state.respondent,
        ...state.jobCraftingAnswers,
        ...state.aiImplementationAnswers,
        ...state.aiLiteracyAnswers,
        ...Object.fromEntries(
          Object.entries(state.performanceAnswers).flatMap(([id, val]: any) => [
            [id, val.choice],
            [`${id}_K`, val.confidence]
          ])
        )
      };

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
      });
      navigateStep(Step.Summary);
    } catch (err) {
      setSubmitError("Koneksi terganggu. Silakan tekan tombol 'Kirim' lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 md:py-8 min-h-screen flex flex-col justify-center font-sans antialiased text-slate-900">
      <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden relative min-h-[600px] flex flex-col">
        
        {isSubmitting && (
          <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
            <Loader2 className="w-12 h-12 text-blue-700 animate-spin mb-4" />
            <h3 className="text-xl font-black uppercase">Sedang Mengirim...</h3>
          </div>
        )}

        {step === Step.Welcome && (
          <div className="p-6 md:p-12 space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <img 
                  src="https://tse2.mm.bing.net/th/id/OIP.gQRHGL0Mov56alQpz4YPgwAAAA?pid=Api&P=0&h=180" 
                  alt="Logo UPI" 
                  className="w-24 h-24 object-contain mx-auto"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-black text-blue-800 uppercase tracking-widest">Universitas Pendidikan Indonesia</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase">Sekolah Pascasarjana - Pendidikan Teknologi dan Kejuruan</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900">
                Peran Mediasi Job Crafting dalam Pengaruh Literasi AI Terhadap Implementasi Pembelajaran pada Guru SMK
              </h1>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100">
              <h2 className="text-lg font-bold mb-1">Selamat Datang</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yth. Bapak/Ibu Guru SMK di Jawa Barat. Partisipasi Anda sangat berarti bagi pengembangan kualitas pendidikan vokasi di Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border-2 border-slate-50 bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b pb-2"><UserCheck size={18} className="text-blue-600" /> <span className="text-[10px] font-black uppercase">Peneliti Utama</span></div>
                <p className="font-bold text-lg">Abdul Rohman</p>
                <p className="text-xs font-medium text-slate-500">arassh89@upi.edu</p>
              </div>
              <div className="p-5 rounded-2xl border-2 border-slate-50 bg-white shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b pb-2"><GraduationCap size={18} className="text-blue-600" /> <span className="text-[10px] font-black uppercase">Tim Pembimbing</span></div>
                <p className="text-sm font-bold">Prof. Dr. Tuti Suartini, M.Pd</p>
                <p className="text-sm font-bold">Dr. Saripudin, S.Pd, M.T</p>
              </div>
            </div>

            <div className="bg-blue-600 rounded-2xl p-5 text-white flex items-center gap-4">
              <Award className="w-8 h-8 text-yellow-300 shrink-0" />
              <p className="text-xs font-bold leading-snug">Tersedia Pulsa/E-Wallet Rp 100.000 untuk 15 responden terpilih.</p>
            </div>

            <button onClick={() => navigateStep(Step.RespondentInfo)} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-black transition-all active:scale-[0.98]">
              Mulai Kuesioner <ArrowRight size={22} />
            </button>
          </div>
        )}

        {step === Step.RespondentInfo && (
          <div className="p-6 md:p-10 space-y-6">
            <h3 className="text-xl font-black border-b pb-4">Identitas Responden</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input name="fullName" label="Nama & Gelar" value={state.respondent.fullName} onChange={handleRespondentChange} placeholder="Contoh: Budi, S.Pd" />
              <Input name="schoolName" label="Asal SMK" value={state.respondent.schoolName} onChange={handleRespondentChange} placeholder="Contoh: SMKN 1 Bandung" />
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-black uppercase text-slate-500">Kota/Kabupaten</label>
                <select name="regency" value={state.respondent.regency} onChange={handleRespondentChange} className="p-3 border-2 border-slate-200 rounded-xl text-sm font-bold bg-white">
                  <option value="">Pilih Lokasi</option>
                  {REGENCIES.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <Input name="phoneNumber" label="WhatsApp" value={state.respondent.phoneNumber} onChange={handleRespondentChange} />
              <Input name="subject" label="Mata Pelajaran" value={state.respondent.subject} onChange={handleRespondentChange} />
              <div className="grid grid-cols-2 gap-2">
                <Input name="age" label="Usia" type="number" value={state.respondent.age} onChange={handleRespondentChange} />
                <Input name="teachingExperience" label="Masa Kerja" type="number" value={state.respondent.teachingExperience} onChange={handleRespondentChange} />
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button onClick={() => navigateStep(Step.Welcome)} className="flex-1 py-4 font-bold text-slate-400">Kembali</button>
              <button disabled={!isFormValid} onClick={() => navigateStep(Step.JobCraftingIntro)} className={`flex-[2] py-4 rounded-xl font-black text-white ${isFormValid ? 'bg-blue-700' : 'bg-slate-200'}`}>Lanjut</button>
            </div>
          </div>
        )}

        {/* --- DYNAMIC INTRO & QUESTIONS SECTIONS --- */}
        {step === Step.JobCraftingIntro && (
          <SectionIntro title="Bagian A: Job Crafting" description="Inisiatif proaktif Anda dalam menyesuaikan pekerjaan." instruction="Pilih 1-5 berdasarkan tindakan nyata Anda." icon={<Settings className="text-blue-600" />} onBack={() => navigateStep(Step.RespondentInfo)} onNext={() => navigateStep(Step.JobCrafting)} />
        )}
        {step === Step.AiImplementationIntro && (
          <SectionIntro title="Bagian B: Implementasi AI" description="Tingkat penggunaan kecerdasan buatan dalam pembelajaran." instruction="Pilih sesuai alat yang benar-benar Anda terapkan." icon={<BrainCircuit className="text-purple-600" />} onBack={() => navigateStep(Step.JobCrafting)} onNext={() => navigateStep(Step.AiImplementation)} />
        )}
        {step === Step.AiLiteracyIntro && (
          <SectionIntro title="Bagian C: Literasi AI" description="Pemahaman, etika, dan kepercayaan diri pada teknologi AI." instruction="Gunakan skala 1-5 untuk tingkat kemampuan." icon={<ShieldCheck className="text-emerald-600" />} onBack={() => navigateStep(Step.AiImplementation)} onNext={() => navigateStep(Step.AiLiteracy)} />
        )}
        {step === Step.PerformanceBasedIntro && (
          <SectionIntro title="Bagian D: Skenario" description="Pengambilan keputusan terkait AI dalam pendidikan." instruction="Pilih tindakan terbaik dan tentukan keyakinan Anda." icon={<Target className="text-orange-600" />} onBack={() => navigateStep(Step.AiLiteracy)} onNext={() => navigateStep(Step.PerformanceBased)} />
        )}

        {[Step.JobCrafting, Step.AiImplementation, Step.AiLiteracy].includes(step) && (
          <QuestionWizard 
            items={step === Step.JobCrafting ? JOB_CRAFTING_ITEMS : step === Step.AiImplementation ? AI_IMPLEMENTATION_ITEMS : AI_LITERACY_ITEMS}
            answers={step === Step.JobCrafting ? state.jobCraftingAnswers : step === Step.AiImplementation ? state.aiImplementationAnswers : state.aiLiteracyAnswers}
            onAnswer={(id, val) => setLikertAnswer(step === Step.JobCrafting ? 'jobCraftingAnswers' : step === Step.AiImplementation ? 'aiImplementationAnswers' : 'aiLiteracyAnswers', id, val)}
            onComplete={() => {
              if (step === Step.JobCrafting) navigateStep(Step.AiImplementationIntro);
              else if (step === Step.AiImplementation) navigateStep(Step.AiLiteracyIntro);
              else navigateStep(Step.PerformanceBasedIntro);
            }}
            onBack={() => {
              if (step === Step.JobCrafting) navigateStep(Step.JobCraftingIntro);
              else if (step === Step.AiImplementation) navigateStep(Step.AiImplementationIntro);
              else navigateStep(Step.AiLiteracyIntro);
            }}
          />
        )}

        {step === Step.PerformanceBased && (
          <PerformanceWizard scenarios={PERFORMANCE_SCENARIOS} answers={state.performanceAnswers} onAnswer={setPerformanceAnswer} submitError={submitError} onBack={() => navigateStep(Step.PerformanceBasedIntro)} onComplete={handleSubmit} />
        )}

        {step === Step.Summary && (
          <div className="p-12 text-center space-y-6 flex flex-col items-center justify-center flex-1">
            <CheckCircle className="w-20 h-20 text-emerald-600" />
            <h2 className="text-3xl font-black">Data Terkirim!</h2>
            <p className="text-slate-600 font-bold max-w-sm">Hatur nuhun Bapak/Ibu <strong>{state.respondent.fullName}</strong>. Kontribusi Anda sangat berarti bagi penelitian ini.</p>
            <button onClick={() => window.location.reload()} className="bg-slate-900 text-white px-10 py-4 rounded-xl font-black">Selesai</button>
          </div>
        )}
      </div>
      <footer className="mt-6 text-center text-slate-400 font-bold text-[9px] uppercase tracking-widest">
        © 2026 SEKOLAH PASCASARJANA PTK - UNIVERSITAS PENDIDIKAN INDONESIA
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function SectionIntro({ title, description, instruction, icon, onBack, onNext }: any) {
  return (
    <div className="p-8 md:p-12 space-y-6 flex flex-col items-center text-center flex-1 justify-center animate-in zoom-in-95 duration-300">
      <div className="p-6 bg-slate-50 rounded-full border border-slate-100">{React.cloneElement(icon, { size: 40 })}</div>
      <h2 className="text-2xl font-black">{title}</h2>
      <p className="text-slate-600 italic font-medium">"{description}"</p>
      <div className="p-4 bg-blue-50 text-blue-800 text-xs rounded-xl font-bold">{instruction}</div>
      <div className="flex gap-4 w-full max-w-sm pt-4">
        <button onClick={onBack} className="flex-1 font-bold text-slate-400">Kembali</button>
        <button onClick={onNext} className="flex-[2] py-4 bg-blue-700 text-white rounded-xl font-black flex items-center justify-center gap-2">Mulai <ArrowRight size={18} /></button>
      </div>
    </div>
  );
}

function QuestionWizard({ items, answers, onAnswer, onComplete, onBack }: any) {
  const [idx, setIdx] = useState(0);
  const currentItem = items[idx];
  const isLast = idx === items.length - 1;
  const currentAnswer = answers[currentItem.id];
  const labels = getLikertLabels(currentItem.text);
  const progress = ((idx + 1) / items.length) * 100;

  return (
    <div className="flex-1 flex flex-col p-6 md:p-10 animate-in fade-in duration-300">
      <div className="mb-8 space-y-2">
        <div className="flex justify-between text-[10px] font-black uppercase text-blue-700">
          <span>{idx + 1} / {items.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center text-center space-y-10">
        <h4 className="text-xl md:text-2xl font-bold leading-tight">"{currentItem.text}"</h4>
        <div className="grid grid-cols-5 gap-2 md:gap-4">
          {[1, 2, 3, 4, 5].map((v) => (
            <button key={v} onClick={() => onAnswer(currentItem.id, v)} className={`py-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-1 ${currentAnswer === v ? 'bg-blue-700 border-blue-700 text-white scale-105 shadow-lg' : 'bg-white border-slate-100 hover:border-blue-200'}`}>
              <span className="text-xl font-black">{v}</span>
              <span className="text-[7px] font-black uppercase opacity-80">{labels[v-1]}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-12 flex justify-between items-center">
        <button onClick={() => idx === 0 ? onBack() : setIdx(idx - 1)} className="flex items-center gap-1 text-sm font-bold text-slate-400 hover:text-black transition-colors"><ChevronLeft size={20} /> Kembali</button>
        <button disabled={!currentAnswer} onClick={() => isLast ? onComplete() : setIdx(idx + 1)} className={`px-10 py-4 rounded-xl font-black text-sm transition-all ${currentAnswer ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-300'}`}>{isLast ? 'Selesai' : 'Berikutnya'}</button>
      </div>
    </div>
  );
}

function PerformanceWizard({ scenarios, answers, onAnswer, onBack, onComplete, submitError }: any) {
  const [idx, setIdx] = useState(0);
  const scenario = scenarios[idx];
  const isLast = idx === scenarios.length - 1;
  const current = answers[scenario.id] || { choice: null, confidence: 0 };

  return (
    <div className="p-6 md:p-10 space-y-6 flex flex-col flex-1 animate-in slide-in-from-right duration-300">
      <div className="text-center space-y-3">
        <div className="text-[10px] font-black text-orange-600 uppercase">Skenario {idx + 1} / {scenarios.length}</div>
        <h4 className="text-lg font-bold italic leading-relaxed">"{scenario.text}"</h4>
      </div>
      <div className="space-y-3 flex-1">
        {scenario.options.map((opt: any) => (
          <button key={opt.id} onClick={() => onAnswer(scenario.id, opt.id, current.confidence)} className={`w-full p-4 rounded-xl border-2 text-left text-sm font-bold transition-all flex items-start gap-3 ${current.choice === opt.id ? 'bg-orange-50 border-orange-500 text-orange-900 shadow-sm' : 'bg-white border-slate-100'}`}>
            <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 ${current.choice === opt.id ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'}`}>{opt.id}</span>
            {opt.text}
          </button>
        ))}
      </div>
      <div className="pt-4 border-t space-y-4">
        <p className="text-[10px] font-black uppercase text-center text-slate-400">Tingkat Keyakinan Jawaban (1-5)</p>
        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4, 5].map(v => (
            <button key={v} onClick={() => onAnswer(scenario.id, current.choice, v)} className={`w-12 h-12 rounded-xl font-black border-2 transition-all ${current.confidence === v ? 'bg-black text-white border-black scale-110 shadow-md' : 'bg-white border-slate-100 text-slate-300'}`}>{v}</button>
          ))}
        </div>
      </div>
      {submitError && <div className="p-3 bg-rose-50 text-rose-700 text-xs font-bold rounded-lg flex items-center gap-2"><AlertCircle size={14}/> {submitError}</div>}
      <div className="flex justify-between pt-4">
        <button onClick={() => idx === 0 ? onBack() : setIdx(idx - 1)} className="font-bold text-slate-400">Kembali</button>
        <button disabled={!current.choice || !current.confidence} onClick={() => isLast ? onComplete() : setIdx(idx + 1)} className={`px-10 py-4 rounded-xl font-black text-sm ${current.choice && current.confidence ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-300'}`}>{isLast ? 'Kirim Data' : 'Berikutnya'}</button>
      </div>
    </div>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-black uppercase text-slate-500 ml-1">{label}</label>
      <input className="p-3 border-2 border-slate-100 rounded-xl text-sm font-bold outline-none focus:border-blue-600 focus:bg-white bg-slate-50 transition-all" {...props} />
    </div>
  );
}